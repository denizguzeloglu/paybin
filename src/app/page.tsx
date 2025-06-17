'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import Image from 'next/image';

export default function Home() {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const platformRef = useRef(null);

  useEffect(() => {
    // Hero animations
    const heroCtx = gsap.context(() => {
      gsap.from('.hero-title', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
      
      gsap.from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out'
      });
      
      gsap.from('.hero-buttons', {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: 'power3.out'
      });

      gsap.from('.crypto-icon', {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)'
      });
    }, heroRef);

    // Features animations
    const featuresCtx = gsap.context(() => {
      gsap.from('.feature-item', {
        scrollTrigger: {
          trigger: '.features-section',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, featuresRef);

    // Platform animations
    const platformCtx = gsap.context(() => {
      gsap.from('.platform-card', {
        scrollTrigger: {
          trigger: '.platform-section',
          start: 'top 80%',
        },
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out'
      });
    }, platformRef);

    return () => {
      heroCtx.revert();
      featuresCtx.revert();
      platformCtx.revert();
    };
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image 
                src="https://framerusercontent.com/images/NdvksxdiZIhsR0sPdvrgziEm0.png" 
                alt="Paybin" 
                width={120} 
                height={40}
                className="h-8 w-auto"
              />
            </div>
            
            <div className="flex items-center gap-8">
              <a href="#" className="text-gray-400 hover:text-white text-[15px] transition">Features</a>
              <a href="#" className="text-gray-400 hover:text-white text-[15px] transition">API</a>
              <a href="#" className="text-gray-400 hover:text-white text-[15px] transition">Pricing</a>
              <a href="#" className="text-gray-400 hover:text-white text-[15px] transition">Support</a>
              <button className="bg-white text-black px-7 py-2.5 rounded-full text-[15px] font-medium hover:bg-gray-100 transition">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h1 className="hero-title text-[72px] md:text-[88px] leading-[0.9] font-bold mb-8">
            Simple, Secure and<br />
            Anonymous.
          </h1>
          
          <p className="hero-subtitle text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
            Accept payments in Bitcoin, Ethereum, USDT, and other digital currencies<br />
            anonymously with Paybin<br />
            start accepting crypto payments today!
          </p>
          
          <div className="hero-buttons flex gap-4 justify-center items-center mb-20">
            <button className="bg-white text-black px-8 py-3.5 rounded-full text-[15px] font-semibold hover:bg-gray-100 transition">
              Get Started
            </button>
            <button className="border border-gray-700 text-white px-8 py-3.5 rounded-full text-[15px] font-medium hover:bg-white/5 transition">
              Learn More
            </button>
          </div>

          {/* Crypto Icons */}
          <div className="flex justify-center items-center gap-6 flex-wrap opacity-60">
            <Image 
              src="https://framerusercontent.com/images/HtexqLb0vKrBrcQh2siAxtBwQ.png" 
              alt="Bitcoin" 
              width={48} 
              height={48}
              className="crypto-icon grayscale"
            />
            <Image 
              src="https://framerusercontent.com/images/kujBBqdtjdwxjF49UYBdYbxe0cQ.png" 
              alt="Ethereum" 
              width={48} 
              height={48}
              className="crypto-icon grayscale"
            />
            <Image 
              src="https://framerusercontent.com/images/8T83OlHBkHrgXnyQJBZ8IjYirQ.png" 
              alt="USDT" 
              width={48} 
              height={48}
              className="crypto-icon grayscale"
            />
            <Image 
              src="https://framerusercontent.com/images/Kig1ySRE6VHeYa0FhNe9K5FU53Y.png" 
              alt="USDC" 
              width={48} 
              height={48}
              className="crypto-icon grayscale"
            />
            <Image 
              src="https://framerusercontent.com/images/ks86a153BUSrgVW9qQUumym2qg0.png" 
              alt="BNB" 
              width={48} 
              height={48}
              className="crypto-icon grayscale"
            />
            <Image 
              src="https://framerusercontent.com/images/y2btmz7hSHuDCgGsriRrd4oPCjI.png" 
              alt="Solana" 
              width={48} 
              height={48}
              className="crypto-icon grayscale"
            />
            <Image 
              src="https://framerusercontent.com/images/P52u28Cz50whu3ar9Q2Gh7eTmA.png" 
              alt="XRP" 
              width={48} 
              height={48}
              className="crypto-icon grayscale"
            />
            <Image 
              src="https://framerusercontent.com/images/cqV8rYvmupUvrFRtjPq26EOXfbs.png" 
              alt="Cardano" 
              width={48} 
              height={48}
              className="crypto-icon grayscale"
            />
            <Image 
              src="https://framerusercontent.com/images/69pUgJ9d9gizqhRsIOGk8uNIY.png" 
              alt="Avalanche" 
              width={48} 
              height={48}
              className="crypto-icon grayscale"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="features-section bg-[#0a0a0a] text-white py-32">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-[64px] font-bold mb-4">
              Fast, Secure and Reliable
            </h2>
            <p className="text-2xl text-gray-400">
              Crypto Payments Worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="feature-item bg-[#111111] rounded-3xl p-8 hover:bg-[#1a1a1a] transition">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">Scalable to Fit<br />Your Growth</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Our platform grows with your business, from startup to enterprise scale.
              </p>
            </div>

            <div className="feature-item bg-[#111111] rounded-3xl p-8 hover:bg-[#1a1a1a] transition">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-3">Real-Time Analytics<br />Dashboard</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Monitor transactions and performance metrics in real-time.
              </p>
            </div>

            <div className="feature-item bg-[#111111] rounded-3xl p-8 hover:bg-[#1a1a1a] transition">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-3">Comprehensive API<br />Integration</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Easy integration with powerful APIs for seamless operations.
              </p>
            </div>

            <div className="feature-item bg-[#111111] rounded-3xl p-8 hover:bg-[#1a1a1a] transition">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-semibold mb-3">Advanced Merchant<br />Tools</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Complete toolkit for managing payments and customers.
              </p>
            </div>

            <div className="feature-item bg-[#111111] rounded-3xl p-8 hover:bg-[#1a1a1a] transition">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">Scalable for Growing<br />Businesses</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Infrastructure that adapts to your business needs.
              </p>
            </div>

            <div className="feature-item bg-[#111111] rounded-3xl p-8 hover:bg-[#1a1a1a] transition">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Instant Settlement,<br />Zero Delay</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Get your funds instantly with no waiting period.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section ref={platformRef} className="platform-section bg-black text-white py-32">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="space-y-32">
            {/* Remittance Platform */}
            <div className="platform-card grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-[48px] leading-[1.1] font-bold mb-8">
                  Remittance Platform for Businesses<br />
                  <span className="text-gray-500">(B2C Customer Wallets)</span>
                </h3>
                <p className="text-gray-400 leading-[1.8]">
                  Effortlessly handle your business payments with our cryptocurrency remittance platform. 
                  Create an account and manage your company wallets in one place. Generate wallet addresses 
                  on the fly via API, making it easier than ever to handle large-scale payments. Whether 
                  you need a few or thousands of wallets, we've got you covered with flexible pricing 
                  options – from a basic free plan (up to 500 wallets) to unlimited wallet generation. 
                  Streamline international transactions, reduce fees, and enhance security with blockchain technology.
                </p>
              </div>
              <div className="flex justify-center">
                <Image 
                  src="https://framerusercontent.com/images/V31icCa9QLB9tQRq8T1sIdXNnU.png" 
                  alt="Remittance Platform" 
                  width={600} 
                  height={450}
                  className="rounded-3xl"
                />
              </div>
            </div>

            {/* Invoice Management */}
            <div className="platform-card grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 flex justify-center">
                <Image 
                  src="https://framerusercontent.com/images/aJVxhxq2ZuyBbh0EbhTENlBiQs.png" 
                  alt="Invoice Management" 
                  width={600} 
                  height={450}
                  className="rounded-3xl"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-[48px] leading-[1.1] font-bold mb-8">
                  Invoice and Payment<br />Management
                </h3>
                <p className="text-gray-400 leading-[1.8]">
                  Simplify invoicing and payment collection with our integrated system. Instantly send 
                  invoices to clients, with support for cryptocurrency payments, giving your business a 
                  modern edge. Automate payment tracking, streamline accounting, and offer your clients 
                  a seamless experience. Our platform is designed to save you time and help you manage 
                  payments at scale, from small startups to enterprise-level businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] text-white py-16 border-t border-zinc-900">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center text-[13px] text-gray-500">
            <p className="mb-1">
              Paybin is operated by Flopays UAB. Registration Number 306776864,
            </p>
            <p className="mb-1">
              Žalgirio g. 88-101, 09303 Vilnius
            </p>
            <p className="mb-4">
              © 2024 All rights reserved. v.1109.040
            </p>
            <p>
              <a href="mailto:support@paybin.io" className="text-gray-400 hover:text-white transition">
                support@paybin.io
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}