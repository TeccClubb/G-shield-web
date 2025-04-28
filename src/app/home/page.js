'use client';

 
import Link from 'next/link';
import VpnIntroductionSection from '../components/home/VPNIntroductionSection';
import FeaturesSection from '../components/featureApp/featureforapp';
export default function HeroSection() {
    return (
        <div className='bg-[#F6F6F6]  '>
            <div>
            <VpnIntroductionSection></VpnIntroductionSection>
            <FeaturesSection></FeaturesSection>
            </div>
            
        </div>
    );
}
