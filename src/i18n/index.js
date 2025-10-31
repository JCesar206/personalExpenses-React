import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      add: 'Add',
      clear: 'Clear',
      expense: 'Expense',
      income: 'Income',
      balance: 'Balance',
      totalExpenses: 'Total Expenses',
      totalIncome: 'Total Income',
      description: 'Description',
      amount: 'Amount',
      date: 'Date',
      type: 'Type'
    }
  },
  es: {
    translation: {
      add: 'Agregar',
      clear: 'Limpiar',
      expense: 'Gasto',
      income: 'Abono',
      balance: 'Balance',
      totalExpenses: 'Total de gastos',
      totalIncome: 'Total de abonos',
      description: 'Descripción',
      amount: 'Monto',
      date: 'Fecha',
      type: 'Tipo'
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('lang') || 'es',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;