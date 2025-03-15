import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MovieStream - Stream your favorite movies",
  description: "Stream your favorite movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
          {children}
      </body>
    </html>
  );
}
