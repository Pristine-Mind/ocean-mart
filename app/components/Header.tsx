import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-800 text-white py-4">
      <nav className="container mx-auto">
        <ul className="flex justify-around">
          <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link href="/about" className="hover:text-gray-300">About Us</Link></li>
          <li><Link href="/products" className="hover:text-gray-300">Products</Link></li>
          <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
