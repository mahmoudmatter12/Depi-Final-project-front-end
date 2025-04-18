import { FeaturesSection } from '@/components/home/components/FeaturesSection'
import { HeroSection } from '@/components/home/components/HeroSection'
import Landing from '@/components/home/Landing'
import React from 'react'


function page() {
  return (
    <>
      <Landing>
        <HeroSection />
        <FeaturesSection />
      </Landing>
    </>
  )
}

export default page
