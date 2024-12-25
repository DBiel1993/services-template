"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-green-800 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          TreeAuger Pro
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="#services" className="hover:text-green-300">
            Services
          </Link>
          <Link href="#about" className="hover:text-green-300">
            About
          </Link>
          <Link href="#contact" className="hover:text-green-300">
            Contact
          </Link>
        </nav>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <Menu />
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link href="#services" className="block px-4 py-2 hover:bg-green-700">
            Services
          </Link>
          <Link href="#about" className="block px-4 py-2 hover:bg-green-700">
            About
          </Link>
          <Link href="#contact" className="block px-4 py-2 hover:bg-green-700">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
