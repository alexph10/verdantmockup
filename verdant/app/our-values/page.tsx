'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const ProductModel = dynamic(
  () => import('@/components/ProductModel').then((mod) => ({ default: mod.ProductModel })),
  { ssr: false }
);

export default function OurValues() {
  return (
    <div className="min-h-screen flex flex-col relative" style={{ backgroundColor: 'rgba(255, 255, 220, 0.95)', fontFamily: 'Satoshi, sans-serif' }}>
      {/* Logo - Top Left */}
      <Link href="/" className="absolute top-8 left-8 z-50">
        <svg width="28" height="32" viewBox="0 0 36 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.641 33.429L11.563 27.351C7.26395 23.052 0 26.091 0 32.169V40.1H35.2821V15.788L17.641 33.429Z" fill="#cc5500"/>
          <path d="M17.641 6.67098L23.719 12.749C28.0181 17.0481 35.2821 14.0091 35.2821 7.93105V0H0V24.312L17.641 6.67098Z" fill="#cc5500"/>
        </svg>
      </Link>
      
      {/* Navigation Links - Top Middle Left */}
      <div className="absolute top-8 left-24 z-50 flex items-center gap-8">
        <Link href="/who-we-are" className="text-sm font-medium transition-colors hover:text-[#cc5500]" style={{ color: '#021e06' }}>
          Who We Are
        </Link>
        <Link href="/our-values" className="text-sm font-medium transition-colors hover:text-[#cc5500]" style={{ color: '#021e06' }}>
          Our Values
        </Link>
        <Link href="/team-roadmap" className="text-sm font-medium transition-colors hover:text-[#cc5500]" style={{ color: '#021e06' }}>
          Team Roadmap
        </Link>
      </div>
      
      {/* 3D Model - 40% Width Right Side */}
      <div className="absolute top-0 right-0 w-[40%] h-full pointer-events-auto z-10">
        <ProductModel modelPath="/tangerine_tree.glb" scale={1} position={[0, -1, 0]} disableZoom={true} />
      </div>
      
      {/* Text Content - Left Side */}
      <div className="flex-grow flex items-center px-16 py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-8" style={{ color: '#021e06' }}>Our Values</h1>
          
          <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#021e06' }}>
            <p>
              At Verdant, we believe in transparency, accountability, and measurable impact. Every decision we make is guided by our commitment to environmental responsibility and our belief that technology can be a force for positive change.
            </p>
            
            <p>
              We value collaboration over competition, recognizing that the climate crisis requires collective action. We build tools that empower individuals, businesses, and communities to take ownership of their environmental impact. We believe in making sustainability accessible, practical, and rewarding for everyone, regardless of their starting point.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
