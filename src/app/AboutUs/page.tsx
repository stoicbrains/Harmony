"use client"
import useMousePosition from '../component/useMousePosition';
import styles from '../styles/page.module.css';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAnimation, useInView } from 'framer-motion';

export default function Home() {
  const DivRef = useRef(null);
  const control = useAnimation();
  const View = useInView(DivRef, { once: true });

  useEffect(() => {
    if (View) control.start('visible');
  }, [View]);

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  console.log('Mouse Position:', x, y);
  const size = isHovered ? 600 : 40;

  return (
    <motion.div
      ref={DivRef}
      variants={{ hidden: { opacity: 0, translateX: 25 }, visible: { opacity: 1, translate: 0 } }}
      initial='hidden'
      transition={{ delay: 0.25, ease: 'easeInOut', duration: 0.5 }}
      animate={control}
      className='absolute left-[0] top-[0] z-40 h-[100%] w-[100%] overflow-hidden'
    >
      <main className={styles.main}>
        <motion.div
          className={styles.mask}
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
        >
          <p
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
            id='para'
          >
            At our core, we provide effective strategies for navigating mental health hurdles through the expertise of our dedicated team. Embracing a remote approach, we facilitate connections between individuals and leading mental health professionals, guaranteeing tailored care. Our dedication lies in equipping you with the tools and assistance needed to cultivate a healthier, more balanced life. Embark on a transformative journey towards mental well-being with our steadfast commitment to your empowerment and support.
          </p>
        </motion.div>

        <div className={styles.body}>
          <p id='para'>
            At <span id='span'>Harmony, </span> we offer practical solutions to mental health challenges through our expert team. Operating remotely, we connect individuals with top mental health professionals, ensuring personalized care. Our commitment is to empower you with resources and support for a healthier, balanced life. Discover a harmonious journey to mental well-being with us
          </p>
        </div>
      </main>
    </motion.div>
  );
}
