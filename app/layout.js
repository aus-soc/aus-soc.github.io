import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Society of Cybersecurity @AUS",
  description: "The SOC club at the American University of Sharjah offers events, talks, and competitions to help students of all skill levels explore and enter the world of cybersecurity.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
