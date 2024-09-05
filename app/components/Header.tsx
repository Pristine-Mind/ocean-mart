import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-4 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto">
        <ul className="flex justify-around">
          <li>
            <Link href="/" className="relative hover:text-gray-300 transition-colors duration-300">
              Home
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-white transition-all duration-300 hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link href="/about" className="relative hover:text-gray-300 transition-colors duration-300">
              About Us
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-white transition-all duration-300 hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link href="/products" className="relative hover:text-gray-300 transition-colors duration-300">
              Products
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-white transition-all duration-300 hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link href="/contact" className="relative hover:text-gray-300 transition-colors duration-300">
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-white transition-all duration-300 hover:w-full"></span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
