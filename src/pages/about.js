import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-2.jpg'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'

const AnimatedNumbers = ({value})=>{
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue , {duration:3000})
  const isInView = useInView(ref, {once:true})
  useEffect(()=>{
    if(isInView){
      motionValue.set(value)
    }
  },[isInView , value , motionValue])

  useEffect(()=>{
    springValue.on("change", (latest)=>{
      if(ref.current && latest.toFixed(0) <= value){
        ref.current.textContent = latest.toFixed(0)
      }
    })
  },[springValue , value])
  return <span ref={ref}></span>
}
const about = () => {
  return (
    <>
    <Head>
      <title>Meysam Azari | About Page</title>
      <meta name='description' content='Meysam Azari'></meta>
    </Head>
    <main className='flex w-full flex-col items-center justify-center'>
      <Layout classname='pt-16'>
        <AnimatedText text="Passion Fuels Purpose!" classname='mb-16'/>
        <div className='grid w-full grid-cols-8 gap-16'>
          <div className='col-span-3 flex flex-col items-start justify-center'>
            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>
              About Me
            </h2>
            <p className='font-medium'>
            Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, 
and user-centered digital experiences. With 4 years of experience in the field. I am always looking for 
new and innovative ways to bring my clients' visions to life.
            </p>
            <p className='my-4 font-medium'>
            - I believe that design is about more than just making things look pretty – it's about solving problems and 
creating intuitive, enjoyable experiences for users. 
            </p>
            <p className='font-medium'>
- Whether I'm working on a website, mobile app, or 
other digital product, I bring my commitment to design excellence and user-centered thinking to 
every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
            </p>
          </div>
          <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark '/>
              <Image src={profilePic} alt="Meysam Azari" className="w-full h-auto rounded-2xl"/>
          </div>
          <div className='col-span-2 flex flex-col items-end justify-between'>
            <div className='flex flex-col items-end justify-center'>
              <span className='inline-block text-7xl font-bold'>
                <AnimatedNumbers value={50}/>+
              </span>
              <h2 className='text-xl font-medium capitalize text-dark/75'>
                Satisfied Clients
              </h2>
            </div>
            <div className='flex flex-col items-end justify-center'>
              <span className='inline-block text-7xl font-bold'>
              <AnimatedNumbers value={40}/>+
              </span>
              <h2 className='text-xl font-medium capitalize text-dark/75'>
                Projects Completed
              </h2>
            </div>
            <div className='flex flex-col items-end justify-center'>
              <span className='inline-block text-7xl font-bold'>
              <AnimatedNumbers value={10}/>+  
              </span>
              <h2 className='text-xl font-medium capitalize text-dark/75'> 
                Years of Experience
              </h2>
            </div>
          </div>
        </div>
        <Skills/>
      </Layout>
    </main>
    </>
  )
}

export default about