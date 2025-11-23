'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

const ProductModel = dynamic(
  () => import('@/components/ProductModel').then((mod) => ({ default: mod.ProductModel })),
  { ssr: false }
);

export default function Product() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#021e06', fontFamily: 'Satoshi, sans-serif' }}>
      <Navbar />
      
      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center px-8 py-16">
        <div className="max-w-5xl w-full">
          <h1 className="text-4xl font-bold text-white text-center mb-16">Our Products</h1>
          
          {/* Three Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* API Card */}
            <div className="h-[500px] transition-all duration-300 hover:opacity-80 relative" style={{ backgroundColor: 'rgba(255, 255, 220, 0.95)' }}>
              {/* 3D Model */}
              <div className="absolute top-0 left-0 w-full h-64 pointer-events-auto z-20">
                <ProductModel modelPath="/orchid.glb" scale={10} position={[0.3, -1, -2]} />
              </div>
              <Link href="/api" className="absolute inset-0 z-10">
                <div className="h-full flex flex-col justify-end p-8 relative z-10">
                  <div className="mb-4">
                    <h2 className="text-2xl font-bold mb-2" style={{ color: '#021e06' }}>API</h2>
                    <p className="text-sm" style={{ color: 'rgba(2, 30, 6, 0.7)' }}>Carbon Indexing, Development, and Environmental Data</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Enterprise Card */}
            <div className="h-[500px] transition-all duration-300 hover:opacity-80 relative" style={{ backgroundColor: 'rgba(255, 255, 220, 0.95)' }}>
              {/* 3D Model */}
              <div className="absolute top-0 left-0 w-full h-64 pointer-events-auto z-20">
                <ProductModel modelPath="/orange.glb" scale={8} position={[-0.1, -0.1, 0]} />
              </div>
              <Link href="/enterprise" className="absolute inset-0 z-10">
                <div className="h-full flex flex-col justify-end p-8 relative z-10">
                  <div className="mb-4">
                    <h2 className="text-2xl font-bold mb-2" style={{ color: '#021e06' }}>Enterprise</h2>
                    <p className="text-sm" style={{ color: 'rgba(2, 30, 6, 0.7)' }}>Team Management, Data Visualization, and Organization Features</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Households Card */}
            <div className="h-[500px] transition-all duration-300 hover:opacity-80 relative" style={{ backgroundColor: 'rgba(255, 255, 220, 0.95)' }}>
              {/* 3D Model */}
              <div className="absolute top-0 left-0 w-full h-64 pointer-events-auto z-20">
                <ProductModel modelPath="/apple.glb" scale={2.5} position={[0, -0.7, -3]} />
              </div>
              <Link href="/everyone-else" className="absolute inset-0 z-10">
                <div className="h-full flex flex-col justify-end p-8 relative z-10">
                  <div className="mb-4">
                    <h2 className="text-2xl font-bold mb-2" style={{ color: '#021e06' }}>Households</h2>
                    <p className="text-sm" style={{ color: 'rgba(2, 30, 6, 0.7)' }}>Carbon Footprint Calculation, Transportation, and Utilities Tracking</p>
                  </div>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
