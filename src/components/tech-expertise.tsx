import { motion, useReducedMotion } from "motion/react";

import { DigitalSolutions } from "./digital-solutions";
import { TechCards } from "./tech-cards";

export function TechExpertise() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="tech-expertise"
      className="px-4 mt-10 md:mt-16 lg:mt-20 max-w-[1600px] mx-auto md:px-10!"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
        className="flex flex-col xl:flex-row lg:gap-x-6 lg:items-center"
      >
        <motion.h2
          variants={{
            hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -40 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-cta font-bold text-center lg:text-left! text-[40px] md:text-[70px] lg:text-[90px] font-poppins text-balance line-clamp-2 lg:w-[650px] shrink-0 lg:leading-24"
        >
          Technologies and Expertise
        </motion.h2>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[25px] text-balance text-center mt-4 md:text-justify lg:mt-6"
        >
          At <span className="text-cta font-bold">MindSync</span>, our strength
          lies in combining deep technical expertise with creative
          problem-solving. We build scalable, secure, and intelligent solutions
          using modern technologies, tailored to fit your business goals and
          growth performance.
        </motion.p>
      </motion.div>
      <TechCards />
      <DigitalSolutions />
    </section>
  );
}
