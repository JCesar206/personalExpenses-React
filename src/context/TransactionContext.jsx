import { createContext, useContext, useState, useEffect } from 'react';
import i18n from '../i18n';

const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('transactions');
    return saved ? JSON.parse(saved) : [];
  });

  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'es');

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('lang', lang);
    i18n.changeLanguage(lang);
  }, [lang]);

  const addTransaction = (tx) => setTransactions([...transactions, tx]);
  const removeTransaction = (index) => {
    const updated = [...transactions];
    updated.splice(index, 1);
    setTransactions(updated);
  }

const updateTransaction = (index, updatedTx) => {
  const updatedList = [...transactions];
  updatedList[index] = updatedTx;
  setTransactions(updatedList);
}
  
  const clearTransactions = () => setTransactions([])

  const summary = transactions.reduce(
    (acc, tx) => {
      if (tx.type === 'gasto') acc.expenses += tx.amount
      else acc.income += tx.amount
      return acc
    },
    { expenses: 0, income: 0 }
  )

  const balance = summary.income - summary.expenses

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        addTransaction,
        removeTransaction,
        updateTransaction,
        clearTransactions,
        theme,
        setTheme,
        lang,
        setLang,
        summary,
        balance
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export const useTransactions = () => useContext(TransactionContext);