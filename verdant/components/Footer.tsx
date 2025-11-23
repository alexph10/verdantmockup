'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="relative z-50 bg-black/90 backdrop-blur-sm border-t border-white/10 text-white py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-8" style={{ fontFamily: 'Satoshi, sans-serif' }}>
        {/* Logo/Brand */}
        <div>
          <Link href="/">
            <svg width="28" height="32" viewBox="0 0 36 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.641 33.429L11.563 27.351C7.26395 23.052 0 26.091 0 32.169V40.1H35.2821V15.788L17.641 33.429Z" fill="white"/>
              <path d="M17.641 6.67098L23.719 12.749C28.0181 17.0481 35.2821 14.0091 35.2821 7.93105V0H0V24.312L17.641 6.67098Z" fill="white"/>
            </svg>
          </Link>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-[10px] font-bold mb-2 uppercase tracking-wider">Address</h3>
          <div className="text-[10px] text-white/80 space-y-1">
            <p>Verdant Carbon Inc</p>
            <p>123 Green Street</p>
            <p>San Francisco, CA 94102</p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-[10px] font-bold mb-2 uppercase tracking-wider">Kontakt</h3>
          <div className="text-[10px] text-white/80 space-y-1">
            <p>info@verdant.co</p>
            <p>+1 555 123 4567</p>
            <Link href="#" className="block hover:text-white transition-colors">LinkedIn</Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-[10px] font-bold mb-2 uppercase tracking-wider">Quick Links</h3>
          <div className="text-[10px] text-white/80 space-y-1">
            <Link href="/team-roadmap" className="block hover:text-white transition-colors">Team</Link>
            <Link href="/product" className="block hover:text-white transition-colors">Product</Link>
            <Link href="/our-values" className="block hover:text-white transition-colors">Our Values</Link>
            <Link href="/who-we-are" className="block hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 pt-8 text-[10px] text-white/60" style={{ fontFamily: 'Satoshi, sans-serif' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>Copyright © {new Date().getFullYear()} Verdant — All rights reserved</p>
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
