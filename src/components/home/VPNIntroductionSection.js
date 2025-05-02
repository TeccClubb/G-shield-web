'use client';
import Aos from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
 import { useEffect } from 'react';
import Link from 'next/link';
export default function VpnIntroductionSection() {

    useEffect(() => {
        const AOS = require('aos');  // // Import AOS library for animations
        AOS.init({ duration: 1200, once: true });
    }, []);
    return (
        <section data-aos="fade-down" className="w-full bg-white py-15 px-6 mb-3 lg:px-20" id="home">
            <div
                className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 w-full h-full"
                style={{
                    backgroundImage: "url('/home/bgimg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}  
            >
                {/* Left Content */}
                <div className="flex-1 text-center lg:text-left">
    <h1 className="text-4xl md:text-5xl font-bold  mb-6 leading-tight">
        <span className="text-black">  Stay private and<br />
        Access Worldwide<br />Connect</span>
    </h1>
    <p className="text-zinc-500 text-lg mb-8 max-w-md mx-auto lg:mx-0">
        Surf the web without tracking with a VPN, protect your devices & identity with an all-in-one app.
    </p>
    <Link
        href="/pircing"
        className="px-4 py-2 rounded-full bg-green-700 text-white text-sm hover:bg-green-800 transition"
    >
        Get Started
    </Link>
</div>


                {/* Right Content (Phone Image) */}
                <div data-aos="fade-left" className="flex-1 flex justify-center lg:justify-end">
                    <img
                        src="/home/mobileMokup.png" // Replace with actual path
                        alt="Mobile VPN App"

                        className=" w-72 h-[554px]"
                    />
                </div>
            </div>
        </section>
    );
}
