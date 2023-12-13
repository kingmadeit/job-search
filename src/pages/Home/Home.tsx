import React from 'react';
import Lottie from "lottie-react";
import hiringAnimation from '../../assets/lotties/hiring-lottie.json'

const Home = () => {
  return (
    <main className='w-screen h-screen flex-col justify-center'>
      <h1 className='text-lg'>Looking for a new career?</h1>
      <Lottie 
        animationData={hiringAnimation} 
        loop={true} 
        style={{ height: '80%', width: '50%'}}
        />
    </main>
  )
}

export default Home