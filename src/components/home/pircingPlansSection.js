import React, { useEffect } from 'react';
import { Card, CardContent, Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { CHECKOUT_PAGE_PATH } from '@/lib/pathnames';
import { usePlans } from '@/hooks/usePlans';
import Image from 'next/image';

const PricingPlans = () => {
  const { plans, isPlansLoading } = usePlans();
  const [myPlans, setMyPlans] = React.useState(plans);

  useEffect(() => {
    console.log(plans);
    setMyPlans(plans);
  }, [plans]); // Update myPlans whenever plans change

  useEffect(() => {
    const AOS = require('aos');  // Import AOS library for animations
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section id="pricing" data-aos="fade-down" className="py-16 mt-3 px-6 bg-white text-center">
      <div data-aos="zoom-in-up" className='max-w-6xl mx-auto px-4'>
        <div className="inline-block px-4 py-1 mb-4 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
          Pricing
        </div>
        <h2 className="md:text-4xl mb-4 text-black text-5xl font-semibold   leading-[59px]">Choose Your VPN Plan</h2>
        <div className="text-center max-w-2xl m-auto text-auto">
          <p className="text-gray-500 font-Manrope mb-12 text-auto">
            Flexible and affordable VPN plans designed to meet your needs. Pay securely with PayPal, Cryptocurrencies, or in-app via Google Play and Apple App stores.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-6 px-4 py-10">
        {myPlans.map((plan) => (
          <div
            key={plan.id}
            className={`rounded-2xl w-full md:w-[300px] h-[500px] flex flex-col justify-between ${
              plan.name === "Gold" ? 'bg-green-600 text-white' : 'bg-neutral-100 text-black'
            }`}
          >
            <Card elevation={0} data-aos="zoom-in-down" className="!shadow-none !bg-transparent !rounded-2xl !overflow-hidden h-full flex flex-col justify-between">
              <CardContent className="flex flex-col flex-grow justify-between p-6 text-left">
                <Typography sx={{ color: plan.name === "Gold" ? 'white' : 'black' }}>
                  <div className="text-left">
                    <div className={`rounded-full w-[100px] text-xs px-3 py-1 font-semibold ${
                      plan.name === "Gold" ? 'bg-white text-green-600' : 'bg-green-100 text-green-700'
                    }`}>
                      {plan.name}
                    </div>

                    <div className="text-3xl font-bold mt-4">
                      ${plan.price}
                      <span className="text-base font-medium">/{plan.duration_unit}</span>
                    </div>

                    <div className="text-base font-semibold mt-2">{plan.name}</div>
                    <ul className="space-y-4 text-sm mt-4 font-jakarta">
                      {/* Render features from the description array */}
                      {plan.description?.split(',').map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          {/* <CheckIcon sx={{ color: 'green' }} /> */}
                          <div
                        
                          className={`rounded-full p-1 ${plan.name === "Gold"? 'bg-white' : 'bg-green-600'}`} // Set background white for highlighted, green for non-highlighted
                          style={{ width: '24px', height: '24px' }} // Adjust size of the background for the icon
                        >

                          <Image
                            src={plan.name==="Gold" ? "/home/vector.svg" : "/home/tickicon.svg"} // Use vector.svg for highlighted, tickicon.svg for others
                            alt="Check Icon"
                            width={20}
                            height={20}
                            className={`${plan.name==="Gold" ? 'text-green-600' : 'text-white'}`} // Set text color green for non-highlighted, white for highlighted
                          />
                          </div>
                          {feature.trim()}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Typography>

                <div className="mt-6">
                  <Button
                    component={Link}
                    href={CHECKOUT_PAGE_PATH(plan.id)}
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: plan.name === "Gold" ? '#fff' : '#f3f4f6',
                      color: plan.name === "Gold" ? '#16a34a' : '#000',
                      '&:hover': {
                        backgroundColor: '#e5e7eb',
                      },
                      mt: 2,
                      borderRadius: '0.5rem',
                      textTransform: 'capitalize',
                    }}
                  >
                    Choose Plan
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;
