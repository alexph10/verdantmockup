'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BookDemo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', role: '', message: '' });
      setSubmitSuccess(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-black flex flex-col" style={{ fontFamily: 'Satoshi, sans-serif' }}>
      
      {/* Logo - Top Left */}
      <Link href="/" className="absolute top-6 left-6 z-50">
        <svg width="20" height="24" viewBox="0 0 36 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.641 33.429L11.563 27.351C7.26395 23.052 0 26.091 0 32.169V40.1H35.2821V15.788L17.641 33.429Z" fill="white"/>
          <path d="M17.641 6.67098L23.719 12.749C28.0181 17.0481 35.2821 14.0091 35.2821 7.93105V0H0V24.312L17.641 6.67098Z" fill="white"/>
        </svg>
      </Link>
      
      {/* Form - Centered */}
      <div className="flex-grow flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4">Schedule Your Demo</h2>
            
            {submitSuccess ? (
              <div className="py-8 text-center">
                <div className="w-12 h-12 bg-[#021e06] rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Thank You!</h3>
                <p className="text-white/60 text-sm">We'll be in touch shortly to schedule your demo.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label htmlFor="name" className="block text-white text-xs mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-sm bg-black/40 border border-white/20 rounded text-white placeholder-white/40 focus:outline-none focus:border-[#021e06] transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white text-xs mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-sm bg-black/40 border border-white/20 rounded text-white placeholder-white/40 focus:outline-none focus:border-[#021e06] transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-white text-xs mb-1.5">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-sm bg-black/40 border border-white/20 rounded text-white placeholder-white/40 focus:outline-none focus:border-[#021e06] transition-colors"
                    placeholder="Acme Corp"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-white text-xs mb-1.5">
                    Your Role *
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-sm bg-black/40 border border-white/20 rounded text-white focus:outline-none focus:border-[#021e06] transition-colors"
                  >
                    <option value="">Select your role</option>
                    <option value="executive">C-Level / Executive</option>
                    <option value="sustainability">Sustainability Manager</option>
                    <option value="developer">Developer</option>
                    <option value="product">Product Manager</option>
                    <option value="operations">Operations</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white text-xs mb-1.5">
                    Tell us about your needs
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2 text-sm bg-black/40 border border-white/20 rounded text-white placeholder-white/40 focus:outline-none focus:border-[#021e06] transition-colors resize-none"
                    placeholder="What are you hoping to achieve with carbon tracking?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 text-sm bg-[#021e06] text-white hover:bg-[#033d0c] transition-colors duration-200 font-semibold rounded disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Request Demo'}
                </button>

                <p className="text-white/40 text-[10px] text-center mt-2">
                  By submitting this form, you agree to our Privacy Policy
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
