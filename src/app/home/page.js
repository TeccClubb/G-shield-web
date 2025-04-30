'use client';

 
import Link from 'next/link';
 
 import FeaturesSection from '@/components/home/featureforapp';
import VpnIntroductionSection from '@/components/home/VPNIntroductionSection';
import PricingPlans from '@/components/home/pircingPlansSection';
import DownloadProcess from '@/components/home/download-installing';
export default function HeroSection() {
    return (
        <div className='bg-zinc-300   '>
            <div>
            <VpnIntroductionSection></VpnIntroductionSection>
             <FeaturesSection></FeaturesSection>
             <PricingPlans></PricingPlans>
             <DownloadProcess></DownloadProcess>

            </div>
            
        </div>
    );
}