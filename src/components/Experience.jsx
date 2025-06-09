/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

import { motion } from "framer-motion";

import 'react-vertical-timeline-component/style.min.css';

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const ExperienceCard = ({ experience }) => {
  
  const { t, i18n } = useTranslation();
  const expTrans = t(`experiences.${experience.id}`, { returnObjects: true });
  const fmt = (iso) => {
    if (!iso) return t('present');
    const dt = new Date(iso);
    return new Intl.DateTimeFormat(i18n.language, {
      month: 'short',
      year:  'numeric'
    }).format(dt);
  };
  const dateStr = `${fmt(experience.startDate)} – ${fmt(experience.endDate)}`;
  
  return (
    <VerticalTimelineElement
      contentStyle={{ background: 'rgb(25, 1, 21)', color: '#fff'}}
      contentArrowStyle={{ borderRight: '8px solid rgb(15, 2, 25)'}}

      date={dateStr}
      dateClassName="text-gray-800 dark:text-white"
      iconStyle={{ background: experience.iconBg }}
      iconClassName="ring-4 ring-black dark:ring-white"
      icon={

        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%]
            object-contain"
            />
        </div>

      }

      >
        <div>
          <h3 className="text-white text-[24px] font-bold">{expTrans.title}
          </h3>
          <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0}}>
            {experience.company_name}</p>
        </div>

        <ul className="mt-5 list-disc ml-5 space-y-2">
          {expTrans.points.map((pt, i) => (
            <li key={i} className="text-white-100 text-[14px] pl-1 tracking-wider ">
                {pt}

            </li>

          )
          )}

        </ul>
    </VerticalTimelineElement>

  )
}

const Experience = () => {
  const { t } = useTranslation()
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const obs = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => obs.disconnect();
  }, []);
    return (
      <>
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}
          >{t('What I have done so far')}</p>
          <h2 className={styles.sectionHeadText}
          >{t('Work Experience')}.</h2>


      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor={isDark ? "#fff" : "#000"} >
          {experiences.map((exp, idx) => (
            <ExperienceCard key={exp.id} experience={exp}  />
          ))}
        </VerticalTimeline>

      </div>
      </>
    )

  }

export default SectionWrapper(Experience, "work")