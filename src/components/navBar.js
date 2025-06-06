'use client';

import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import LoginButtonWithModal from '@/app/login-form/page';

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname(); // Get current route
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    return (
        <nav className={`w-full font-manrope shadow-sm ${pathname === '/what-is-vpn' ? 'bg-[#F6F6F6]' : 'bg-white'}`}>
            <div className="w-[90%] mx-auto px-4 py-3 flex cursor-pointer items-center justify-between">
                {/* Logo */}
                <div onClick={() => router.push("/")} className="text-3xl flex font-bold text-gray-800">
                    <img src="/shieldVpnLogo.png" alt="Logo" className="w-10 h-10 mr-2" />
                    <span className="justify-start text-black text-2xl font-semibold font-['Poppins']">GShieldVPN</span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center space-x-6">
                    <Link href="/" scroll={false} className="text-black text-base font-semibold  font-manrope   leading-normal">Home</Link>
                    <Link href="/?scrollTo=feature" scroll={false} className="text-black text-base font-semibold   leading-normal">Features</Link>
                    <Link href="/services" className="text-black text-base font-semibold   leading-normal">Servers</Link>
                    <Link href="/?scrollTo=pricing" scroll={false} className="text-black text-base font-semibold   leading-normal">Pricing</Link>
                    {/* <Link href="#pricing" className="text-black text-base font-semibold  leading-normal">Bussiness VPN </Link> */}
                </div>

                {/* Right CTA Button Group (Desktop) */}
                <div className="hidden lg:flex  items-center space-x-4">
                    <div
                       onClick={() => setIsLoginOpen(true)}
                        className="px-4 py-2 text-black text-sm font-extrabold font-['Manrope'] rounded-[100px]  outline-1 outline-offset-[-1px] outline-zinc-500 inline-flex justify-center items-center gap-2.5"
                    >
                        Login
                    </div>
                    
                    <Link
                        href="/pricing"
                        className="px-4 py-2 rounded-full bg-green-700 text-white text-sm hover:bg-green-800 transition"
                    >
                        Dawnload
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <div className="lg:hidden">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden px-6 pb-4 space-y-3 text-gray-700 text-sm">
                    <Link href="/" className="block hover:text-black text-black text-base font-semibold  font-manrope   leading-normal">Home</Link>
                    <Link href="#pricing" className="block hover:text-black text-black text-base font-semibold  font-manrope   leading-normal">Features</Link>
                    <Link href="/servers" className="block hover:text-black text-black text-base font-semibold  font-manrope   leading-normal">Servers</Link>
                    <Link href="/?scrollTo=pricing" className='text-black text-base font-semibold  font-manrope   leading-normal' scroll={false}>Pricing</Link>

                    {/* <Link href="#pricing" className="block hover:text-black text-black text-base font-semibold  font-manrope   leading-normal">Bussiness VPN</Link> */}
                    <div className='flex flex-col space-y-3'>

                        <div
                        onClick={() => setIsLoginOpen(true)}
                           
                            className="px-4 py-2 text-black text-sm font-extrabold font-['Manrope'] rounded-[100px]  outline-1 outline-offset-[-1px] outline-zinc-500 inline-flex justify-center items-center gap-2.5"
                        >
                            Login
                        </div>
                        <Link
                            href="/dawnload"
                            className="px-4 py-2 text-center rounded-full bg-green-700 text-white text-sm hover:bg-green-800 transition"
                        >
                            Dawnload
                        </Link>
                    </div>
                </div>
            )}
            <LoginButtonWithModal
                open={isLoginOpen}
                handleClose={() => setIsLoginOpen(false)}
            />
        </nav>
    );
}
