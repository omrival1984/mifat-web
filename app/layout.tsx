import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = { title: 'מפעת | פתרונות פינוי וטיפול בפסולת', description: 'אתר תדמית תאגידי למפעת — פינוי, מיון, מחזור והטמנת פסולת.' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="he" dir="rtl"><body><Header />{children}<Footer /></body></html>; }
