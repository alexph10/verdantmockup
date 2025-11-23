'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { TypewriterText } from '@/components/TypewriterText';
import { Footer } from '@/components/Footer';

const AsciiCanvas = dynamic(
  () => import('@/components/AsciiCanvas').then((mod) => ({ default: mod.AsciiCanvas })),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="bg-black relative">
      <Navbar />
      <AsciiCanvas />
      
      {/* Hero section - first viewport */}
      <div className="h-screen relative">
        {/* Bottom left title */}
        <div className="absolute bottom-8 left-8 z-50 text-white" style={{ fontFamily: 'Satoshi, sans-serif' }}>
          <h1 className="text-4xl font-normal leading-tight">
            Outcome Based<br />
            Carbon Tracking for{' '}
            <TypewriterText 
              texts={['Households', 'Enterprises', 'Everyone']}
              speed={100}
              deleteSpeed={50}
              waitTime={2000}
            />
          </h1>
        </div>
      </div>
      {/* Middle section */}
      <div className="relative z-50 min-h-[50vh] flex items-center justify-center">
        {/* Card overlay */}
        <div className="w-full bg-[#16003e] backdrop-blur-md p-12 flex items-center justify-between gap-12">
          <div style={{ fontFamily: 'Satoshi, sans-serif' }}>
            <p className="text-2xl leading-relaxed" style={{ color: '#633fba' }}>
              Digital Solutions for<br />
              Climate-Conscious Businesses and Households
            </p>
          </div>
          
          <pre className="text-[#633fba] text-xs leading-tight whitespace-pre" style={{ fontFamily: 'monospace' }}>
{`                                          .::::::'.::::::.
.::::.                                 ..:::;'\`::::::'.::::.
:::::::.                            .::::;'   .::'.:;::::'.:;
:::'\\x60:::                         .:::;'      .::::''   \\\`:::::
::'  \\\`::.                       .:;'       .::::'       \\\`:::;
::    \\\`::.                    .::;'       .:::;'         \\\`::.
::     \\\`::.                  .::;'      .::::'            \\\`:;
::.     \\\`::.  :  :          .:;'       .::;:'             :::
\\\`::.     \\\`::   :  :        .:;'      .::;:::.             ::;
 :::.     ::.  : .:       .::;      .::;::::::::.       .::;'
 ::::.    \\\`::.  :::.     .:;'      .::'       \\\`::::::::::::'
 :::::.    \\\`::. \\\`:::   .:;'      .::::::.         \\\`:::::::.
 :: \\\`:::.   \\\`::: :::   .:;'      .::'  \\\`:::.            \\\`::.
 ::   \\\`:::.   \\\`:::::. .:;'     .::'       \\\`::.           \\\`::.
.::      \\\`::.   :::.:::'..  .::'           \\\`::.         .::;
:::.    .::::::':::::::::::::::.            \\\`::.       .::;'
\\\`::::::::'    :::::::::::.    \\\`::::::::.    .::::. .:::::;'
        .:::::::'::.:::::::::.        \\\`::::::::::::;'
    .::::'.::::: ::: ::::.  \\\`::::::.
    ::' .::' ::  \\\`::  :: \\\`:::.       \\\`:::.
    :: .::'  ::   :'  \\\`::  \\\`::::::.    \\\`::
    ::.::'  .::        ::  ::'::'\\x60:::::;;'
     \\\`:::   ::'        \\\`::.:: \\\`:::.\\x60::;'
      \\\`::. .::          ::::.   \\\`::;'
       \\\`:::::'          \\\`:::::::;'`}
          </pre>
        </div>
      </div>
      <Footer />
    </div>
  );
}
