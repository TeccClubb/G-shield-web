'use client';


import ForgotPasswordModal from '@/components/forgetPassword';
import ActiveServers from '@/components/home/activeServer';
import FeaturesSection from '@/components/home/featureforapp';
import PricingPlans from '@/components/home/pircingPlansSection';
import VpnIntroductionSection from '@/components/home/VPNIntroductionSection';
import { useState } from 'react';
import Link from 'next/link';

export default function HeroSection() {
    const [open, setOpen] = useState(false);
    return (
        <div className='bg-zinc-400  '>
            <div>
                <VpnIntroductionSection></VpnIntroductionSection>
                <FeaturesSection></FeaturesSection>
                <PricingPlans></PricingPlans>
                <ActiveServers></ActiveServers>
                <ForgotPasswordModal open={open} onClose={() => setOpen(false)} />
                <button
                    onClick={() => setOpen(true)}
                    className="text-white   hover:text-gray-200 ml-4"
                >
                    Forgot Password?
                </button>

            </div>

        </div>
    );
}
