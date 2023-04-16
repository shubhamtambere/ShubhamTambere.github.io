import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal/Fade';
import endpoints from '../constants/endpoints';
import Social from './Social';
import FallbackSpinner from './FallbackSpinner';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import About from './About';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import AppContext from '../AppContext';

const styles = {
  nameStyle: {
    fontSize: '5em',
  },
  inlineChild: {
    display: 'inline-block',
  },
  mainContainer: {
    height: '90vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1, // set a positive zIndex to ensure the section is displayed above others by default
    margin: 0,
      padding: 0,
  },
  sectionContainer: {
    margin: '20',
    padding: 0,
    height: '100vh',
    position: 'relative',
    zIndex: -1, // set a negative zIndex to allow the section to overlap with the previous section
    backgroundColor: 'white',
  },
  sectionContainer2: {
      margin: 0,
      padding: 0,
      height: '55vh',
      position: 'relative',
      zIndex: -1, // set a negative zIndex to allow the section to overlap with the previous section
      backgroundColor: '#262626',
      color: 'white',


    },

};

function Home() {
  const [data, setData] = useState(null);
  //const backgroundImage = darkMode.value ? 'images/1.jpg' : 'images/2_1.jpg';

  useEffect(() => {
    fetch(endpoints.home, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return data ? (
    <div className="parallax-container" style={{ margin: 0, padding: 0 }}>
      <ParallaxProvider>
      <ParallaxBanner
                  layers={[
                    {
                      image: 'images/1.jpg',
                      amount: 0.5,
                    },
                  ]}
                  style={{
                     width: '100vw',
                         height: '100vh',
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'center',
                          margin: 0,
                               padding: 0,
                  }}
                >
                  <div style={styles.mainContainer}>
                    <h1 style={styles.nameStyle}>{data?.name}</h1>
                    <div style={{ flexDirection: 'row' }}>
                      <h2 style={styles.inlineChild}>I&apos;m&nbsp;</h2>
                      <Typewriter
                        options={{
                          loop: true,
                          autoStart: true,
                          strings: data?.roles,
                        }}
                      />
                    </div>
                    <Social />
                  </div>
                </ParallaxBanner>


{/*         <section className="parallax-section" style={styles.sectionContainer}> */}
{/*           <Parallax y={[-30, 30]} speed={-5}> */}
{/*                       <Fade> */}
{/*                         <div style={styles.mainContainer}> */}
{/*                           <h1 style={styles.nameStyle}>{data?.name}</h1> */}
{/*                           <div style={{ flexDirection: 'row' }}> */}
{/*                             <h2 style={styles.inlineChild}>I&apos;m&nbsp;</h2> */}
{/*                             <Typewriter */}
{/*                               options={{ */}
{/*                                 loop: true, */}
{/*                                 autoStart: true, */}
{/*                                 strings: data?.roles, */}
{/*                               }} */}
{/*                             /> */}
{/*                           </div> */}
{/*                           <Social /> */}
{/*                         </div> */}
{/*                       </Fade> */}
{/*                     </Parallax> */}
{/*         </section> */}

        <section className="parallax-section" style={ styles.sectionContainer2 }>
                  <Parallax y={[-20, 20]} speed={-3} startScroll={0} endScroll={200}>
                    <About />
                  </Parallax>
                </section>

                <section className="parallax-section" style={styles.sectionContainer}>
                  <Parallax y={[-30, 30]} speed={-5}>
                    <Education />
                  </Parallax>
                </section>

                <section className="parallax-section" style={styles.sectionContainer}>
                  <Parallax y={[-20, 20]} speed={-7}>
                    <Experience />
                  </Parallax>
                </section>

                <section className="parallax-section" style={styles.sectionContainer}>
                  <Parallax y={[-40, 40]} speed={-4}>
                    <Skills />
                  </Parallax>
                </section>
      </ParallaxProvider>
    </div>

  ) : <FallbackSpinner />;
}

export default Home;