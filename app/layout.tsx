"use client";  // Mark as client-side to use hooks like useState and useEffect

import './globals.css';
import { ReactNode, useState, useEffect } from 'react';
import Link from 'next/link';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Load theme from localStorage or set to light by default
  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  // Toggle the theme between light and dark
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <html lang="en">
      <body className={`${theme === 'light' ? 'bg-lightBackground text-lightText' : 'bg-darkBackground text-darkText'} font-sans`}>
        {/* Header with Navigation and Theme Toggle */}
        <header className="bg-blue text-white py-4">
          <nav className="container mx-auto flex justify-between items-center">
            {/* Navigation Links */}
            <ul className="flex space-x-8">
              <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link href="/about" className="hover:text-gray-300">About Us</Link></li>
              <li><Link href="/product" className="hover:text-gray-300">Products</Link></li>
              <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
            </ul>

            {/* Theme Toggle Checkbox */}
            <div className="flex items-center">
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  onChange={toggleTheme} 
                  checked={theme === 'dark'} 
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-oceanBlue"></div>
                <span className="ml-3 text-sm font-medium text-white">Dark Mode</span>
              </label>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
