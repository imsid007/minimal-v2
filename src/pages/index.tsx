import { Grid, Typography, Button, Stack } from '@mui/material';
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
      <div
        className="text-mobile-center"
        style={{ backgroundColor: 'rgba(251, 251, 251, 1)', padding: '30px' }}
      >
        <HomeHero />
        <Features />
        <FeaturesDescriptopn />
        <JoinBeta />
      </div>
      <MainFooter />
    </>
  );
}
