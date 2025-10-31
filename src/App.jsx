import Header from './components/Header';
import Footer from './components/Footer';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import BalanceSummary from './components/BalanceSummary';
import { useTransactions } from './context/TransactionContext';
import './App.css';

function App() {
  const { theme } = useTransactions();

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col justify-between font-inter">
        <Header />
        <main className="flex-grow max-w-3xl mx-auto px-4 py-6 pb-20">
          <BalanceSummary />
          <TransactionForm />
          <TransactionList />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;