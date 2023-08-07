import Link from "next/link";
import { GithubIcon } from "@/app/icons/icons";

const Footer = () => {
  return (
    <footer
      className="w-full flex flex-row items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400
    py-4 border-t border-gray-200 dark:border-gray-700"
    >
      <p>Coded by </p>
      <Link
        href="https://github.com/alexbgh1/color-palette"
        target="_blank"
        className="block text-accentDark/90 hover:text-accentDark dark:text-accent/90 dark:hover:text-accent"
      >
        <section className="flex flex-row items-center justify-center gap-2">
          <span>Alex</span>
          <div className="w-5">
            <GithubIcon />
          </div>
        </section>
      </Link>
    </footer>
  );
};

export default Footer;
