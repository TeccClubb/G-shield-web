'use client';

 
import Link from 'next/link';
 
 import FeaturesSection from '@/components/home/featureforapp';
import VpnIntroductionSection from '@/components/home/VPNIntroductionSection';
import PricingPlans from '@/components/home/pircingPlansSection';
import DownloadProcess from '@/components/home/download-installing';
import ActiveServers from '@/components/home/activeServer';
import AboutSection from '@/components/home/AboutSection';
import DownloadSection from '@/components/home/DownloadSection';
import { Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
 
const HeroSection =()=> {
    const searchParams = useSearchParams();

    useEffect(() => {
      const section = searchParams.get('scrollTo');
      if (section) {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [searchParams]);
    return (
        <div className='bg-zinc-300   '>
            <div>
            <VpnIntroductionSection></VpnIntroductionSection>
             <FeaturesSection></FeaturesSection>
              <AboutSection></AboutSection>
             <PricingPlans></PricingPlans>
             <DownloadProcess></DownloadProcess>
             <DownloadSection></DownloadSection>
             <ActiveServers></ActiveServers>

            </div>
            
        </div>
    );
}
const HomePage = () => {
  return (
     <Suspense>
  
        <HeroSection />
     </Suspense>
  );
}

export default HomePage;