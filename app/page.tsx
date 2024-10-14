// app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="p-6 bg-slate-500">
      <h1 className="text-4xl font-bold mb-6 text-stone-50">Countries Information</h1>
      <ul className="space-y-4">
        <li><Link href="/countries/pakistan" className="text-blue-500 hover:underline">Pakistan</Link></li>
        <li><Link href="/countries/india" className="text-blue-500 hover:underline">India</Link></li>
        <li><Link href="/countries/china" className="text-blue-500 hover:underline">China</Link></li>
        <li><Link href="/countries/usa" className="text-blue-500 hover:underline">USA</Link></li>
        <li><Link href="/countries/brazil" className="text-blue-500 hover:underline">Brazil</Link></li>
      </ul>
    </div>
  );
}
