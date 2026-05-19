import Link from 'next/link';
export default function NotFound(){return <main className="grid min-h-[60vh] place-items-center px-6 text-center"><div><h1 className="text-5xl font-bold text-forest">404</h1><p className="mt-4 text-muted">העמוד לא נמצא.</p><Link href="/" className="mt-6 inline-block rounded-xl bg-forest px-6 py-3 font-bold text-white">חזרה לעמוד הבית</Link></div></main>}
