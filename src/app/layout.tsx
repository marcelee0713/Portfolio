import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { UserProvider } from "./context/UserContext";
import ThemeSwitcher from "./ThemeSwitcher";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio | Marcel Magbual",
  description: "Get to know who's Marcel?",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="h-screen max-w-full scroll-smooth"
      suppressHydrationWarning={true}
    >
      <body className={`${inter.className} dark:bg-primary h-fit`}>
        <UserProvider>
          <ThemeSwitcher />
          <main className="flex flex-col gap-10 h-full container mx-auto px-4 py-2">
            {children}
          </main>
        </UserProvider>
      </body>
    </html>
  );
}
