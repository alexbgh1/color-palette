import ThemeSwitcher from "@/app/components/Theme/ThemeSwitcher";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center p-4 mb-4 border-b border-gray-200 dark:border-gray-700">
      <h1 className="text-2xl font-bold tracking-wider">Color Palette</h1>
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
