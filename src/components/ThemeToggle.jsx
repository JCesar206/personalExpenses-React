import { useTransactions } from '../context/TransactionContext';

function ThemeToggle() {
  const { theme, setTheme } = useTransactions();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <button onClick={toggleTheme} className="text-xl cursor-pointer">
      {theme === 'dark' ? '🌞' : '🌙'}
    </button>
  );
}

export default ThemeToggle;
