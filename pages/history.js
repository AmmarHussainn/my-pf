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
                        This is  the Company I have worked with...
                    </div>

                    <div className='main-projects-div'>

                        <div onClick={() => { window.open('https://internativelabs.com', '_blank'); }} onMouseEnter={() => setHoveredDiv(1)}
                            onMouseLeave={() => setHoveredDiv(null)} className='main-projects-div-sub'>
                            <div className={`main-projects-div-sub-round `}>
                                {hoveredDiv === 1 ?
                                    <div className={`${hoveredDiv === 1 && 'opa'}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v280h-80v-280H200v560h280v80H200Zm360 0v-80h144L332-572l56-56 372 371v-143h80v280H560Z" /></svg>
                                    </div> :
                                    <img style={{ width: '100%', borderRadius: 'inherit' }} src='https://internativelabs.com/wp-content/uploads/2024/01/cropped-favicon-32x32.png' />}
                            </div>
                            <h4>Internative Labs</h4>
                            <p>Its a Software company in Karachi,I have completed my internship from feb-jun/2023 as a junior mernstack developer, then got transfered in Monsterhub</p>
                        </div>

                        {/* <div onClick={() => { window.open('https://monsterhub.io/', '_blank'); }} onMouseEnter={() => setHoveredDiv(2)}
                            onMouseLeave={() => setHoveredDiv(null)} className='main-projects-div-sub'>
                            <div className='main-projects-div-sub-round'>
                                {hoveredDiv === 2 ?
                                    <div className={`${hoveredDiv === 2 && 'opa'}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v280h-80v-280H200v560h280v80H200Zm360 0v-80h144L332-572l56-56 372 371v-143h80v280H560Z" /></svg>
                                    </div> :
                                    <img style={{ width: '100%', borderRadius: 'inherit' }} src='https://monsterhub.io/assets/img/monsterhubSymbol.svg?v=68c16edd57' />
                                }</div>
                            <h4>Monster Hub</h4>
                            <p>Its also a Software Company , where i have got transferedby the last company.Worked here from jun/2023 from jan/2024 as a mernstack developer.</p>
                        </div> */}
                        <div onClick={() => { router.push("/contact") }} onMouseEnter={() => setHoveredDiv(2)}
                            onMouseLeave={() => setHoveredDiv(null)} className='main-projects-div-sub'>
                            <div className='main-projects-div-sub-round'>
                                {hoveredDiv === 2 ?
                                    <div className={`${hoveredDiv === 2 && 'opa'}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v280h-80v-280H200v560h280v80H200Zm360 0v-80h144L332-572l56-56 372 371v-143h80v280H560Z" /></svg>
                                    </div> :
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-120q-33 0-56.5-23.5T400-200q0-33 23.5-56.5T480-280q33 0 56.5 23.5T560-200q0 33-23.5 56.5T480-120Zm-80-240v-480h160v480H400Z"/></svg>                                }
                                </div>
                            <h4>Currently!</h4>
                            <p>Currently i am not working full time in a company cause of my university studies, but on small projects , if u also wanna hire me for project then Contact me.</p>
                        </div>

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
