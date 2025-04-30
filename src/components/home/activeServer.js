

import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles
const ActiveServers = () => {

    useEffect(() => {
        const AOS = require('aos');  // // Import AOS library for animations
        AOS.init({ duration: 1200, once: true });
    }, []);

    return (
        <div data-aos="fade-up" className="bg-white mt-3 py-16 px-4 sm:px-6 lg:px-8">
            <div data-aos="zoom-out-up" className="max-w-7xl mx-auto text-center">
                <span className="inline-block bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    Facts
                </span>
                <div className="text-center max-w-2xl m-auto text-auto">

                    <p className="text-3xl sm:text-4xl max-w-2xl font-extrabold text-gray-900 mb-4">
                        2.6k+ Active Server In All Over The World.
                    </p>
                </div>

            </div>


            {/* Map with dots */}
            <div  data-aos="zoom-out-down" className="md:flex flex-wrap justify-center   gap-8 mt-10">



                <div data-aos="slide-left" className="relative flex-1 max-w-4xl mx-auto mb-12">
                    <img
                        src="/home/mapImg.png"
                        alt="World Map"
                        className="w-300 opacity-30 rounded"
                    />
                    {/* Example server dots */}

                </div>

                {/* Continent cards */}
                <div  data-aos="slide-right" className="flex-1">
                    <p className="text-gray-500 text-left max-w-md mx-auto mb-10">
                        These speed excellent. It's a fast connection safety Internet leading
                        speeds across its network.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-6 max-w-3xl mx-auto">
                        {/* North America */}
                        <div>
                            <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-sm">
                                <img
                                    src="/home/northAmerica.png"
                                    alt="North America"
                                    className="w-10 h-10 mr-4"
                                />
                                <div>
                                    <p className="font-semibold text-gray-800">North America</p>
                                    <p className="text-sm text-gray-500">5 Countries</p>
                                </div>
                            </div>
                        </div>

                        {/* Europe */}
                        <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-sm">
                            <img
                                src="/home/europe.png"
                                alt="Europe"
                                className="w-10 h-10 mr-4"
                            />
                            <div>
                                <p className="font-semibold text-gray-800">Europe</p>
                                <p className="text-sm text-gray-500">19 Countries</p>
                            </div>
                        </div>

                        {/* Africa */}
                        <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-sm">
                            <img
                                src="/home/africa.png"
                                alt="Africa"
                                className="w-10 h-10 mr-4"
                            />
                            <div>
                                <p className="font-semibold text-gray-800">Africa</p>
                                <p className="text-sm text-gray-500">10 Countries</p>
                            </div>
                        </div>

                        {/* Asia */}
                        <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-sm">
                            <img
                                src="/home/asia.png"
                                alt="Asia"
                                className="w-10 h-10 mr-4"
                            />
                            <div>
                                <p className="font-semibold text-gray-800">Asia</p>
                                <p className="text-sm text-gray-500">25 Countries</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ActiveServers;
