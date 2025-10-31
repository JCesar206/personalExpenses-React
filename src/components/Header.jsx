import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';

function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-4 border-b dark:border-gray-700">
      <h1 className="text-xl font-bold text-blue-700 dark:text-white hover:text-blue-400">Gastos App 💴 💶 💷</h1>
      <div className="flex items-center gap-4">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;