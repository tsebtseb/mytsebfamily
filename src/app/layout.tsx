import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/context/userContext";

export const metadata: Metadata = {
  title: "My Family",
  description: "Best's Family Website",
  icons: {
    icon: ["favicon.ico?v=4"],    
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AuthProvider>
        {children}
        </AuthProvider>
      </body>
    </html>
  );
}
