import { Tilt } from "react-tilt"

import { motion } from 'framer-motion';

import { styles } from '../styles';

import { github } from '../assets';

import { SectionWrapper } from '../hoc'

import { projects } from '../constants';

import { fadeIn, textVariant } from '../utils/motion';
import { useTranslation } from "react-i18next";

const ProjectCard = ({ index, id, name, tags, image, source_code_link, live_link }) => {
  const { t } = useTranslation(); 
  const proj = t(`projects.${id}`, { returnObjects: true });
{
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75 )} style={{ height: "100%" }}
      onClick={() => live_link && window.open(live_link, "_blank")}
      className={live_link ? "cursor-pointer" : ""}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl w-full flex flex-col h-full"
        >
          <div className="relative w-full h-[230px] flex-shrink-0">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
              onClick={() => source_code_link && window.open(source_code_link, "_blank")}
              className={`black-gradient w-10 h-10 rounded-full flex justify-center items-center ${source_code_link ? "cursor-pointer" : "opacity-40 cursor-default"}`}
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                  />

              </div>

            </div>
          </div>

          <div className="mt-5 flex flex-col flex-1">
            <h3 className="text-white font-bold text-[24px] flex-shrink-0">{proj.name}</h3>
            <p className="mt-2 text-secondary text-[14px] leading-[22px] flex-1">{proj.description}</p>

          </div>

          <div className="mt-4 flex flex-wrap gap-2 flex-shrink-0">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}

              </p>
            ))}

          </div>

      </Tilt>
    </motion.div>
  )
}
}




const Works = () => {
  const { t } = useTranslation()
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          {t('My Work')}
          </p>
        <h2 className={styles.sectionHeadText}>
          {t('Projects')}.
          </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify"
          >
          {t('Project-introduction')}

          </motion.p>
      </div>

      <div className="mt-20 grid gap-7" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))" }}>

        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}

            />
        ))}

      </div>

    </>
  )
}

export default SectionWrapper (Works, "");