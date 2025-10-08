import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-bold">
            KAA LINE Pages
          </div>
          <div className="flex gap-4">
            <Link href="/" className="hover:underline">Home</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
