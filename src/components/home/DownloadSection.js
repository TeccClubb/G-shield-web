"use client";

import AppleIcon from "@/icons/AppleIcon";
import GooglePlayIcon from "@/icons/GooglePlayIcon";
import { Button } from "@mui/material";
import Link from "next/link";
  
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
export default function DownloadSection() {

  useEffect(() => { 
    Aos.init({ duration: 1200 });
  }
  , []);
  return (
    <section data-aos="fade-up" className="w-full bg-white mt-3 py-15 px-6 lg:px-20 overflow-hidden">
      <div
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 w-full h-full"
        style={{
          backgroundImage: "url('/home/bgImg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Left Content */}
        <div  data-aos="zoom-in-up"className="flex-1 text-center lg:text-left">
          <div className="inline-block px-4 py-1 self-center lg:self-start mb-4 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
            Download Mobile App
          </div>

          <h1 className="text-black text-4xl md:text-5xl font-bold  mb-6 leading-tight">
            Download The Fastest <br /> Vpn App Secure <br /> Your Internet
          </h1>
          <p className="text-zinc-500 text-lg mb-8 max-w-md mx-auto lg:mx-0">
            At GShield, we are committed to providing secure, private, and
            unrestricted internet access to our users worldwide. In an age where
            online privacy is more important than ever, our mission is to
            protect your personal data.
          </p>

          <div className="flex sm:flex-row flex-col items-center justify-center lg:justify-stretch gap-4 mb-6">
            <Button
              variant="outlined"
              size="large"
              className="text-black"
              startIcon={<GooglePlayIcon />}
              sx={{ color: "black", borderColor: "black" }}
            >
              <div className="flex flex-col items-start capitalize">
                <span className="text-xl">Google Play</span>
                <span className="text-sm">Get it on</span>
              </div>
            </Button>

            <Button
              variant="outlined"
              size="large"
              className="text-black"
              startIcon={<AppleIcon />}
              sx={{ color: "black", borderColor: "black" }}
            >
              <div className="flex flex-col items-start capitalize">
                <span className="text-xl">Apple Store</span>
                <span className="text-sm">Download on the</span>
              </div>
            </Button>
          </div>

          <Button
            // component={Link}
            // href="/pricing"
            size="large"
            variant="contained"
            color="success"
            className="self-center lg:self-start"
            sx={{ borderRadius: "9999px", textTransform: "capitalize" }}
          >
            Download App
          </Button>
        </div>

        {/* Right Content (Phone Image) */}
        <div data-aos="" className="flex-1 flex justify-center lg:justify-end">
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
