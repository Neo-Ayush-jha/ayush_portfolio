'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from './components/Nav'
import LeftSide from './components/LeftSide'
import RigitSide from './components/RigitSide'
import { motion } from "framer-motion";
import Banner from './components/Banner'
import About from './components/About'
import Experience from './components/Experience'
import Project from './components/Project'
import Archive from './components/Archive'
import Contact from './components/Contact'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ayush-Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60'>
          <Nav />
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5}} className='w-full h-[88vh] xl:flex items-center gap-20 justify-between'>
            <div className='hidden xl:inline-flex w-32 h-full fixed left-0 bootom-0'><LeftSide/></div>
            <div className='h-[88vh] w-full mx-auto p-4'>
              <Banner/>
              <About/>
              <Experience/>
              <Project/>
              <Archive/>
              <Contact/>
              <Footer/>
            </div>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5}}  className='hidden xl:inline-flex w-32 h-full fixed right-0 bootom-0'><RigitSide/></motion.div>
          </motion.div>
          {children}
        </main>
      </body>
    </html>
  )
}
