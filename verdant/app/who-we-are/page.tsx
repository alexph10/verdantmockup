'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const ProductModel = dynamic(
  () => import('@/components/ProductModel').then((mod) => ({ default: mod.ProductModel })),
  { ssr: false }
);

export default function WhoWeAre() {
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
      
      {/* Text Content - Left Side - Scrollable */}
      <div className="flex-grow px-16 py-24 overflow-y-auto" style={{ maxWidth: '55%' }}>
        <div className="w-full pb-16">
          <h1 className="text-5xl font-bold mb-8" style={{ color: '#021e06' }}>Who We Are</h1>
          
          <div className="space-y-8 text-base leading-relaxed" style={{ color: '#021e06' }}>
            <p className="text-lg">
              Our team came up with the idea for Verdant through mutual stories of observing the state of the environment, which for the last couple of years have been struggling particularly in Southeast Asia from pollution, global warming, and most importantly for us a lack in infrastructure for creating positive change. Throughout the last year of majoring in Global Business there was an emphasis in our learning on Ethical and Environmentally-Conscious Business Conduct, which I have found to have had an impact in how I perceive future potential work and endeavours.
            </p>
            
            <p className="text-lg">
              Verdant proposes a list of business ideas we could technically develop to provide a secure foundation for like-minded founders, team-members, and families to use and achieve their sustainability goals. The target demographic is universal, as anyone can be encouraged to initiate their own personal goals for the Climate; and as there are no apparent brands or companies driving this mission, this brings a chance of good market positioning in Vietnam and possibly other countries.
            </p>

            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#021e06' }}>Our Solutions</h2>
              
              <div className="space-y-4">
                <p>
                  <strong>For Households:</strong> Customers would find Verdant a preferable solution for mobile app carbon tracking functionalities: Carbon Footprint Calculation, Tracking and Monitoring use of Transportation, Housing and Food Items, Monitoring Home Electricity and Gas Usage, etc.
                </p>
                
                <p>
                  <strong>For Enterprises:</strong> Team members will be introduced to a unified dashboard displaying real-time carbon indexing, data visualization tools for monitoring the environmental ecosystem of the company's internal operational, administrative, and transportation tasks.
                </p>
                
                <p>
                  <strong>For Developers:</strong> Developers and Small Companies can use our API to fetch environmental data for building specialized, more niche tools and solutions.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#021e06' }}>Business Model & Market Positioning</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Revenue Generation</h3>
                  <p>
                    Verdant operates on a tiered subscription model. Our consumer mobile app offers a freemium model with basic carbon tracking free and premium features (advanced analytics, offset marketplace) at $4.99/month. For enterprises, we charge based on company size: $99/month for small businesses (up to 50 employees), $499/month for mid-size companies, and custom enterprise pricing for larger organizations. Our API follows a usage-based pricing model with a free tier for developers (10,000 API calls/month) and paid tiers starting at $49/month for commercial use.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Target Customers</h3>
                  <p>
                    <strong>Primary Markets:</strong> Eco-conscious millennials and Gen Z households in urban Vietnam (Hanoi, Ho Chi Minh City), small to medium Vietnamese businesses looking to meet emerging ESG requirements, and climate tech developers building sustainability applications.
                  </p>
                  <p className="mt-2">
                    <strong>Secondary Markets:</strong> International enterprises with operations in Southeast Asia, sustainability consultants serving Vietnamese companies, and educational institutions tracking campus carbon footprints.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Key Competitors</h3>
                  <p>
                    <strong>Global Players:</strong> Pawprint (UK-based consumer app), Watershed (enterprise carbon management), and Climatiq (carbon API). However, these are primarily focused on Western markets with limited Vietnamese language support or regional data.
                  </p>
                  <p className="mt-2">
                    <strong>Local Landscape:</strong> Currently, there are no major Vietnamese competitors offering carbon tracking solutions. Some sustainability consultancies offer manual carbon auditing services, but no digital platforms with our feature set exist in the local market.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Competitive Advantages</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Regional Focus:</strong> Purpose-built for Southeast Asian markets with Vietnamese language support, local emission factors, and regional transportation/food databases relevant to Vietnamese consumers and businesses.</li>
                    <li><strong>First-Mover Advantage:</strong> As Vietnam develops stricter environmental regulations and ESG reporting requirements, we're positioned to capture market share before international competitors localize.</li>
                    <li><strong>Cost Efficiency:</strong> Operating costs in Vietnam are 60-70% lower than Western competitors, allowing us to offer competitive pricing while maintaining margins.</li>
                    <li><strong>Integrated Platform:</strong> Unlike competitors who specialize in one segment (consumer, enterprise, or API), we offer all three, creating cross-selling opportunities and an ecosystem.</li>
                    <li><strong>Local Partnerships:</strong> Potential collaborations with Vietnamese government sustainability initiatives, local universities for research validation, and regional businesses for pilot programs give us credibility and market access that international competitors lack.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Market Opportunity</h3>
                  <p>
                    Vietnam's growing middle class, increasing environmental awareness, and government focus on meeting Paris Agreement commitments create a favorable market environment. The Vietnamese carbon credit market is expected to grow significantly as the country aims for net-zero by 2050. With 70+ million smartphone users and a tech-savvy young population, digital adoption rates are high, making our mobile-first approach well-suited to the market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
