'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const ProductModel = dynamic(
  () => import('@/components/ProductModel').then((mod) => ({ default: mod.ProductModel })),
  { ssr: false }
);

export default function TeamRoadmap() {
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
      <div className="flex-grow px-16 py-24 overflow-y-auto">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-8" style={{ color: '#021e06' }}>Team Roadmap</h1>
          
          <div className="space-y-8 text-base leading-relaxed pb-16" style={{ color: '#021e06' }}>
            <p className="text-lg">
              This roadmap outlines our development plan for Verdant over the next 18-24 months. We've tried to be realistic about what we can actually build with limited resources and the technical challenges we'll face. Some dates might shift as we learn more about what works and what doesn't.
            </p>
            
            {/* Phase 1 */}
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#021e06' }}>Phase 1: Getting Started (Early 2026)</h2>
              <h3 className="text-xl font-semibold mb-3">Building the Basic API</h3>
              <p className="mb-3">
                We're planning to start with a simple API that developers can use to calculate carbon emissions. The plan is to use Node.js and PostgreSQL since that's what we're most familiar with, and we'll likely host on AWS to start (though we might switch to something cheaper if costs get too high).
              </p>
              <p className="mb-3">
                <strong>What we're building:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-3">
                <li>A REST API with basic authentication - probably JWT tokens to keep it simple</li>
                <li>Carbon calculators for transportation (flights, cars, trains) using publicly available emission factors from DEFRA and EPA</li>
                <li>A database with maybe 5,000-10,000 common products and their carbon footprints, scraped from existing datasets where we can find them</li>
                <li>Basic documentation so people can actually use it</li>
                <li>Maybe a JavaScript SDK if we have time</li>
              </ul>
              <p className="mb-3">
                The main challenge here will be getting accurate data - a lot of carbon footprint information is outdated or not freely available. We'll probably have to make some estimates and be upfront about data quality.
              </p>
              <p>
                <strong>Goal:</strong> Get 50-100 developers to sign up and actually try using it. If we can get even 10-20 people building things with it, that would be a good start.
              </p>
            </div>

            {/* Phase 2 */}
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#021e06' }}>Phase 2: Business Dashboard (Mid-Late 2026)</h2>
              <h3 className="text-xl font-semibold mb-3">Making It Work for Companies</h3>
              <p className="mb-3">
                If the API gets some traction, we want to build a web dashboard that businesses can use without needing to code. This is probably going to be the hardest part because businesses have very specific reporting requirements and we'll need to learn a lot about compliance standards.
              </p>
              <p className="mb-3">
                <strong>Planned features:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-3">
                <li>A web interface (probably Next.js) where companies can track their carbon emissions</li>
                <li>Different user roles so managers can give access to their team</li>
                <li>Hopefully connect to accounting software like QuickBooks - though their APIs are complicated so this might take longer than expected</li>
                <li>Generate reports that match what regulators actually want to see (we'll need to research GRI and CDP standards more)</li>
                <li>CSV and PDF exports since that's what people always ask for</li>
              </ul>
              <p className="mb-3">
                Realistically, getting even 10-15 paying customers in the first year would be amazing. Vietnamese businesses might be interested since there's not much competition here yet. The tricky part will be pricing - we'll probably have to experiment to find what companies are actually willing to pay.
              </p>
            </div>

            {/* Phase 3 */}
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#021e06' }}>Phase 3: Consumer App (2027, hopefully)</h2>
              <h3 className="text-xl font-semibold mb-3">For Regular People and Families</h3>
              <p className="mb-3">
                This is the part we're most excited about but also most uncertain. Building a consumer app that people actually want to use is really hard, and there are already some apps trying to do this. We'll need to figure out what makes ours different.
              </p>
              <p className="mb-3">
                <strong>Ideas for features:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-3">
                <li>Mobile app (probably React Native so we can do iOS and Android at once)</li>
                <li>Take photos of utility bills and we'll try to calculate emissions from that - OCR technology exists but can be finicky</li>
                <li>Track transportation automatically using phone GPS, though we'll need to be careful about battery drain and privacy</li>
                <li>Maybe barcode scanning for food products, using databases like Open Food Facts</li>
                <li>Some kind of gamification to keep people engaged - this is important because most sustainability apps have terrible retention</li>
              </ul>
              <p className="mb-3">
                Smart home integration would be cool but requires partnerships with companies like Nest, which might be hard to get as a startup. We might have to skip this initially.
              </p>
              <p>
                Getting people to download and actually use the app will be the biggest challenge. Most sustainability apps have less than 5% retention after a month. If we can get a few thousand people using it regularly, that would be success.
              </p>
            </div>

            {/* Phase 4 */}
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#021e06' }}>Beyond: If Things Go Well</h2>
              <h3 className="text-xl font-semibold mb-3">More Ambitious Ideas</h3>
              <p className="mb-3">
                These are things we'd love to build if we get funding and the earlier phases work out. Some of these might not be realistic without significant investment or partnerships.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-3">
                <li>Machine learning for personalized recommendations - though we'd need a lot of data first to train models properly</li>
                <li>Connecting directly to smart meters and IoT devices for automatic tracking - this would require hardware partnerships which are difficult to establish</li>
                <li>Vietnamese language version since that's our local market</li>
                <li>Better supply chain tracking for businesses, though this gets complicated fast</li>
              </ul>
              <p className="mb-3">
                Honestly, we're trying not to get too far ahead of ourselves here. A lot depends on whether the earlier phases gain traction and whether we can raise any funding.
              </p>
            </div>

            {/* Infrastructure & Operations */}
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#021e06' }}>The Technical Reality</h2>
              <p className="mb-3">
                <strong>What we need to figure out:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-3">
                <li>Keeping costs low while the platform grows - cloud hosting can get expensive fast</li>
                <li>Data privacy compliance (GDPR, CCPA) which is complicated but necessary</li>
                <li>Backing up data properly so we don't lose anything important</li>
                <li>Setting up basic monitoring so we know when things break</li>
                <li>Writing tests so we don't accidentally break things with new updates</li>
              </ul>
              <p className="mb-3">
                We'll probably start with GitHub Actions for deployment since it's free for open source projects, and add more sophisticated tools as we grow. The hardest part will be balancing security/reliability with development speed when it's just a small team.
              </p>
            </div>

            {/* Partnerships & Funding */}
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#021e06' }}>Money and Partnerships</h2>
              <p className="mb-3">
                <strong>Potential partnerships we'd like to explore:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-3">
                <li>Vietnamese government sustainability initiatives - there might be grants or programs we could apply to</li>
                <li>Universities for research validation - having academic backing would help credibility</li>
                <li>Carbon offset organizations if we want to add a marketplace feature later</li>
                <li>Maybe accounting software companies, though getting their attention as a startup is tough</li>
              </ul>
              <p className="mb-3">
                For funding, we'll probably start by bootstrapping as much as we can. If we can show real traction with users, we might look for angel investors or startup accelerators in Vietnam or the region. The climate tech space is getting more attention but it's still competitive.
              </p>
            </div>

            {/* Team Growth */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#021e06' }}>Team</h2>
              <p className="mb-3">
                We're starting with just our founding team - people who studied Global Business together and have some technical skills. None of us have built a company before so there will definitely be a learning curve.
              </p>
              <p className="mb-3">
                If things go well, we'd want to bring in someone with real development experience and maybe a person who understands sustainability/carbon accounting better than we do. But hiring is expensive, so we need to be strategic about it and probably can't hire much in the first year unless we get funding.
              </p>
              <p>
                The advantage of working in Vietnam is that costs are lower than in US or Europe, so we might be able to stretch resources further. But finding people with both technical skills and interest in climate tech might be challenging.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
