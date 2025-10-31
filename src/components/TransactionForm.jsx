import { useState } from 'react';
import { useTransactions } from '../context/TransactionContext';
import { useTranslation } from 'react-i18next';

function TransactionForm() {
  const { addTransaction } = useTransactions();
  const { t } = useTranslation();
  const [form, setForm] = useState({
    description: '',
    amount: '',
    date: '',
    type: 'gasto'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const tx = {
      ...form,
      amount: parseFloat(form.amount)
    }
    addTransaction(tx);
    clearForm();
  }

  const clearForm = () => {
    setForm({ description: '', amount: '', date: '', type: 'gasto' })
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-4 rounded shadow mb-6 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label>{t('description')}</label>
          <input name="description" value={form.description} onChange={handleChange} required className="input" />
        </div>
        <div>
          <label>{t('amount')}</label>
          <input name="amount" type="number" value={form.amount} onChange={handleChange} required className="input" />
        </div>
        <div>
          <label>{t('date')}</label>
          <input name="date" type="date" value={form.date} onChange={handleChange} required className="input" />
        </div>
        <div>
          <label>{t('type')}</label>
          <select name="type" value={form.type} onChange={handleChange} className="input">
            <option value="gasto">{t('expense')}</option>
            <option value="abono">{t('income')}</option>
          </select>
        </div>
      </div>
      <div className="flex gap-4 justify-end">
        <button type="submit" className="btn-primary">{t('add')}</button>
        <button type="button" onClick={clearForm} className="btn-secondary">{t('clear')}</button>
      </div>
    </form>
  );
}

export default TransactionForm;