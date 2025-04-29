'use client';

 
import DownloadProcess from '@/components/home/download-installing';
import FeaturesSection from '@/components/home/featureforapp';
import VpnIntroductionSection from '@/components/home/VPNIntroductionSection';
import Link from 'next/link';
 
export default function HeroSection() {
    return (
        <div className='bg-zinc-400  '>
            <div>
          <VpnIntroductionSection></VpnIntroductionSection>
          <FeaturesSection></FeaturesSection>
          <DownloadProcess></DownloadProcess>
            </div>
            
        </div>
    );
}
