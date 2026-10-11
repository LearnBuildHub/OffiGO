import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {

  title: "OffiGo - Your Daily Corporate Commute Network",

  description: "Same Office. Same Route. Better Together.",

};

export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {

  return (
<html lang="en">
<body className="antialiased bg-[#030B17] text-white">

        {children}
</body>
</html>

  );

}
 
