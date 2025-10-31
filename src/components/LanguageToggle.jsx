import { useTransactions } from '../context/TransactionContext';

function LanguageToggle() {
  const { lang, setLang } = useTransactions()

  const toggleLang = () => {
    setLang(lang === 'es' ? 'en' : 'es');
  }

  return (
    <button onClick={toggleLang} className="text-sm text-blue-400 dark:text-white hover:text-blue-700 hover:underline cursor-pointer font-bold hover:text-blue-700 dark:hover:text-blue-500">
      {lang === 'es' ? 'EN' : 'ES'}
    </button>
  );
}

export default LanguageToggle;