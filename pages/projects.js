'use client';
import { useEffect, useState } from "react";
import data from '@/data/data';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
const FrontSection = () => {
  let router = useRouter()
  const [hoveredDiv, setHoveredDiv] = useState(null);
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


        <div className='AlParentProjects'>

          <div className='headingp'>
            These Are the Projects I have worked on...
          </div>

          <div className='main-projects-div'>

            <div onClick={()=>{  window.open('https://app.intentwave.com', '_blank');}} onMouseEnter={() => setHoveredDiv(1)}
              onMouseLeave={() => setHoveredDiv(null)} className='main-projects-div-sub'>
              <div className={`main-projects-div-sub-round `}>
                {hoveredDiv === 1 ?
                  <div className={`${hoveredDiv === 1 && 'opa'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v280h-80v-280H200v560h280v80H200Zm360 0v-80h144L332-572l56-56 372 371v-143h80v280H560Z" /></svg>
                  </div> :
                  <img style={{ width: '100%', borderRadius: 'inherit' }} src='https://app.intentwave.com/mainLogoOne.png' />}
              </div>
              <h4>Intentwave</h4>
              <p>Turn your website into a money making machine. Learn how IntentWave will increase ROI, grow your email list, and save your business thousands of dollars.</p>
            </div>

            <div onClick={()=>{  window.open('https://www.airmycart.com', '_blank');}} onMouseEnter={() => setHoveredDiv(2)}
              onMouseLeave={() => setHoveredDiv(null)} className='main-projects-div-sub'>
              <div className='main-projects-div-sub-round'>
                {hoveredDiv === 2 ?
                  <div className={`${hoveredDiv === 2 && 'opa'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v280h-80v-280H200v560h280v80H200Zm360 0v-80h144L332-572l56-56 372 371v-143h80v280H560Z" /></svg>
                  </div> :
                  <img style={{ width: '100%', borderRadius: 'inherit' }} src='https://www.airmycart.com/AirmycarFavIcon.svg' />
                }</div>
              <h4>Airmycart</h4>
              <p>AirMyCart. Our objective is to provide the best parcel ...</p>            </div>

            <div onClick={()=>{  window.open('https://fastroadsideservice.co', '_blank');}} onMouseEnter={() => setHoveredDiv(3)}
              onMouseLeave={() => setHoveredDiv(null)} className='main-projects-div-sub'>
              <div className='main-projects-div-sub-round'>
                {hoveredDiv === 3 ?
                  <div className={`${hoveredDiv === 3 && 'opa'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v280h-80v-280H200v560h280v80H200Zm360 0v-80h144L332-572l56-56 372 371v-143h80v280H560Z" /></svg>
                  </div> : <img style={{ width: '100%', borderRadius: 'inherit' }} src='https://fastroadsideservice.co/images/rolingtyre.png' />
                }</div>
              <h4>Fast Roadside service</h4>
              <p>This is a One page Website for like informing the viewers , created on next js .</p>
            </div>

            <div onClick={()=>{  window.open('https://axiovoice.com/', '_blank');}} onMouseEnter={() => setHoveredDiv(4)}
              onMouseLeave={() => setHoveredDiv(null)} className='main-projects-div-sub'>
              <div className='main-projects-div-sub-round'>
                {hoveredDiv === 4 ?
                  <div className={`${hoveredDiv === 4 && 'opa'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v280h-80v-280H200v560h280v80H200Zm360 0v-80h144L332-572l56-56 372 371v-143h80v280H560Z" /></svg>
                  </div> : <img style={{ width: '100%', borderRadius: 'inherit' }} src='https://businessconnector.app/assets/img/Favicon.png' />
                } </div>
              <h4>Axiovoice</h4>
              <p>Welcome to Axio Voice Simplify Your Business Communications Transform the way you communicate with our innovative cloud voice communication solutions.</p>
            </div>

            {/* <div className='main-projects-div-sub'>
              <div className='main-projects-div-sub-round'>
                <img style={{width : '100%' , borderRadius :'inherit'}} src='https://businessconnector.app/assets/img/Favicon.png' />

              </div>
              <h4>EnterPass</h4>
              <p>Walletly empowers businesses with customer subscriptions for recurring income and convenient value-driven revenue streams</p>
            </div>

            <div className='main-projects-div-sub'>
              <div className='main-projects-div-sub-round'></div>
              <h4>Walletly</h4>
              <p>Walletly empowers businesses with customer subscriptions for recurring income and convenient value-driven revenue streams</p>
            </div> */}

          </div>
        </div>
        {/* <div class='connect__marker'>F
            <div class='connect__circle'></div>
            <div class='connect__circle'></div>
            <div class='connect__circle'></div>
            <div class='connect__circle'></div>
          </div> */}
        <div className='GationBar'>
          <div className='GationBarOne' onClick={() => { router.push('/projects') }}>
            Projects
          </div>
          <div className='GationBarOne' onClick={() => { router.push('/history') }}>
            History
          </div>
          <div className='GationBarOne' onClick={() => { router.push('/contact') }}>
            Contact
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
