'use client';

 
import Link from 'next/link';
 
 import FeaturesSection from '@/components/home/featureforapp';
import VpnIntroductionSection from '@/components/home/VPNIntroductionSection';
export default function HeroSection() {
    return (
        <div className='bg-zinc-400  '>
            <div>
            <VpnIntroductionSection></VpnIntroductionSection>
             <FeaturesSection></FeaturesSection>
            </div>
            
        </div>
    );
}