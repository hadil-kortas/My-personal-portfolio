import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ index, title, icon }) => {
    const { t } = useTranslation(); {
      return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[2px] rounded-[20px]
        shadow-card'
        >
          <div 
            options={{
              max: 45,
              scale: 1,
              speed: 450
            }}
            className='bg-tertiary rounded-[20px]
            py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
              <img src={icon} alt={title}
              className='w-16 h-16 object-contain'/>
              <h3 className='text-white text-[20px] font-bold text-center'>{t(title)}</h3>  
            </div>

          
        </motion.div>

    </Tilt>
    
  )

    }

  
}


const About = () => {
  const { t } = useTranslation(); {
    return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}
        >{t('Introduction')}</p>
        <h2 className={styles.sectionHeadText}
        >{t('Overview')}.</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify'
      >
        {t('Overview Description')}

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}
          />
        ))}
      </div>
    </>
    
  )

  }
  
}

export default SectionWrapper (About, "about")