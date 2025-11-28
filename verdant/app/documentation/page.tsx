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
          <div className="max-w-4xl space-y-16">
            <div>
              <h1 className="text-4xl font-bold text-[#0b260e] mb-8">Verdant Documentation</h1>
              <p className="text-lg text-[#4a5f4d] leading-relaxed">
                Verdant provides carbon tracking and environmental data tools for developers, enterprises, and households. This documentation covers integration, setup, and API reference.
              </p>
            </div>

            {/* Getting Started Section */}
            <section id="introduction" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#0b260e] mb-4">Introduction</h2>
              <div className="space-y-4 text-[#4a5f4d]">
                <p>
                  Verdant is a carbon tracking platform for individuals and organizations. The platform includes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>API</strong> - RESTful API for integrating carbon tracking into applications</li>
                  <li><strong>Enterprise Dashboard</strong> - Organization-wide carbon management and ESG reporting</li>
                  <li><strong>Mobile App</strong> - Personal carbon tracking for households and individuals</li>
                </ul>
                <p>
                  Build climate applications, manage corporate sustainability, or track personal footprints.
                </p>
              </div>
            </section>

            <section id="installation" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#0b260e] mb-4">Installation</h2>
              <div className="space-y-4 text-[#4a5f4d]">
                <h3 className="text-xl font-semibold text-[#0b260e]">JavaScript/Node.js</h3>
                <p>
                  Install the Verdant package using npm.
                </p>
                
                <h3 className="text-xl font-semibold text-[#0b260e] mt-6">Python</h3>
                <p>
                  Install the Verdant package using pip.
                </p>

                <h3 className="text-xl font-semibold text-[#0b260e] mt-6">Authentication</h3>
                <p>
                  Sign up at <a href="/book-demo" className="text-[#ff8c42] hover:underline">verdant.co</a> to get your API key. Include it in all requests using the Authorization header with Bearer token format.
                </p>
              </div>
            </section>

            <section id="quick-start" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#0b260e] mb-4">Quick Start</h2>
              <div className="space-y-4 text-[#4a5f4d]">
                <h3 className="text-xl font-semibold text-[#0b260e]">Your First API Call</h3>
                <p>Calculate carbon emissions for a flight by providing origin, destination, number of passengers, and class. The API returns CO2 emissions in kilograms.</p>

                <h3 className="text-xl font-semibold text-[#0b260e] mt-6">Track Product Footprint</h3>
                <p>Look up product carbon footprints using barcode scanning. The API returns product name and carbon emissions in kilograms.</p>
              </div>
            </section>

            {/* API Reference Section */}
            <section id="carbon-indexing" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#0b260e] mb-4">Carbon Indexing API</h2>
              <div className="space-y-4 text-[#4a5f4d]">
                <p>
                  The Carbon Indexing API provides access to emissions data across multiple categories.
                </p>
                
                <h3 className="text-xl font-semibold text-[#0b260e] mt-6">Transportation Endpoints</h3>
                <div className="bg-[#f3f1e6] border border-[#0b260e]/10 p-4 rounded">
                  <p className="font-mono text-sm mb-2"><span className="text-[#ff8c42] font-bold">POST</span> /v1/transport/flight</p>
                  <p className="text-sm mb-3">Calculate emissions from air travel. Provide origin, destination, passengers, class, and round trip status.</p>
                </div>

                <div className="bg-[#f3f1e6] border border-[#0b260e]/10 p-4 rounded mt-4">
                  <p className="font-mono text-sm mb-2"><span className="text-[#ff8c42] font-bold">POST</span> /v1/transport/vehicle</p>
                  <p className="text-sm mb-3">Calculate emissions from ground transportation. Provide distance, vehicle type, and fuel type.</p>
                </div>

                <h3 className="text-xl font-semibold text-[#0b260e] mt-6">Energy & Utilities</h3>
                <div className="bg-[#f3f1e6] border border-[#0b260e]/10 p-4 rounded">
                  <p className="font-mono text-sm mb-2"><span className="text-[#ff8c42] font-bold">POST</span> /v1/energy/electricity</p>
                  <p className="text-sm mb-3">Calculate emissions from electricity consumption. Provide kilowatt-hours, country, and state.</p>
                </div>
              </div>
            </section>

            <section id="development" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#0b260e] mb-4">Development Tools</h2>
              <div className="space-y-4 text-[#4a5f4d]">
                <h3 className="text-xl font-semibold text-[#0b260e]">Webhooks</h3>
                <p>
                  Subscribe to events when carbon data updates or thresholds are exceeded. Configure webhook URLs and specify which events to receive.
                </p>

                <h3 className="text-xl font-semibold text-[#0b260e] mt-6">Testing</h3>
                <p>
                  Use the sandbox environment for development and testing. Initialize the client with sandbox mode enabled.
                </p>
              </div>
            </section>

            <section id="environmental-data" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#0b260e] mb-4">Environmental Data</h2>
              <div className="space-y-4 text-[#4a5f4d]">
                <p>
                  Access environmental metrics and emissions factors.
                </p>
                
                <h3 className="text-xl font-semibold text-[#0b260e] mt-6">Product Database</h3>
                <p>Our database includes over 100,000 products with carbon footprint data:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Food and beverages</li>
                  <li>Consumer electronics</li>
                  <li>Clothing and textiles</li>
                  <li>Home goods</li>
                  <li>Building materials</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#0b260e] mt-6">Data Sources</h3>
                <p>Our emissions data is sourced from:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>DEFRA (UK Department for Environment, Food & Rural Affairs)</li>
                  <li>EPA (US Environmental Protection Agency)</li>
                  <li>IPCC (Intergovernmental Panel on Climate Change)</li>
                  <li>Open LCA databases</li>
                  <li>Industry-specific standards (GRI, CDP, TCFD)</li>
                </ul>
              </div>
            </section>

            {/* Enterprise Section */}
            <section id="team-management" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#0b260e] mb-4">Team Management</h2>
              <div className="space-y-4 text-[#4a5f4d]">
                <p>
                  Manage organization carbon tracking with role-based access control.
                </p>
                
                <h3 className="text-xl font-semibold text-[#0b260e] mt-6">User Roles</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Admin</strong> - Full access to all features and settings</li>
                  <li><strong>Manager</strong> - View and manage team data, generate reports</li>
                  <li><strong>Contributor</strong> - Submit data and view team metrics</li>
                  <li><strong>Viewer</strong> - Read-only access to dashboards</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#0b260e] mt-6">Invite Team Members</h3>
                <p>Invite colleagues via email or share registration links. Specify email address, role, and department when sending invitations.</p>
              </div>
            </section>

            <section id="data-visualization" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#0b260e] mb-4">Data Visualization</h2>
              <div className="space-y-4 text-[#4a5f4d]">
                <p>
                  Create dashboards and reports to visualize organization carbon footprint.
                </p>
                
                <h3 className="text-xl font-semibold text-[#0b260e] mt-6">Available Charts</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Time series graphs showing emissions trends</li>
                  <li>Department/category breakdowns (pie and bar charts)</li>
                  <li>Geographic heatmaps for multi-location businesses</li>
                  <li>Goal tracking and progress indicators</li>
                  <li>Comparison charts (year-over-year, peer benchmarking)</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#0b260e] mt-6">Export Options</h3>
                <p>Export visualizations and raw data:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>PDF reports (customizable branding)</li>
                  <li>CSV for spreadsheet analysis</li>
                  <li>JSON for programmatic access</li>
                  <li>PNG/SVG for presentations</li>
                </ul>
              </div>
            </section>

            <section id="organization-features" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#0b260e] mb-4">Organization Features</h2>
              <div className="space-y-4 text-[#4a5f4d]">
                <h3 className="text-xl font-semibold text-[#0b260e]">ESG Reporting</h3>
                <p>
                  Generate compliance reports for ESG frameworks:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>GRI (Global Reporting Initiative)</strong> - Sustainability reporting standards</li>
                  <li><strong>CDP (Carbon Disclosure Project)</strong> - Climate change questionnaires</li>
                  <li><strong>TCFD</strong> - Task Force on Climate-related Financial Disclosures</li>
                  <li><strong>SASB</strong> - Sustainability Accounting Standards Board</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#0b260e] mt-6">Supply Chain Tracking</h3>
                <p>
                  Track Scope 3 emissions across your supply chain. Add suppliers with name, category, annual spend, and emissions factors to calculate total supply chain impact.
                </p>
              </div>
            </section>

            {/* Resources Section */}
            <section id="changelog" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#0b260e] mb-4">Changelog</h2>
              <div className="space-y-6 text-[#4a5f4d]">
                <div>
                  <h3 className="text-lg font-semibold text-[#0b260e]">v2.1.0</h3>
                  <ul className="list-disc pl-6 space-y-1 mt-2 text-sm">
                    <li>Added GraphQL API support</li>
                    <li>New machine learning-based prediction endpoints</li>
                    <li>Improved barcode scanning accuracy for mobile app</li>
                    <li>Enhanced supply chain tracking features</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0b260e]">v2.0.0</h3>
                  <ul className="list-disc pl-6 space-y-1 mt-2 text-sm">
                    <li>Complete API redesign with improved performance</li>
                    <li>Added webhook support for real-time notifications</li>
                    <li>Launched mobile app for iOS and Android</li>
                    <li>New dashboard UI with customizable widgets</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0b260e]">v1.5.0</h3>
                  <ul className="list-disc pl-6 space-y-1 mt-2 text-sm">
                    <li>Added support for Scope 3 emissions tracking</li>
                    <li>Integration with major accounting software (QuickBooks, Xero)</li>
                    <li>Expanded product database to 100,000+ items</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="examples" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#0b260e] mb-4">Examples</h2>
              <div className="space-y-6 text-[#4a5f4d]">
                <div>
                  <h3 className="text-xl font-semibold text-[#0b260e]">E-commerce Integration</h3>
                  <p>Display carbon footprint on product pages and checkout. Look up product emissions by SKU and calculate shipping emissions based on delivery distance and vehicle type. Sum total cart emissions for customer transparency.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#0b260e]">Corporate Dashboard</h3>
                  <p>Track monthly emissions across departments. Generate reports grouped by department with start and end dates. View emissions breakdowns for operations, transportation, and facilities.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#0b260e]">Personal Carbon Tracker</h3>
                  <p>Build household carbon tracking. Monitor monthly utilities including electricity and natural gas consumption. Track commute emissions based on distance, vehicle type, and fuel. Calculate total monthly footprint by summing all sources.</p>
                </div>
              </div>
            </section>

            {/* Support Section */}
            <section id="support" className="scroll-mt-24 pb-16">
              <h2 className="text-3xl font-bold text-[#0b260e] mb-4">Support</h2>
              <div className="space-y-4 text-[#4a5f4d]">
                <p>
                  Get support:
                </p>
                <ul className="space-y-3">
                  <li>
                    <strong>Email:</strong>{' '}
                    <a href="mailto:support@verdant.co" className="text-[#ff8c42] hover:underline">
                      support@verdant.co
                    </a>
                  </li>
                  <li>
                    <strong>Developer Discord:</strong>{' '}
                    <a href="#" className="text-[#ff8c42] hover:underline">
                      Join our community
                    </a>
                  </li>
                  <li>
                    <strong>GitHub Issues:</strong>{' '}
                    <a href="https://github.com/alexph10/verdantmockup" className="text-[#ff8c42] hover:underline">
                      Report bugs
                    </a>
                  </li>
                  <li>
                    <strong>Schedule a Demo:</strong>{' '}
                    <Link href="/book-demo" className="text-[#ff8c42] hover:underline">
                      Book a call
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
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
