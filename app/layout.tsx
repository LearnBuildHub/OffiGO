import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'OffiGo — Your Daily Corporate Commute Network',description:'Daily corporate commute network for verified professionals.',manifest:'/manifest.webmanifest',themeColor:'#06152d'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
