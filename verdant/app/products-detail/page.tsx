'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

const ProductModel = dynamic(
  () => import('@/components/ProductModel').then((mod) => ({ default: mod.ProductModel })),
  { ssr: false }
);

export default function ProductsDetail() {
  const [activeSection, setActiveSection] = useState('api');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    // Check if there's a hash in the URL on initial load
    const hash = window.location.hash.substring(1);
    if (hash) {
      setTimeout(() => {
        scrollToSection(hash);
        setActiveSection(hash);
      }, 100);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['api', 'enterprise', 'households'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#021e06', fontFamily: 'Satoshi, sans-serif' }}>
      <Navbar />
      
      {/* Side Navigation */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 space-y-6">
        <button
          onClick={() => scrollToSection('api')}
          className={`block text-left transition-all duration-300 ${
            activeSection === 'api' ? 'text-white opacity-100' : 'text-white/40 opacity-60'
          }`}
        >
          <span className="font-mono text-sm">01</span>
          <span className="ml-2 text-sm font-semibold">API</span>
        </button>
        <button
          onClick={() => scrollToSection('enterprise')}
          className={`block text-left transition-all duration-300 ${
            activeSection === 'enterprise' ? 'text-white opacity-100' : 'text-white/40 opacity-60'
          }`}
        >
          <span className="font-mono text-sm">02</span>
          <span className="ml-2 text-sm font-semibold">ENTERPRISE</span>
        </button>
        <button
          onClick={() => scrollToSection('households')}
          className={`block text-left transition-all duration-300 ${
            activeSection === 'households' ? 'text-white opacity-100' : 'text-white/40 opacity-60'
          }`}
        >
          <span className="font-mono text-sm">03</span>
          <span className="ml-2 text-sm font-semibold">HOUSEHOLDS</span>
        </button>
      </div>

      {/* Main Content - Full Screen Sections */}
      <div className="flex-grow">
        
        {/* Section 01 - API */}
        <section id="api" className="min-h-screen flex items-center justify-center px-8 py-16">
          <div className="max-w-5xl w-full">
            <div className="h-[700px] transition-all duration-300 hover:opacity-90 relative" style={{ backgroundColor: 'rgba(255, 255, 220, 0.95)' }}>
              {/* 3D Model */}
              <div className="absolute top-0 left-0 w-full h-72 pointer-events-auto z-20">
                <ProductModel modelPath="/statue-dusk.glb" scale={1.5} position={[0, -0.5, 0]} />
              </div>
              <div className="h-full flex flex-col justify-end p-12 relative z-10">
                <span className="text-sm font-mono mb-4" style={{ color: 'rgba(2, 30, 6, 0.5)' }}>01</span>
                <h2 className="text-4xl font-bold mb-4" style={{ color: '#021e06' }}>API</h2>
                <div className="w-full pr-4">
                  <p className="text-base mb-3" style={{ color: 'rgba(2, 30, 6, 0.7)' }}>
                    <strong>Carbon Data Integration for Developers</strong>
                  </p>
                  <p className="text-sm mb-2" style={{ color: 'rgba(2, 30, 6, 0.7)' }}>
                    RESTful API with real-time carbon emission data and environmental metrics. Integrate tracking into applications, e-commerce platforms, and IoT devices.
                  </p>
                  <p className="text-sm mb-2" style={{ color: 'rgba(2, 30, 6, 0.7)' }}>
                    <strong>Features:</strong> Transportation calculators, 100K+ product footprint database, energy grid intensity, real-time webhooks, ML predictions, offset marketplace, GraphQL, SDKs (Python, JS, Java, Go).
                  </p>
                  <p className="text-sm" style={{ color: 'rgba(2, 30, 6, 0.7)' }}>
                    <strong>For:</strong> Developers, data scientists, SaaS platforms, green tech startups.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 02 - Enterprise */}
        <section id="enterprise" className="min-h-screen flex items-center justify-center px-8 py-16">
          <div className="max-w-5xl w-full">
            <div className="h-[700px] transition-all duration-300 hover:opacity-90 relative" style={{ backgroundColor: 'rgba(255, 255, 220, 0.95)' }}>
              {/* 3D Model */}
              <div className="absolute top-0 left-0 w-full h-72 pointer-events-auto z-20">
                <ProductModel modelPath="/texan-forest.glb" scale={0.8} position={[0, -0.5, 0]} />
              </div>
              <div className="h-full flex flex-col justify-end p-12 relative z-10">
                <span className="text-sm font-mono mb-4" style={{ color: 'rgba(2, 30, 6, 0.5)' }}>02</span>
                <h2 className="text-4xl font-bold mb-4" style={{ color: '#021e06' }}>Enterprise</h2>
                <div className="w-full pr-4">
                  <p className="text-base mb-3" style={{ color: 'rgba(2, 30, 6, 0.7)' }}>
                    <strong>Organization-Wide Carbon Management</strong>
                  </p>
                  <p className="text-sm mb-2" style={{ color: 'rgba(2, 30, 6, 0.7)' }}>
                    Complete Scope 1, 2, 3 emissions tracking for multi-location businesses. Centralized dashboard with role-based access and automated data collection from utilities, travel, and supply chains.
                  </p>
                  <p className="text-sm mb-2" style={{ color: 'rgba(2, 30, 6, 0.7)' }}>
                    <strong>Features:</strong> Multi-department tracking, ESG reporting (GRI, CDP, TCFD), supply chain accounting, employee travel tracking, IoT facility monitoring, carbon budgets, industry benchmarking, offset verification, predictive analytics, B2B white-label portal.
                  </p>
                  <p className="text-sm" style={{ color: 'rgba(2, 30, 6, 0.7)' }}>
                    <strong>For:</strong> Sustainability managers, executives, ESG teams, facility managers across manufacturing, retail, finance, logistics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 03 - Households */}
        <section id="households" className="min-h-screen flex items-center justify-center px-8 py-16">
          <div className="max-w-5xl w-full">
            <div className="h-[700px] transition-all duration-300 hover:opacity-90 relative" style={{ backgroundColor: 'rgba(255, 255, 220, 0.95)' }}>
              {/* 3D Model */}
              <div className="absolute top-0 left-0 w-full h-72 pointer-events-auto z-20">
                <ProductModel modelPath="/pine-forest.glb" scale={0.8} position={[0, -0.5, 0]} />
              </div>
              <div className="h-full flex flex-col justify-end p-12 relative z-10">
                <span className="text-sm font-mono mb-4" style={{ color: 'rgba(2, 30, 6, 0.5)' }}>03</span>
                <h2 className="text-4xl font-bold mb-4" style={{ color: '#021e06' }}>Households</h2>
                <div className="w-full pr-4">
                  <p className="text-base mb-3" style={{ color: 'rgba(2, 30, 6, 0.7)' }}>
                    <strong>Personal Carbon Tracking for Families</strong>
                  </p>
                  <p className="text-sm mb-2" style={{ color: 'rgba(2, 30, 6, 0.7)' }}>
                    User-friendly mobile and web app for simple carbon tracking. Track daily activities, understand environmental impact, and make informed decisions to reduce your footprint.
                  </p>
                  <p className="text-sm mb-2" style={{ color: 'rgba(2, 30, 6, 0.7)' }}>
                    <strong>Features:</strong> Automated utility analysis, GPS transportation tracking, food carbon calculator with barcode scanning, smart home integration (Nest, Ecobee), shopping footprint tracking, personalized recommendations, gamified monthly budgets, community leaderboards, offset marketplace, family sharing, bill savings calculator.
                  </p>
                  <p className="text-sm" style={{ color: 'rgba(2, 30, 6, 0.7)' }}>
                    <strong>For:</strong> Eco-conscious families, millennials, Gen Z, remote workers, urban and suburban homeowners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
      
      <Footer />
    </div>
  );
}

