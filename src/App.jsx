import React,{useState,useEffect} from 'react'
import Navbar from './components/layout/Navbar'
import { CursorDot } from './lib/utils';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './components/layout/Footer';
import "./index.css"
import { motion, useMotionValue, useSpring  } from 'framer-motion';
import { CursorifyProvider } from '@cursorify/react'

function App() {
  const location = useLocation();
const cursorX = useMotionValue(-100);
const cursorY = useMotionValue(-100);
const springConfig = { damping: 25, stiffness: 700 };
const cursorXSpring = useSpring(cursorX, springConfig);
const cursorYSpring = useSpring(cursorY, springConfig);

   useEffect(() => {
   const moveCursor = (e) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
    };
    window.addEventListener('mousemove', moveCursor)
    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  return (
    
    <>

    
{/* <motion.div
  className="cursor"
  style={{
    translateX: cursorXSpring,
    translateY: cursorYSpring,
  }}
/> */}
 <CursorifyProvider className="cursor" options={{ type: 'spring', spring: { stiffness: 700, damping: 25 } }}>
   <div className="min-h-screen bg-white text-black">
      
      {/* 🔝 Navbar */}
      { location.pathname === "/" ? <Navbar /> : <Navbar /> }
      
      {/* 📄 Page Content */}
      <main className="">
        <Outlet />
      </main>

      {/* 🔻 Footer */}
      <Footer />
    </div>
          </CursorifyProvider>

    </>
  )
}

export default App
