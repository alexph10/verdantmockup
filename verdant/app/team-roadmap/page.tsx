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
      <div className="flex-grow px-16 py-24 overflow-y-auto" style={{ maxWidth: '55%' }}>
        <div className="w-full">
          <h1 className="text-5xl font-bold mb-8" style={{ color: '#021e06' }}>Team Roadmap</h1>
          
          <div className="space-y-8 text-base leading-relaxed pb-16" style={{ color: '#021e06' }}>
            <p className="text-lg">
              This roadmap outlines our development plan for Verdant. Our approach is phased and iterative, building foundational capabilities before expanding to serve broader markets.
            </p>
            
            {/* Customer Segments Diagram */}
            <div className="my-12 p-8 rounded-lg" style={{ backgroundColor: 'rgba(2, 30, 6, 0.05)' }}>
              <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: '#021e06' }}>Customer Segments</h3>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#cc5500' }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
                  <h4 className="font-bold mb-2">Developers</h4>
                  <p className="text-sm" style={{ color: 'rgba(2, 30, 6, 0.7)' }}>Building climate-conscious applications</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#cc5500' }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <line x1="3" y1="9" x2="21" y2="9" />
                      <line x1="9" y1="21" x2="9" y2="9" />
                    </svg>
                  </div>
                  <h4 className="font-bold mb-2">Enterprises</h4>
                  <p className="text-sm" style={{ color: 'rgba(2, 30, 6, 0.7)' }}>Managing corporate sustainability</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#cc5500' }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  </div>
                  <h4 className="font-bold mb-2">Households</h4>
                  <p className="text-sm" style={{ color: 'rgba(2, 30, 6, 0.7)' }}>Tracking personal carbon footprint</p>
                </div>
              </div>
            </div>
            
            {/* Development Phases Diagram */}
            <div className="my-12 p-8 rounded-lg" style={{ backgroundColor: 'rgba(2, 30, 6, 0.05)' }}>
              <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: '#021e06' }}>Development Phases</h3>
              <div className="flex items-center justify-between">
                <div className="flex-1 text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-lg flex items-center justify-center text-white font-bold text-xl" style={{ backgroundColor: '#cc5500' }}>1</div>
                  <p className="font-semibold">Developer Platform</p>
                </div>
                <div className="w-12 h-1" style={{ backgroundColor: '#cc5500' }}></div>
                <div className="flex-1 text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-lg flex items-center justify-center text-white font-bold text-xl" style={{ backgroundColor: '#cc5500' }}>2</div>
                  <p className="font-semibold">Enterprise Dashboard</p>
                </div>
                <div className="w-12 h-1" style={{ backgroundColor: '#cc5500' }}></div>
                <div className="flex-1 text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-lg flex items-center justify-center text-white font-bold text-xl" style={{ backgroundColor: '#cc5500' }}>3</div>
                  <p className="font-semibold">Consumer Application</p>
                </div>
              </div>
            </div>
            
            {/* Phase 1 */}
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#021e06' }}>Phase 1: Developer Platform</h2>
              <h3 className="text-xl font-semibold mb-3">Foundation Layer</h3>
              <p className="mb-3">
                The initial phase focuses on creating a developer-facing platform for carbon emission calculations. This establishes the data infrastructure and calculation methodologies that support subsequent offerings.
              </p>
              <p className="mb-3">
                <strong>Core Components:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-3">
                <li>Developer platform with authentication and authorization</li>
                <li>Carbon calculators for transportation modes (air, ground, rail) using government emission data</li>
                <li>Product database containing carbon footprint information from public datasets</li>
                <li>Documentation and integration guides</li>
                <li>Code libraries for common programming languages</li>
              </ul>
              <p className="mb-3">
                <strong>Key Considerations:</strong> Data accuracy, source transparency, update frequency, and scalability requirements.
              </p>
            </div>

            {/* Phase 2 */}
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#021e06' }}>Phase 2: Enterprise Dashboard</h2>
              <h3 className="text-xl font-semibold mb-3">Business Intelligence Layer</h3>
              <p className="mb-3">
                The enterprise dashboard provides businesses with direct access to carbon tracking and reporting capabilities through a web-based interface. This phase targets organizations requiring sustainability compliance and reporting.
              </p>
              <p className="mb-3">
                <strong>Core Features:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-3">
                <li>Web interface for emission tracking and visualization</li>
                <li>Role-based access control for team management</li>
                <li>Third-party software integrations (accounting, ERP systems)</li>
                <li>Compliance reporting aligned with international standards</li>
                <li>Data export capabilities (spreadsheet, document formats)</li>
              </ul>
              <p className="mb-3">
                <strong>Key Considerations:</strong> Data security, regulatory compliance, multi-user workflows, and integration complexity.
              </p>
            </div>

            {/* Phase 3 */}
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#021e06' }}>Phase 3: Consumer Application</h2>
              <h3 className="text-xl font-semibold mb-3">Individual Engagement Layer</h3>
              <p className="mb-3">
                The consumer application extends carbon tracking capabilities to individual users and households through mobile platforms. This phase focuses on accessibility and user engagement.
              </p>
              <p className="mb-3">
                <strong>Planned Features:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-3">
                <li>Cross-platform mobile application (iOS and Android)</li>
                <li>Utility bill scanning and emission calculation</li>
                <li>Location-based transportation tracking with privacy controls</li>
                <li>Product barcode scanning using public databases</li>
                <li>Gamification and engagement mechanisms</li>
                <li>Smart home device integration (subject to partnership availability)</li>
              </ul>
              <p className="mb-3">
                <strong>Key Considerations:</strong> User retention, privacy management, battery efficiency, and differentiation strategy.
              </p>
            </div>

            {/* Future Capabilities */}
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#021e06' }}>Future Capabilities</h2>
              <h3 className="text-xl font-semibold mb-3">Advanced Features</h3>
              <p className="mb-3">
                Additional capabilities planned for subsequent development phases, subject to resource availability and partnership opportunities.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-3">
                <li>Personalized recommendation engine based on user behavior patterns</li>
                <li>Direct smart meter and IoT device integration for automated tracking</li>
                <li>Localization and language support for regional markets</li>
                <li>Supply chain tracking and Scope 3 emissions for enterprise customers</li>
              </ul>
              <p className="mb-3">
                <strong>Requirements:</strong> Sufficient user base for data patterns, strategic partnerships, additional funding, and expanded team capacity.
              </p>
            </div>

            {/* Technical Architecture Diagram */}
            <div className="my-12 p-8 rounded-lg" style={{ backgroundColor: 'rgba(2, 30, 6, 0.05)' }}>
              <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: '#021e06' }}>Technical Infrastructure</h3>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#cc5500' }}></div>
                    Data Management
                  </h4>
                  <ul className="space-y-2 text-sm ml-5" style={{ color: 'rgba(2, 30, 6, 0.7)' }}>
                    <li>• Emission factor databases</li>
                    <li>• User data storage</li>
                    <li>• Backup and recovery systems</li>
                    <li>• Data encryption</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#cc5500' }}></div>
                    Platform Operations
                  </h4>
                  <ul className="space-y-2 text-sm ml-5" style={{ color: 'rgba(2, 30, 6, 0.7)' }}>
                    <li>• Scalable hosting infrastructure</li>
                    <li>• Monitoring and alerting</li>
                    <li>• Automated testing pipelines</li>
                    <li>• Deployment automation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#cc5500' }}></div>
                    Compliance & Security
                  </h4>
                  <ul className="space-y-2 text-sm ml-5" style={{ color: 'rgba(2, 30, 6, 0.7)' }}>
                    <li>• Data privacy regulations</li>
                    <li>• Access controls</li>
                    <li>• Audit logging</li>
                    <li>• Security protocols</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#cc5500' }}></div>
                    Integration Layer
                  </h4>
                  <ul className="space-y-2 text-sm ml-5" style={{ color: 'rgba(2, 30, 6, 0.7)' }}>
                    <li>• Third-party APIs</li>
                    <li>• Webhook systems</li>
                    <li>• Data synchronization</li>
                    <li>• External data sources</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Strategic Partnerships Diagram */}
            <div className="my-12 p-8 rounded-lg" style={{ backgroundColor: 'rgba(2, 30, 6, 0.05)' }}>
              <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: '#021e06' }}>Strategic Partnerships</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#cc5500' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold mb-1">Government & Regulatory Bodies</h4>
                    <p className="text-sm" style={{ color: 'rgba(2, 30, 6, 0.7)' }}>Sustainability initiatives, grant programs, compliance frameworks</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#cc5500' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold mb-1">Academic Institutions</h4>
                    <p className="text-sm" style={{ color: 'rgba(2, 30, 6, 0.7)' }}>Research validation, methodology development, credibility building</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#cc5500' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold mb-1">Carbon Offset Organizations</h4>
                    <p className="text-sm" style={{ color: 'rgba(2, 30, 6, 0.7)' }}>Marketplace integration, offset verification, impact measurement</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#cc5500' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <rect x="2" y="7" width="20" height="14" rx="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold mb-1">Software Providers</h4>
                    <p className="text-sm" style={{ color: 'rgba(2, 30, 6, 0.7)' }}>Integration partners, data exchange, embedded solutions</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Funding Strategy */}
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#021e06' }}>Funding Strategy</h2>
              <p className="mb-3">
                The funding approach follows a phased strategy aligned with product development milestones.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0 text-white font-bold" style={{ backgroundColor: '#cc5500' }}>1</div>
                  <div>
                    <h4 className="font-semibold">Bootstrap Phase</h4>
                    <p className="text-sm" style={{ color: 'rgba(2, 30, 6, 0.7)' }}>Initial development funded through founding team resources</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0 text-white font-bold" style={{ backgroundColor: '#cc5500' }}>2</div>
                  <div>
                    <h4 className="font-semibold">Seed Funding</h4>
                    <p className="text-sm" style={{ color: 'rgba(2, 30, 6, 0.7)' }}>Angel investors and startup accelerators upon demonstrating initial traction</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0 text-white font-bold" style={{ backgroundColor: '#cc5500' }}>3</div>
                  <div>
                    <h4 className="font-semibold">Growth Capital</h4>
                    <p className="text-sm" style={{ color: 'rgba(2, 30, 6, 0.7)' }}>Regional venture capital for market expansion and team growth</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Structure Diagram */}
            <div className="my-12 p-8 rounded-lg" style={{ backgroundColor: 'rgba(2, 30, 6, 0.05)' }}>
              <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: '#021e06' }}>Team Structure</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="inline-block px-6 py-3 rounded-lg text-white font-bold" style={{ backgroundColor: '#cc5500' }}>
                    Founding Team
                  </div>
                  <p className="text-sm mt-2" style={{ color: 'rgba(2, 30, 6, 0.7)' }}>Global Business background with technical capabilities</p>
                </div>
                <div className="flex justify-center gap-4">
                  <div className="w-px h-12" style={{ backgroundColor: '#cc5500' }}></div>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="px-4 py-2 rounded border-2 font-semibold text-sm" style={{ borderColor: '#cc5500', color: '#021e06' }}>
                      Engineering
                    </div>
                    <p className="text-xs mt-2" style={{ color: 'rgba(2, 30, 6, 0.7)' }}>Platform development</p>
                  </div>
                  <div className="text-center">
                    <div className="px-4 py-2 rounded border-2 font-semibold text-sm" style={{ borderColor: '#cc5500', color: '#021e06' }}>
                      Sustainability
                    </div>
                    <p className="text-xs mt-2" style={{ color: 'rgba(2, 30, 6, 0.7)' }}>Carbon accounting expertise</p>
                  </div>
                  <div className="text-center">
                    <div className="px-4 py-2 rounded border-2 font-semibold text-sm" style={{ borderColor: '#cc5500', color: '#021e06' }}>
                      Operations
                    </div>
                    <p className="text-xs mt-2" style={{ color: 'rgba(2, 30, 6, 0.7)' }}>Business development</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Team Growth */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#021e06' }}>Team Composition</h2>
              <p className="mb-3">
                <strong>Current Team:</strong> Founding members with Global Business education and technical capabilities.
              </p>
              <p className="mb-3">
                <strong>Planned Expansion:</strong> Additional engineering resources for platform development, sustainability specialists for carbon accounting methodology, and operations personnel for business development.
              </p>
              <p className="mb-3">
                <strong>Geographic Considerations:</strong> Vietnam-based operations provide cost advantages relative to US and European markets. Talent acquisition focuses on individuals with dual competency in technical skills and climate/sustainability domains.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
