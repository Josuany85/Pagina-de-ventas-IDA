import React from 'react';
import { HeroSection } from './components/HeroSection';
import { CourseGallery } from './components/CourseGallery';
import { MetricsSection } from './components/MetricsSection';
import { WhatYouGetSection } from './components/WhatYouGetSection';
import { ProblemSolutionSection } from './components/ProblemSolutionSection';
import { IsThisForYouSection } from './components/IsThisForYouSection';
import { BonusesSection } from './components/BonusesSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { ClosingSection } from './components/ClosingSection';
import { WhatsappButton } from './components/WhatsappButton';

const App: React.FC = () => {
    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <main>
                <HeroSection />
                <MetricsSection />
                <WhatYouGetSection />
                <ProblemSolutionSection />
                <CourseGallery />
                <IsThisForYouSection />
                <BonusesSection />
                <PricingSection />
                <FaqSection />
                <ClosingSection />
            </main>
            
            <WhatsappButton />
        </div>
    );
}

export default App;
