import { FC, ReactNode } from "react";
import { Header } from "@/components/Header";
// import { Footer } from '@/components/ui/Footer';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
