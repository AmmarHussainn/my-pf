// import data from "@/data/data";
// import FrontSection from "@/components/FrontSection";
// import { useEffect, useState } from "react";
// import Splash from "@/components/Splash";
// export default function Home() {
//   const [splash, setSplash] = useState(true);



//   return (
//     <>

//       <FrontSection />
//     </>

//   );
// }
'use client';
import data from '@/data/data';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
const FrontSection = () => {
  let router = useRouter()
  const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false,
  });
  return (
    <>
      <div
        id={
        
           'black-theme-frontPage'
        }
      >
        <div className='frontMain'>
          <div className='backgroundHeadingfront'>
            <p>
              {data.BACKGROUND_HEADING ? data.BACKGROUND_HEADING : 'MERN STACK'}
            </p>
          </div>
          <nav id='nav-elements'>Greetings</nav>

          <div className='frontPagethreenameMain'>
            <div className='mainGreeting'>Welcome to the digital realm of</div>
            <div className='mainName'>
              {data.NAME ? data.NAME : 'SHAH MEER'}
            </div>
            
          </div>
          <div class='connect__marker'>
            <div class='connect__circle'></div>
            <div class='connect__circle'></div>
            <div class='connect__circle'></div>
            <div class='connect__circle'></div>
          </div>
          <div className='GationBar'>
            <div className='GationBarOne' onClick={()=>{router.push('/projects')}}>
              Projects
            </div>
            <div className='GationBarOne' onClick={()=>{router.push('/history')}}>
              History
            </div>
            <div className='GationBarOne' onClick={()=>{router.push('/contact')}}>
              Contact
            </div>
          </div>
        </div>
      </div>

      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: '#929292',
        }}
        outerStyle={{
          mixBlendMode: 'exclusion',
          border: '3px solid #929292',
        }}
      />
    </>
  );
};
export default FrontSection;
