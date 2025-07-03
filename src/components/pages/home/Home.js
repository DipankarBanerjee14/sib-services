// src/components/pages/home/Home.js

import React from 'react';

// Importing all components from the same folder
import HeroSlider from './HeroSlider';
import AboutPreview from './AboutPreview';
import ExperienceStats from './ExperienceStats';
import MissionVision from './MissionVision';
import Services from './Services';
import TestimonialSlider from './TestimonialSlider';

const Home = () => {
    return (
        <main className="mt-0 mb-0">
            <HeroSlider />
            <AboutPreview />
            <MissionVision />
            <ExperienceStats />
            <Services />
            <TestimonialSlider />
        </main>
    );
};
  

export default Home;
