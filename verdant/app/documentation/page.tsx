'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusIcon } from '@radix-ui/react-icons';

export default function Documentation() {
  const [expandedSections, setExpandedSections] = useState<string[]>(['getting-started']);
  const [searchFocused, setSearchFocused] = useState(false);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  return (
    <div className="bg-[#f3f1e6] min-h-screen" style={{ fontFamily: 'Satoshi, sans-serif' }}>
      
      {/* Top Bar with Logo and Search */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-[#f3f1e6]/90 backdrop-blur-sm border-b border-[#0b260e]/10 z-50 flex items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <svg width="28" height="32" viewBox="0 0 36 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.641 33.429L11.563 27.351C7.26395 23.052 0 26.091 0 32.169V40.1H35.2821V15.788L17.641 33.429Z" fill="#ff8c42"/>
            <path d="M17.641 6.67098L23.719 12.749C28.0181 17.0481 35.2821 14.0091 35.2821 7.93105V0H0V24.312L17.641 6.67098Z" fill="#ff8c42"/>
          </svg>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl mx-auto">
          <div className="relative flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#0b260e]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search docs..."
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              className="flex-1 bg-transparent border-b border-[#0b260e]/20 pb-1 text-sm text-[#0b260e] placeholder-[#0b260e]/40 focus:outline-none focus:border-[#0b260e]/60 transition-colors"
            />
            <div className="flex items-center gap-1 text-[#0b260e]/30 text-xs">
              <kbd className="text-[10px]">Ctrl</kbd>
              <span className="text-[10px]">+</span>
              <kbd className="text-[10px]">K</kbd>
            </div>
          </div>
        </div>

        <div className="w-28"></div>
      </div>

      <div className="pt-16 flex">
        {/* Left Sidebar */}
        <aside className="fixed left-0 top-16 w-64 h-[calc(100vh-4rem)] bg-[#f3f1e6]/80 backdrop-blur-sm border-r border-[#0b260e]/10 overflow-y-auto">
          <div className="p-6">
            {/* Getting Started */}
            <div className="mb-6">
              <button 
                onClick={() => toggleSection('getting-started')}
                className="flex items-center justify-between w-full text-[#0b260e] text-sm font-bold mb-3 hover:text-[#0b260e]/70 transition-colors"
              >
                <span>Getting Started</span>
                <motion.div 
                  animate={{ rotate: expandedSections.includes('getting-started') ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <PlusIcon className="w-4 h-4" />
                </motion.div>
              </button>
              <AnimatePresence>
                {expandedSections.includes('getting-started') && (
                  <motion.nav 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="space-y-2 ml-3 border-l border-[#0b260e]/10 pl-3 overflow-hidden"
                  >
                    <Link href="#introduction" className="block text-[#4a5f4d] hover:text-[#0b260e] text-xs transition-colors">
                      Introduction
                    </Link>
                    <Link href="#installation" className="block text-[#4a5f4d] hover:text-[#0b260e] text-xs transition-colors">
                      Installation
                    </Link>
                    <Link href="#quick-start" className="block text-[#4a5f4d] hover:text-[#0b260e] text-xs transition-colors">
                      Quick Start
                    </Link>
                  </motion.nav>
                )}
              </AnimatePresence>
            </div>

            {/* API Reference */}
            <div className="mb-6">
              <button 
                onClick={() => toggleSection('api-reference')}
                className="flex items-center justify-between w-full text-[#0b260e] text-sm font-bold mb-3 hover:text-[#0b260e]/70 transition-colors"
              >
                <span>API Reference</span>
                <motion.div 
                  animate={{ rotate: expandedSections.includes('api-reference') ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <PlusIcon className="w-4 h-4" />
                </motion.div>
              </button>
              <AnimatePresence>
                {expandedSections.includes('api-reference') && (
                  <motion.nav 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="space-y-2 ml-3 border-l border-[#0b260e]/10 pl-3 overflow-hidden"
                  >
                    <Link href="#carbon-indexing" className="block text-[#4a5f4d] hover:text-[#0b260e] text-xs transition-colors">
                      Carbon Indexing
                    </Link>
                    <Link href="#development" className="block text-[#4a5f4d] hover:text-[#0b260e] text-xs transition-colors">
                      Development
                    </Link>
                    <Link href="#environmental-data" className="block text-[#4a5f4d] hover:text-[#0b260e] text-xs transition-colors">
                      Environmental Data
                    </Link>
                  </motion.nav>
                )}
              </AnimatePresence>
            </div>

            {/* Enterprise */}
            <div className="mb-6">
              <button 
                onClick={() => toggleSection('enterprise')}
                className="flex items-center justify-between w-full text-[#0b260e] text-sm font-bold mb-3 hover:text-[#0b260e]/70 transition-colors"
              >
                <span>Enterprise</span>
                <motion.div 
                  animate={{ rotate: expandedSections.includes('enterprise') ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <PlusIcon className="w-4 h-4" />
                </motion.div>
              </button>
              <AnimatePresence>
                {expandedSections.includes('enterprise') && (
                  <motion.nav 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="space-y-2 ml-3 border-l border-[#0b260e]/10 pl-3 overflow-hidden"
                  >
                    <Link href="#team-management" className="block text-[#4a5f4d] hover:text-[#0b260e] text-xs transition-colors">
                      Team Management
                    </Link>
                    <Link href="#data-visualization" className="block text-[#4a5f4d] hover:text-[#0b260e] text-xs transition-colors">
                      Data Visualization
                    </Link>
                    <Link href="#organization-features" className="block text-[#4a5f4d] hover:text-[#0b260e] text-xs transition-colors">
                      Organization Features
                    </Link>
                  </motion.nav>
                )}
              </AnimatePresence>
            </div>

            {/* Resources */}
            <div className="mb-6">
              <button 
                onClick={() => toggleSection('resources')}
                className="flex items-center justify-between w-full text-[#0b260e] text-sm font-bold mb-3 hover:text-[#0b260e]/70 transition-colors"
              >
                <span>Resources</span>
                <motion.div 
                  animate={{ rotate: expandedSections.includes('resources') ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <PlusIcon className="w-4 h-4" />
                </motion.div>
              </button>
              <AnimatePresence>
                {expandedSections.includes('resources') && (
                  <motion.nav 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="space-y-2 ml-3 border-l border-[#0b260e]/10 pl-3 overflow-hidden"
                  >
                    <Link href="#changelog" className="block text-[#4a5f4d] hover:text-[#0b260e] text-xs transition-colors">
                      Changelog
                    </Link>
                    <Link href="#examples" className="block text-[#4a5f4d] hover:text-[#0b260e] text-xs transition-colors">
                      Examples
                    </Link>
                  </motion.nav>
                )}
              </AnimatePresence>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="ml-64 mr-64 flex-1 p-12 min-h-screen">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-[#0b260e] mb-8">Welcome to the Verdant Documentation</h1>
          </div>
        </main>

        {/* Right Sidebar - On This Page */}
        <aside className="fixed right-0 top-16 w-64 h-[calc(100vh-4rem)] bg-[#f3f1e6]/80 backdrop-blur-sm border-l border-[#0b260e]/10 overflow-y-auto">
          <div className="p-6">
            <h2 className="text-[#0b260e] text-sm font-bold mb-4">On This Page</h2>
            <nav className="space-y-2">
              <a href="#introduction" className="block text-[#4a5f4d] hover:text-[#0b260e] text-xs transition-colors">
                Introduction
              </a>
              <a href="#installation" className="block text-[#4a5f4d] hover:text-[#0b260e] text-xs transition-colors">
                Installation
              </a>
              <a href="#quick-start" className="block text-[#4a5f4d] hover:text-[#0b260e] text-xs transition-colors">
                Quick Start
              </a>
              <a href="#carbon-indexing" className="block text-[#4a5f4d] hover:text-[#0b260e] text-xs transition-colors">
                Carbon Indexing API
              </a>
            </nav>

            <div className="mt-8 pt-8 border-t border-[#0b260e]/10">
              <h3 className="text-[#0b260e] text-xs font-bold mb-2">Links</h3>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="block text-[#4a5f4d] hover:text-[#0b260e] text-xs transition-colors mb-2">
                GitHub
              </a>
              <a href="#" className="block text-[#4a5f4d] hover:text-[#0b260e] text-xs transition-colors">
                Report Issue
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
