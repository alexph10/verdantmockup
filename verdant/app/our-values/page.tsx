import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Verdant - For the Planet',
};

export default function OurValues() {
  return (
    <div 
      className="min-h-screen flex flex-col relative" 
      style={{ 
        backgroundColor: '#021e06',
        background: `
          radial-gradient(ellipse 800px 600px at 20% 30%, rgba(255, 140, 66, 0.35) 0%, rgba(255, 140, 66, 0.15) 30%, transparent 70%),
          radial-gradient(ellipse 600px 800px at 80% 70%, rgba(255, 140, 66, 0.25) 0%, rgba(255, 140, 66, 0.1) 35%, transparent 70%),
          radial-gradient(circle at 50% 50%, rgba(255, 140, 66, 0.08) 0%, transparent 50%),
          #021e06
        `
      }}
    >
      <Navbar />
      <div className="flex-grow"></div>
      <Footer />
    </div>
  );
}
