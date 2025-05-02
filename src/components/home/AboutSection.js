"use client";

import { Button } from "@mui/material";
import { Check, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { CheckedIcon } from "@/icons";

export default function AboutSection() {
  useEffect(() => {
    Aos.init({ duration: 1200 }); 

  }, []); // Initialize AOS animations
      
  return (
    <section  data-aos="fade-up"  className=" overflow-hidden w-full bg-white py-15 px-6 lg:px-20" id="home">
      <div
        className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-16 w-full h-full"
        style={{
          backgroundImage: "url('/home/bgImg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Left Content (Laptop Image) */}
        <div  data-aos="fade-left" className="w-full flex justify-center items-center">
          <img
            src="/laptop.png" // Replace with actual path
            alt="Laptop VPN App"
            className=" w-96 h-auto"
          />
        </div>

        {/* Right Content */}
        <div data-aos="fade-right" className="w-full flex flex-col lg:items-center text-center lg:text-left">
          <div className="inline-block px-4 py-1 self-center lg:self-start mb-4 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
            About Us
          </div>
          <h2 className="text-black text-4xl md:text-5xl font-bold mb-4">
            Safeguarding Your Online World with Trust
          </h2>

          <p className="text-zinc-500 text-2xl font-medium mb-8">
            At GShield, we are dedicated to delivering safe, private, and
            limitless internet access to users across the globe.
          </p>

          <h6 className="text-xl w-full text-black font-semibold flex gap-2">
            <CheckedIcon /> Enhanced Privacy &
            Security
          </h6>

          <p className="text-lg leading-8 text-black mb-3 mx-4 text-start">
            GShield encrypts your internet traffic, keeping your online
            activities private and secure, protecting you from hackers and cyber
            threats.
          </p>

          <h6 className="text-xl w-full text-black font-semibold flex gap-2">
          <CheckedIcon /> Fast & Reliable
            Connection
          </h6>

          <p className="text-lg leading-8 text-black mb-3 mx-4 text-start">
            GShield encrypts your internet traffic, keeping your online
            activities private and secure, protecting you from hackers and cyber
            threats.
          </p>

          <Button
            component={Link}
            href="/pricing"
            variant="contained"
            color="success"
            size="large"
            className="self-center lg:self-start"
            sx={{ borderRadius: "9999px", textTransform: "capitalize" }}
          >
            Get it now
          </Button>
        </div>
      </div>
    </section>
  );
}
