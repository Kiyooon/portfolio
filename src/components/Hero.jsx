import { motion } from "framer-motion";

import { styles } from "../styles";
import { ProgrammerCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, my name is <span className='text-[#915EFF]'>Kiyoon</span>
          </h1>
          <p className='mt-2 text-secondary text-[17px] max-w-5xl leading-[30px]'>
          Welcome to my website! I'm a fresh Computer Science graduate with a passion for creating intuitive digital experiences. 
          I specialize in building responsive web applications that prioritize user experience, while exploring the intersection 
          of human-computer interaction and machine learning. My academic journey has equipped me with both technical expertise 
          and a deep understanding of how people interact with technology. Now ready to contribute to innovative projects and grow 
          alongside forward-thinking teams in the tech industry. 
          </p>
        </div>
      </div>

      <ProgrammerCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;