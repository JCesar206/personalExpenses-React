import { useState } from 'react';
import { useTransactions } from '../context/TransactionContext';
import { useTranslation } from 'react-i18next';

function EditableTransaction({ tx, index, onClose }) {
  const { updateTransaction } = useTransactions();
  const { t } = useTranslation();

  const [form, setForm] = useState({
    description: tx.description,
    amount: tx.amount.toString(),
    date: tx.date,
    type: tx.type
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedTx = {
      description: form.description.trim(),
      amount: parseFloat(form.amount),
      date: form.date,
      type: form.type
    }

    if (!updatedTx.description || isNaN(updatedTx.amount) || !updatedTx.date || !updatedTx.type) {
      alert(t('Por favor llena todos los campos'));
      return;
    }

    updateTransaction(index, updatedTx);
    onClose();
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 dark:bg-gray-700 p-3 rounded space-y-2">
      <input
        name="description"
        value={form.description}
        onChange={handleChange}
        className="input"
        placeholder={t('description')}
        required
      />
      <input
        name="amount"
        type="number"
        value={form.amount}
        onChange={handleChange}
        className="input"
        placeholder={t('amount')}
        required
      />
      <input
        name="date"
        type="date"
        value={form.date}
        onChange={handleChange}
        className="input"
        required
      />
      <select name="type" value={form.type} onChange={handleChange} className="input">
        <option value="gasto">{t('expense')}</option>
        <option value="abono">{t('income')}</option>
      </select>
      <div className="flex gap-2 justify-end">
        <button type="submit" className="btn-primary">{t('add')}</button>
        <button type="button" onClick={onClose} className="btn-secondary">{t('clear')}</button>
      </div>
    </form>
  )
}

export default EditableTransaction;