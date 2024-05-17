'use client';
import data from '@/data/data';
import dynamic from 'next/dynamic';
const FrontSection = () => {
  const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false,
  });
  return (
    <>
      <div
        id={
          // data.THEME &&
          // (data.THEME.toLocaleLowerCase() == 'black' ||
          //   data.THEME.toLocaleLowerCase() == 'white')
          //   ? `${data.THEME}-theme-frontPage`
          //   :
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
            {/* <div className='mainRole'>{`a ${
              data.ROLE ? data.ROLE : 'a developer'
            }`}</div> */}
          </div>
          <div class='connect__marker'>
            <div class='connect__circle'></div>
            <div class='connect__circle'></div>
            <div class='connect__circle'></div>
            <div class='connect__circle'></div>
          </div>
          {/* <a className='main__mouse'></a> */}
          <div className='GationBar'>
            <div>
              Projects
            </div>
            <div>
              Experience
            </div>
            <div>
              Contact Me
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
