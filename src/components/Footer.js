import React from 'react'
import Layout from './Layout'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light
    sm:text-base'>
      <Layout classname='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div>
          Build With <span className='text-primary dark:text-primaryDark text-2xl px-1 lg:py-2'>&hearts;</span> by&nbsp;<Link href="/" className='underline underline-offset-2'>Me</Link>
        </div>
        <Link href="/" target={'_blank'} className='underline'>say hello</Link>
      </Layout>
    </footer>
  )
}

export default Footer