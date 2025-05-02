"use client";

import React from "react";
import ServersTable from "@/components/ServersTable";
import Image from "next/image";

const ServersPage = () => (
  <section className="bg-white w-full flex flex-col items-center justify-center pt-4">
    <div className="w-full max-w-7xl min-h-[calc(100vh-4rem)] flex flex-col lg:flow-row items-center justify-center p-4 relative">
      <Image
        className="w-full h-auto m-auto absolute top-0 z-0 pointer-events-none"
        src="/map.png"
        alt="imag not founded"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="inline-block px-4 py-1 mb-4 bg-green-100 text-green-700 rounded-full text-sm font-semibold z-[1]">
        Servers
      </div>
      <h2 className="text-black text-4xl md:text-5xl font-bold mb-4 z-[1]">
        VPN Server Location
      </h2>
      <p className="text-zinc-600 px-8 text-xl leading-8 capitalize lg:w-2/3 text-center mb-14 z-[1]">
        Choose a server location to connect to. Your IP address and browsing
        activity will appear as if you are in the selected country.
      </p>
      <ServersTable />
    </div>
  </section>
);

export default ServersPage;
