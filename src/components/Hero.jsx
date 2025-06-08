import { motion } from 'framer-motion';
import { styles } from '../styles';
import { Tilt } from 'react-tilt';
import { picofme } from '../assets';
import { Typewriter } from 'react-simple-typewriter';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import StarsCanvas from './canvas/Stars';



const PDF_FILE_URL = '/Resume.pdf';

const Hero = () => {
  const downloadFileAtURL=(url)=>{
    fetch(url)
    .then((response) => response.blob())
    .then(blob=>{
      const blobURL = window.URL.createObjectURL(new Blob([blob]))
      const fileName = url.split("/").pop();
      const aTag = document.createElement("a");
      aTag.href = blobURL;
      aTag.setAttribute("download", fileName);
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();

    });
  };
  const { ref, inView } = useInView({ threshold: 0.1 });
  
  const { t, i18n } = useTranslation(); 
  return (
    <section ref={ref} className="relative w-full h-screen mx-auto">
      {inView && <StarsCanvas />}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-10`}>
        {/* ───────────── Timeline dot & line ───────────── */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#fc6767]" />
          <div className="w-1 sm:h-80 h-40 pink-gradient" />
        </div>

        {/* ───────────── Left column: Intro text ───────────── */}
        <div>
         <h1 className={`${styles.heroHeadText} text-white`}>
            {t('hey')}{' '}
            <span className="text-[#ec008c]">
              <Typewriter
                words={['Hadil Kortas']}
                loop={false}
                cursor
                typeSpeed={200}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {t('Description')}
          </p>

          <Tilt className={`button 
            ${['fr','nl'].includes(i18n.language) ? 'button--wide' : ''} 
            ${i18n.language === 'de'              ? 'button--xwide': ''}`}>
            <button
              onClick={() => downloadFileAtURL(PDF_FILE_URL)}
            >
              {t('Download-cv')}
            </button>
          </Tilt>
        </div>

        {/* ───────────── Right column: Image & button ───────────── */}
        <div>
          <img
            src={picofme}
            alt="Hadil Kortas"
            className="
              
              md:w-[100rem]
              ml-20
              mt-20
            "
          />

        </div>

      </div>

      {/* ───────────── Scroll-indicator ───────────── */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero   