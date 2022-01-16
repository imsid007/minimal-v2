import React from 'react';
import { m } from 'framer-motion';
import HomeHero from 'src/components/home/home-hero';
import Features from 'src/components/home/features';
import FeaturesDescriptopn from 'src/components/home/features-descriptopn';
import MainFooter from 'src/layouts/main/MainFooter';
import JoinBeta from 'src/components/home/join-beta';
export default function Home() {
  return (
    <>
      <div className="home-container">
        <HomeHero />
        <Features />
        <FeaturesDescriptopn />
        <JoinBeta />
      </div>
      <MainFooter />
    </>
  );
}
