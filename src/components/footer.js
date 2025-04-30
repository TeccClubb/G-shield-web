"use client"
import { Globe } from 'lucide-react';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
   useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);

    return (
      <footer className="bg-white text-gray-700" data-aos="fade-up">
        {/* Top Area */}
        <div className="border-b border-gray-300" data-aos="fade-down">
          <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
            {/* Left Side */}
            <div className="flex items-center space-x-10">
              <img src="/footerImg/Navbar.png" alt="GShieldVPN Logo" className="h-8" />
            </div>
  
            {/* Right Side */}
            <div className="flex items-center space-x-2 px-4 py-2">
              <img src="/footerImg/Language.png" className="w-30 h-10" alt="Language Selector" />
            </div>
          </div>
        </div>
  
        {/* Footer Links */}
        <div className="max-w-7xl mx-auto px-2 py-6" data-aos="fade-up">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-35 ml-[40px] mx-auto text-sm">
            <div data-aos="fade-up" data-aos-delay="0">
              <h3 className="font-semibold mb-3">Company</h3>
              <ul className="space-y-2 self-stretch justify-center text-gray-500 text-sm font-medium leading-normal">
                <li>About</li>
                <li>Pricing</li>
                <li>Pivien Status</li>
                <li>Support</li>
                <li>Careers</li>
                <li>Open Source</li>
                <li>Press/Media Kit</li>
              </ul>
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
              <h3 className="font-semibold mb-3">Products</h3>
              <ul className="space-y-2 self-stretch justify-center text-gray-500 text-sm font-medium leading-normal">
                <li>VPN for Windows</li>
                <li>VPN for Mac</li>
                <li>VPN for Android</li>
                <li>VPN for iPhone</li>
              </ul>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="font-semibold mb-3">Other Resources</h3>
              <ul className="space-y-2 self-stretch justify-center text-gray-500 text-sm font-medium leading-normal">
                <li>What is My IP</li>
                <li>How IP Works</li>
                <li>How Hackers Use IP</li>
                <li>Change My IP</li>
                <li>Hide My IP</li>
                <li>Glossary</li>
                <li>Free Proxy</li>
              </ul>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <h3 className="font-semibold mb-3">Legal</h3>
              <ul className="space-y-2 self-stretch justify-center text-gray-500 text-sm font-medium leading-normal">
                <li>Imprint</li>
                <li>Privacy Policy</li>
                <li>Terms & Condition</li>
                <li>Transparency Report</li>
                <li>Threat Model</li>
                <li>Report Abuse</li>
              </ul>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <h3 className="font-semibold mb-3">Social</h3>
              <ul className="space-y-2 self-stretch justify-center text-gray-500 text-sm font-medium leading-normal">
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Youtube</li>
              </ul>
            </div>
          </div>
        </div>
  
        {/* Bottom Copyright */}
        <div className="border-t border-gray-300"  >
          <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center self-stretch text-gray-500 text-sm font-medium leading-normal" data-aos-delay="500">
            <p>© 2025 GShieldVPN. All rights reserved.</p>
            <p>
              Powered by <span className="font-semibold text-gray-900">Tecclub</span>
            </p>
          </div>
        </div>
      </footer>
    );
  }
