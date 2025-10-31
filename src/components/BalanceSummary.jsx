import { useTransactions } from '../context/TransactionContext';
import { useTranslation } from 'react-i18next';

function BalanceSummary() {
  const { summary, balance } = useTransactions();
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-center">
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
        <p className="text-sm">{t('totalIncome')}</p>
        <p className="text-green-500 font-bold text-lg">${summary.income.toFixed(2)}</p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
        <p className="text-sm">{t('totalExpenses')}</p>
        <p className="text-red-500 font-bold text-lg">${summary.expenses.toFixed(2)}</p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
        <p className="text-sm">{t('balance')}</p>
        <p className="{balance >= 0 ? 'text-green-600' : 'text-red-600'} font-bold text-lg">
          ${balance.toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default BalanceSummary;