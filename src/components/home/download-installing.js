"use client"
import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Easy Download",
    icon: "/home/easy-download.svg",
  },
  {
    id: 2,
    title: "Instant Setup/Install",
    description:
      "Get the GShield VPN app on your device by downloading it from our website or app store.",
    icon: "/home/instant-setup.svg",
   
  },
  {
    id: 3,
    title: "Connect to a Server",
    icon: "/home/connect-server.svg",
  },
  {
    id: 4,
    title: "Browse Securely & Anonymously",
    icon: "/home/wi-fi.svg",
  },
];

export default function DownloadProcess() {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12">
        <span className="bg-green-100 text-green-600 text-sm font-semibold px-4 py-2 rounded-full">
          How it is work
        </span>
        <h2 className="text-2xl md:text-4xl font-bold mt-4">
          GShield Download And Installing Process
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 items-center gap-12">
        {/* Left Side - Steps */}
        <div className="relative">
          <div className="absolute left-5 top-6 bottom-6 w-[1px] bg-gray-200"></div>
          <div className="flex flex-col gap-10">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="relative flex items-start gap-6 group cursor-pointer"
              >
                <div className="flex flex-col items-center relative z-10">
                  <div className="absolute  left-2/2 transform -translate-x-2/2 z-10">
                    <div className="w-4 h-4 flex items-center text-xs justify-center bg-green-100  font-bold rounded-full  border-2 border-white shadow group-hover:bg-green-600 group-hover:text-white transition" >
                      {step.id}
                    </div>
                  </div>
                  <div className="w-10 h-10 bg-white p-2 rounded-full  border-white flex items-center justify-center shadow  border group-hover:border-green-500  group-hover:bg-green-600">
                    <Image src={step.icon} alt="step-icon" width={24} height={24} />
                  </div>
                </div>
                <div>
                  <h3
                    className={`text-lg mt-2 font-bold transition-colors group-hover:text-green-600 ${step.highlight ? "text-green-600" : "text-black"}`}
                  >
                    {step.title}
                  </h3>
                  {step.description && (
                    <p className="text-sm text-gray-500 mb- max-w-xs">
                      {step.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Illustration */}
        <div className="flex justify-center">
          <Image
            src="/home/dowload-installing.png"
            alt="Installation Illustration"
            width={450}
            height={450}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
