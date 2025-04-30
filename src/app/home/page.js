'use client';

 
import Link from 'next/link';
 
 import FeaturesSection from '@/components/home/featureforapp';
import VpnIntroductionSection from '@/components/home/VPNIntroductionSection';
import PricingPlans from '@/components/home/pircingPlansSection';
import DownloadProcess from '@/components/home/download-installing';
import ActiveServers from '@/components/home/activeServer';
export default function HeroSection() {
    return (
        <div className='bg-zinc-300   '>
            <div>
            <VpnIntroductionSection></VpnIntroductionSection>
             <FeaturesSection></FeaturesSection>
             <PricingPlans></PricingPlans>
             <DownloadProcess></DownloadProcess>
             <ActiveServers></ActiveServers>

            </div>
            
        </div>
    );
}