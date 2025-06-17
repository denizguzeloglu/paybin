'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { 
  Bitcoin, 
  Shield, 
  Zap, 
  Globe, 
  ArrowRight,
  CheckCircle,
  CreditCard,
  Wallet,
  TrendingUp,
  Lock,
  Users,
  BarChart3
} from 'lucide-react';

export default function Home() {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    // Hero animations
    const heroCtx = gsap.context(() => {
      gsap.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
      });
      
      gsap.from('.hero-subtitle', {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power4.out'
      });
      
      gsap.from('.hero-cta', {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        ease: 'back.out(1.7)'
      });
      
      gsap.to('.floating-card', {
        y: -20,
        duration: 3,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 0.2
      });
    }, heroRef);

    // Features animations
    const featuresCtx = gsap.context(() => {
      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: '.features-section',
          start: 'top 80%',
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, featuresRef);

    // Stats counter animation
    const statsCtx = gsap.context(() => {
      const counters = document.querySelectorAll('.stat-number');
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-target') || '0');
        gsap.to(counter, {
          scrollTrigger: {
            trigger: counter,
            start: 'top 80%',
          },
          innerHTML: target,
          duration: 2,
          ease: 'power2.out',
          snap: { innerHTML: 1 },
          onUpdate: function() {
            counter.innerHTML = Math.floor(this.targets()[0].innerHTML);
          }
        });
      });
    }, statsRef);

    return () => {
      heroCtx.revert();
      featuresCtx.revert();
      statsCtx.revert();
    };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-dark via-gray-850 to-dark">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-dark/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Bitcoin className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Paybin</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition">Pricing</a>
              <a href="#api" className="text-gray-300 hover:text-white transition">API</a>
              <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="text-gray-300 hover:text-white transition">Sign In</button>
              <button className="bg-gradient-to-r from-primary to-secondary px-6 py-2 rounded-lg text-white font-medium hover-glow">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6">
            Accept Crypto Payments
            <span className="block text-gradient">Instantly & Securely</span>
          </h1>
          
          <p className="hero-subtitle text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto">
            Simplify invoicing and payment collection with our integrated system. 
            Accept Bitcoin, Ethereum, USDT, and more cryptocurrencies with ease.
          </p>
          
          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-primary to-secondary px-8 py-4 rounded-lg text-white font-medium text-lg hover-glow flex items-center gap-2">
              Start Accepting Payments <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-gray-600 px-8 py-4 rounded-lg text-white font-medium text-lg hover:bg-gray-800 transition">
              View Demo
            </button>
          </div>
          
          {/* Floating Cards */}
          <div className="relative mt-20">
            <div className="floating-card absolute -left-20 top-0 w-64 h-40 card-gradient rounded-xl p-6 border border-gray-700">
              <Bitcoin className="w-8 h-8 text-yellow-500 mb-2" />
              <p className="text-sm text-gray-300">Bitcoin Support</p>
              <p className="text-2xl font-bold text-white">0.001 BTC</p>
            </div>
            
            <div className="floating-card absolute -right-20 top-20 w-64 h-40 card-gradient rounded-xl p-6 border border-gray-700">
              <Wallet className="w-8 h-8 text-blue-500 mb-2" />
              <p className="text-sm text-gray-300">Active Wallets</p>
              <p className="text-2xl font-bold text-white">500+</p>
            </div>
            
            <div className="mx-auto max-w-4xl">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-8 border border-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Instant Transfers</h3>
                    <p className="text-gray-400">Lightning-fast cryptocurrency transactions</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Bank-Level Security</h3>
                    <p className="text-gray-400">Enterprise-grade encryption & protection</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-8 h-8 text-purple-500" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Global Coverage</h3>
                    <p className="text-gray-400">Accept payments from anywhere</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="features-section py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Everything You Need to
            <span className="block text-gradient">Accept Crypto Payments</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-card card-gradient rounded-xl p-8 border border-gray-700 hover-glow">
              <CreditCard className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Multiple Currencies</h3>
              <p className="text-gray-400 mb-4">
                Accept Bitcoin, Ethereum, USDT, and 50+ other cryptocurrencies with automatic conversion.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Bitcoin & Lightning Network
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Ethereum & ERC-20 Tokens
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Stablecoins (USDT, USDC)
                </li>
              </ul>
            </div>
            
            <div className="feature-card card-gradient rounded-xl p-8 border border-gray-700 hover-glow">
              <Lock className="w-12 h-12 text-green-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Enterprise Security</h3>
              <p className="text-gray-400 mb-4">
                Bank-level security with multi-signature wallets and cold storage options.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Multi-signature wallets
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Cold storage integration
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  2FA & biometric auth
                </li>
              </ul>
            </div>
            
            <div className="feature-card card-gradient rounded-xl p-8 border border-gray-700 hover-glow">
              <BarChart3 className="w-12 h-12 text-purple-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Advanced Analytics</h3>
              <p className="text-gray-400 mb-4">
                Real-time insights and comprehensive reporting for all your transactions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Real-time dashboards
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Transaction history
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Export & tax reports
                </li>
              </ul>
            </div>
            
            <div className="feature-card card-gradient rounded-xl p-8 border border-gray-700 hover-glow">
              <Zap className="w-12 h-12 text-yellow-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Instant Settlement</h3>
              <p className="text-gray-400 mb-4">
                Get your funds instantly with automatic conversion to your preferred currency.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  0-confirmation payments
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Auto-conversion to fiat
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Daily settlements
                </li>
              </ul>
            </div>
            
            <div className="feature-card card-gradient rounded-xl p-8 border border-gray-700 hover-glow">
              <Users className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Team Management</h3>
              <p className="text-gray-400 mb-4">
                Collaborate efficiently with role-based access control and permissions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Multiple user accounts
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Role-based permissions
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Activity logs
                </li>
              </ul>
            </div>
            
            <div className="feature-card card-gradient rounded-xl p-8 border border-gray-700 hover-glow">
              <TrendingUp className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Scale with Ease</h3>
              <p className="text-gray-400 mb-4">
                From startups to enterprises, our platform grows with your business needs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Unlimited transactions
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  99.9% uptime SLA
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  24/7 priority support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 px-6 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="stat-number text-5xl font-bold text-gradient mb-2" data-target="50000">0</div>
              <p className="text-gray-400">Active Merchants</p>
            </div>
            <div className="text-center">
              <div className="stat-number text-5xl font-bold text-gradient mb-2" data-target="2500000">0</div>
              <p className="text-gray-400">Transactions Processed</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gradient mb-2">$<span className="stat-number" data-target="850">0</span>M</div>
              <p className="text-gray-400">Total Volume</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gradient mb-2"><span className="stat-number" data-target="99">0</span>.9%</div>
              <p className="text-gray-400">Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Simple, Transparent
            <span className="block text-gradient">Pricing Plans</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card-gradient rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-semibold mb-2">Free</h3>
              <p className="text-gray-400 mb-6">Perfect for getting started</p>
              <div className="text-4xl font-bold mb-6">$0<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Up to 500 wallets
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Basic API access
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Email support
                </li>
              </ul>
              <button className="w-full border border-gray-600 py-3 rounded-lg hover:bg-gray-800 transition">
                Get Started
              </button>
            </div>
            
            <div className="card-gradient rounded-xl p-8 border-2 border-primary relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary px-4 py-1 rounded-full text-sm">
                Most Popular
              </div>
              <h3 className="text-2xl font-semibold mb-2">Pro</h3>
              <p className="text-gray-400 mb-6">For growing businesses</p>
              <div className="text-4xl font-bold mb-6">$99<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Unlimited wallets
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Advanced API features
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Priority support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Custom integrations
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-primary to-secondary py-3 rounded-lg hover-glow">
                Get Started
              </button>
            </div>
            
            <div className="card-gradient rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-semibold mb-2">Enterprise</h3>
              <p className="text-gray-400 mb-6">For large organizations</p>
              <div className="text-4xl font-bold mb-6">Custom</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Everything in Pro
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Dedicated account manager
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Custom SLA
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  On-premise deployment
                </li>
              </ul>
              <button className="w-full border border-gray-600 py-3 rounded-lg hover:bg-gray-800 transition">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Accept Crypto Payments?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using Paybin to process cryptocurrency payments securely and efficiently.
            </p>
            <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-100 transition flex items-center gap-2 mx-auto">
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Bitcoin className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">Paybin</span>
              </div>
              <p className="text-gray-400">
                The most trusted cryptocurrency payment platform for businesses worldwide.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">API Docs</a></li>
                <li><a href="#" className="hover:text-white transition">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
                <li><a href="#" className="hover:text-white transition">Compliance</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Paybin. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}