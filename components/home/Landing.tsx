import React from 'react'

interface LandingPageProps {
  children: React.ReactNode

}
function Landing({children}:LandingPageProps) {
  return (
    <div>
      {children}
    </div>
  )
}

export default Landing