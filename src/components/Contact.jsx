/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { motion } from "framer-motion";


import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

import { slideIn } from "../utils/motion";
import { contacts } from "../constants";
import { Tilt } from "react-tilt";
import { fadeIn } from '../utils/motion';
import { useInView } from 'react-intersection-observer';
import StarsCanvas from './canvas/Stars';
import { useTranslation } from "react-i18next";



const ContactCard = ({index ,name, image, source_link}) =>
{
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.75, 0.75 )}> 
    <div onClick={() => window.open(source_link, "_blank")}>   
      <Tilt className="w-10 h-10 object-contain rounded-full m-3 cursor-pointer">
            <img 
              src={image}
              alt={name}
              className="w-10 h-10 object-contain"
            />

      </Tilt>
    </div>  
    </motion.div>
  )
}

const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const { t } = useTranslation(); 
  {
    return (
      <div ref={ref} className="xl:mt-2 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        {inView && <StarsCanvas />}
        <motion.div
          variants={slideIn('left', "tween", 0.2, 1)}
          className="flex-[0.50] bg-black-100 p-8 rounded-2xl"
          >

            <p className={styles.sectionSubText}>{t('Get in touch')}</p>
            <h3 className={styles.sectionHeadText}>{t('Contact')}.</h3>
            {contacts.map((contact, index) => (
              <ContactCard 
              key={`contact-${index}`}
              index={index}
              {...contact}
              />
            ))}

        </motion.div>
        <motion.div
          variants={slideIn('right', "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
          >
            <EarthCanvas />
          
        </motion.div>

      </div>
    )
  }

  
}

export default SectionWrapper(Contact, "contact")