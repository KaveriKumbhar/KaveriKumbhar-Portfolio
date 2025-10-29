"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md shadow-lg z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold hover:opacity-80 transition">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            KaveriKumbhar
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-blue-400 font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/cv.pdf"
            download
            className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 font-medium"
          >
            <FiDownload size={18} />
            Download CV
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button 
          className="md:hidden text-gray-300 hover:text-blue-400"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>

        {/* Mobile Navigation */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-gray-900 shadow-lg md:hidden border-t border-gray-800">
            <div className="flex flex-col p-4 gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-blue-400 font-medium py-2 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/cv.pdf"
                download
                className="flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300 font-medium"
              >
                <FiDownload size={18} />
                Download CV
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
