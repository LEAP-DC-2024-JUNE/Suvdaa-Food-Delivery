import { FC, ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
