import React from "react";
import { useInView } from "react-intersection-observer";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const TechBall = ({ technology }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div ref={ref} className="w-28 h-28">
      {inView && <BallCanvas icon={technology.icon} />}
    </div>
  );
};

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <TechBall key={technology.name} technology={technology} />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
