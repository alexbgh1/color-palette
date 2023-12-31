import "./globals.css";
import { Poppins } from "next/font/google";
import ThemeProv from "@/app/providers/themeProv";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "700"],
  subsets: ["latin-ext"],
});

export const metadata = {
  title: "Color Palette",
  description: "Color Palette using Linear Interpolation",
  icons: {
    icon: "/color-circle.png",
  },
  keywords: "Color Palette",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${poppins.className} flex overflow-x-hidden h-screen flex-col items-center bg-primary dark:bg-primaryDark antialiased`}
      >
        {/* Icon from: https://www.flaticon.com/authors/nikita-golubev */}
        <link rel="icon" href={metadata.icons.icon} />
        <ThemeProv attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <Footer />
        </ThemeProv>
      </body>
    </html>
  );
}
