import { motion, useReducedMotion } from "motion/react";

import { GetInTouch } from "./get-in-touch";
import { QuickLinks } from "./quick-links";

export function Footer() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer className="pt-10 px-6 pb-24 bg-[#00132b]">
      <motion.div
        initial={{
          opacity: 0,
          y: shouldReduceMotion ? 0 : 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-white flex flex-col lg:flex-row max-w-[1200px] gap-y-12 md:gap-y-16 mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col md:items-center lg:items-start"
        >
          <a href="#">
            <img
              src="/assets/logo-dark.png"
              alt="Mindsync logo"
              className="w-[142px]"
            />
          </a>
          <p className="text-[18px] text-balance w-fit md:text-center max-w-120 lg:text-left">
            Mindsync specialises in building customised software designed to
            evolve with your business.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col md:flex-row flex-1 gap-y-8 max-w-120 gap-x-20 md:mx-auto lg:mx-0 lg:ml-auto"
        >
          <QuickLinks />
          <GetInTouch />
        </motion.div>
      </motion.div>
    </footer>
  );
}
