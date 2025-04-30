// PricingPlans.tsx
import React from 'react';
import { Card, CardContent, Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import Image from 'next/image'
import Typography from '@mui/material/Typography';

const plans = [
  {
    badge: 'FREE',
    badgeColor: 'bg-green-100 text-green-500',
    price: '$0.00',
    plan: 'Individual plan',
    features: ['10+ AI Generators', '7 Days trial with plan'],
    buttonText: 'Get Started',
    highlighted: false,
  },
  {
    badge: 'POPULAR',
    badgeColor: 'bg-white text-green-600 font-bold',
    price: '$9.99',
    plan: 'Business Plan',
    features: [
      '10+ AI Generators',
      '7 Days trial with plan',
      'Costumers Services 24 hours',
      'Priority Supports',
      '10+ Users Active',
    ],
    buttonText: 'Choose Plan',
    highlighted: true,
  },
  {
    badge: 'ADVANCED',
    badgeColor: 'bg-green-100 text-green-500',
    price: '$19.99',
    plan: 'Business Plan',
    features: [
      '10+ AI Generators',
      '7 Days trial with plan',
      'Costumers Services 24 hours',
      'Priority Supports',
      '10+ Users Active',
    ],
    buttonText: 'Costum Now',
    highlighted: false,
  },
];

const PricingPlans = () => {
  return (
    <section id="pricing" data-aos="fade-down" className="py-16 mt-3  g:px-20 px-6 bg-white text-center">
      <div data-aos="zoom-in-up" className='max-w-6xl mx-auto px-4'>

        <div className="inline-block px-4 py-1 mb-4 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
          Pricing
        </div>
        <h2 className="  md:text-4xl   mb-4 text-black text-5xl font-semibold font-['Poppins'] leading-[59px]">Choose Your VPN Plan</h2>
        <div className="text-center max-w-2xl m-auto text-auto">

          <p className="text-gray-500 mb-12 text-auto">
            Flexible and affordable VPN plans designed to meet your needs. Pay securely with PayPal, Cryptocurrencies or in-app via Google Play and Apple App stores.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row shadow-0  justify-center gap-6 px-4 py-10">
        {plans.map((plan, idx) => (
          <div
          
          key={idx}
          className={`rounded-2xl w-full md:w-[300px] h-[500px] flex flex-col justify-between ${plan.highlighted ? 'bg-green-600 text-white' : 'bg-neutral-100 text-black'
            }`}
        >
            <Card
              elevation={0}
              data-aos="zoom-in-down"
              className="!shadow-none !bg-transparent !rounded-2xl !overflow-hidden h-full flex flex-col justify-between"
            >
              <CardContent
                className={`flex flex-col flex-grow justify-between p-6 text-left`}
              >
                  <Typography sx={{ color: plan.highlighted ? 'white' : 'black' }}>

                <div className='text-left'>
                  <div className={`rounded-full w-[100px] text-xs px-3 py-1 font-semibold ${plan.badgeColor}`}>
                    {plan.badge}
                  </div>

                  <div className="text-3xl font-bold mt-4">
                    {plan.price}
                    <span className="text-base font-medium">/month</span>
                  </div>

                  <div className="text-base font-semibold mt-2">{plan.plan}</div>
                  <ul className="space-y-4 text-sm mt-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2" data-aos="zoom-out-up">
                        <div
                        
                          className={`rounded-full p-1 ${plan.highlighted ? 'bg-white' : 'bg-green-600'}`} // Set background white for highlighted, green for non-highlighted
                          style={{ width: '24px', height: '24px' }} // Adjust size of the background for the icon
                        >
                          {/* Conditionally render either vector.svg or tickicon.svg */}
                          <Image
                            src={plan.highlighted ? "/home/vector.svg" : "/home/tickicon.svg"} // Use vector.svg for highlighted, tickicon.svg for others
                            alt="Check Icon"
                            width={20}
                            height={20}
                            className={`${plan.highlighted ? 'text-green-600' : 'text-white'}`} // Set text color green for non-highlighted, white for highlighted
                          />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>


                </div>
                  </Typography>

                {/* Button */}
                <div className="mt-6">
                  <Button

                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: plan.highlighted ? '#fff' : '#f3f4f6', // gray-100
                      color: plan.highlighted ? '#16a34a' : '#000', // green-600 or black
                      '&:hover': {
                        backgroundColor: '#e5e7eb', // gray-200
                      },
                      mt: 2,
                      borderRadius: '0.5rem',
                      textTransform: 'capitalize',
                      border: plan.highlighted ? '3px solid #lack' : 'none',
                    }}
                    className=' outline-1'
                  >
                    {plan.buttonText}
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
