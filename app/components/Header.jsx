import ThemeSwitcher from "@/app/components/Theme/ThemeSwitcher";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center p-4 mb-4 shadow-sm dark:shadow-primary">
      <h1 className="text-2xl font-bold tracking-wider">Color Palette</h1>
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
