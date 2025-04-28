
"use client"




export default function FeaturesSection() {
    const features = [
        {
            title: "Advanced Security",
            description: "Protect your data with our cutting-edge encryption technology, ensuring your online activities remain private.",
        },
        {
            title: "Advanced Security",
            description: "Protect your data with our cutting-edge encryption technology, ensuring your online activities remain private.",
        },
        {
            title: "Advanced Security",
            description: "Protect your data with our cutting-edge encryption technology, ensuring your online activities remain private.",
        },
        {
            title: "Advanced Security",
            description: "Protect your data with our cutting-edge encryption technology, ensuring your online activities remain private.",
        },
    ];

    return (
        <section className="py-16 bg-white text-center">
            <div className="max-w-6xl mx-auto px-4">
                <div className="inline-block px-4 py-1 mb-4 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                    Features
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Features for Our App</h2>
                <div className="text-center text-auto">

                    <p className="text-gray-500 mb-12 text-auto">
                        Discover the powerful features of GShieldVPN designed to provide <br /> you with secure, private, and seamless internet access.
                    </p>
                </div>

                <div className="relative flex flex-col md:flex-row items-center justify-center gap-8">
                    {/* Left Features */}
                    <div className="flex flex-col gap-12">
                        {features.slice(0, 2).map((feature, index) => (
                            <div key={index} className="flex flex-col items-end text-right gap-2">
                                <div className="bg-green-100 p-2 rounded-full">
                                    <img
                                        src="/home/featureApp-svg.svg"
                                        alt="Feature Icon"
                                        className="h-6 w-6"
                                    />
                                </div>
                                <h3 className="text-lg font-bold">{feature.title}</h3>
                                <p className="text-gray-500">{feature.description}</p>
                            </div>
                        ))}
                    </div>




                    {/* Center Mobile Image */}
                    <div className="relative w-[250px] md:w-[300px]">
                        <img
                            src="/home/mobileFeature.png"
                            alt="Feature App Image"
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Right Features */}
                    <div className="flex flex-col gap-12 mt-16">
  {features.slice(2, 4).map((feature, index) => (
    <div key={index} className="flex flex-col items-start text-left gap-2">
      <div className="bg-green-100 p-2 rounded-full">
        <img
          src="/home/featureApp-svg.svg"
          alt="Feature Icon"
          className="h-6 w-6"
        />
      </div>
      <h3 className="text-lg font-bold">{feature.title}</h3>
      <p className="text-gray-500">{feature.description}</p>
    </div>
  ))}
</div>


                </div>
            </div>
        </section>
    );
}
