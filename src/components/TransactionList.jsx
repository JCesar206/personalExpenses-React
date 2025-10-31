import { useState } from 'react';
import { useTransactions } from '../context/TransactionContext';
import { useTranslation } from 'react-i18next';
import EditableTransaction from './EditableTransaction';

function TransactionList() {
  const { transactions, removeTransaction } = useTransactions();
  const { t } = useTranslation();
  const [editingIndex, setEditingIndex] = useState(null);

  return (
    <div className="space-y-2">
      {transactions.map((tx, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 p-3 rounded shadow">
          {editingIndex === index ? (
            <EditableTransaction tx={tx} index={index} onClose={() => setEditingIndex(null)} />
          ) : (
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold">{tx.description}</p>
                <p className="text-sm text-gray-500">{tx.date} • {t(tx.type)}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className={tx.type === 'gasto' ? 'text-red-500 font-semibold' : 'text-green-500 font-semibold'}>
                  ${tx.amount.toFixed(2)}
                </span>
                <button onClick={() => setEditingIndex(index)} className="text-blue-500 hover:text-blue-700 cursor-pointer">✏️</button>
                <button onClick={() => removeTransaction(index)} className="text-red-500 hover:text-red-700 cursor-pointer">🗑️</button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default TransactionList;