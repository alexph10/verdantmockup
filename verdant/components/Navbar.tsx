'use client';

import Link from 'next/link';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const AsciiForestFlow = dynamic(
  () => import('./AsciiTree'),
  { ssr: false }
);

export function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[9999] bg-black/90 backdrop-blur-sm" style={{ fontFamily: 'Satoshi, sans-serif' }}>
        <div className="flex items-center justify-center px-8 py-2 border-b border-white/20">
          {/* Logo on left */}
          <Link href="/" className="absolute left-8" onClick={() => setActiveDropdown(null)}>
            <svg width="20" height="28" viewBox="0 0 36 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.641 33.429L11.563 27.351C7.26395 23.052 0 26.091 0 32.169V40.1H35.2821V15.788L17.641 33.429Z" fill="white"/>
              <path d="M17.641 6.67098L23.719 12.749C28.0181 17.0481 35.2821 14.0091 35.2821 7.93105V0H0V24.312L17.641 6.67098Z" fill="white"/>
            </svg>
          </Link>
          
          {/* Center navigation links */}
          <div className="flex items-center gap-8">
            <Link href="/who-we-are" className="text-white/80 text-xs transition-colors duration-200">
              Who we are
            </Link>
            <button 
              onClick={() => toggleDropdown('product')} 
              className={`text-xs transition-colors duration-200 ${activeDropdown === 'product' ? 'text-white' : 'text-white/80'}`}
            >
              Product
            </button>
            <Link href="/our-values" className="text-white/80 text-xs transition-colors duration-200">
              Our values
            </Link>
            <Link href="/team-roadmap" className="text-white/80 text-xs transition-colors duration-200">
              Team Roadmap
            </Link>
          </div>
          
          {/* Buttons on right */}
          <div className="absolute right-8 flex items-center gap-3">
            <Link href="/documentation" className="w-24 py-1 bg-[#021e06] text-white hover:bg-[#033d0c] transition-colors duration-200 font-normal text-[10px] shadow-sm text-center">
              Documentation
            </Link>
            <Link href="/book-demo" className="w-24 py-1 bg-[#021e06] text-white hover:bg-[#033d0c] transition-colors duration-200 font-normal text-[10px] shadow-sm text-center">
              Book A Demo
            </Link>
          </div>
        </div>

        {/* Dropdown Panel - Connected to navbar */}
        <div 
          className={`bg-black/95 backdrop-blur-md transition-all duration-300 ease-in-out border-b border-white/20 ${
            activeDropdown === 'product' ? 'max-h-[200px] overflow-hidden' : 'max-h-0 overflow-hidden'
          }`}
        >
          <div className="px-8 py-6 flex gap-0">
            {activeDropdown === 'product' && (
              <>
                <div className="w-[60%] text-white pr-8 border-r border-white/20" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  <div className="grid grid-cols-3 gap-8">
                    {/* API Column */}
                    <div className="flex flex-col justify-between">
                      <Link href="/api" className="font-bold text-sm mb-3 hover:text-white/80 transition-colors">API</Link>
                      <div className="text-white/70 text-xs space-y-2">
                        <p>Carbon Indexing</p>
                        <p>Development</p>
                        <p>Environmental Data</p>
                      </div>
                    </div>
                    
                    {/* Enterprise Column */}
                    <div className="flex flex-col justify-between">
                      <Link href="/enterprise" className="font-bold text-sm mb-3 hover:text-white/80 transition-colors">Enterprise</Link>
                      <div className="text-white/70 text-xs space-y-2">
                        <p>Team Expense & Resource Management</p>
                        <p>Data Visualization & Specialized Carbon Monitoring</p>
                        <p>Quality-of-life Organization Features</p>
                      </div>
                    </div>
                    
                    {/* Everyone Else Column */}
                    <div className="flex flex-col justify-between">
                      <Link href="/everyone-else" className="font-bold text-sm mb-3 hover:text-white/80 transition-colors">Everyone Else</Link>
                      <div className="text-white/70 text-xs space-y-2">
                        <p>Carbon Footprint Calculation</p>
                        <p>Transportation & Food Item Carbon Indexing</p>
                        <p>Electricity & Gas Expenditure</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[40%] pl-8 h-[150px]">
                  <AsciiForestFlow />
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}