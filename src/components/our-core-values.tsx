import { motion, useReducedMotion } from "motion/react";

import { coreValues } from "@/data/core-values";
import { missionVision } from "@/data/mission-vision";
import { cn } from "@/lib/utils";

export function OurCoreValues() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="core-values"
      className="bg-[#01478B] overflow-hidden px-4 py-10 lg:px-14"
    >
      {/* Core values card. */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto bg-white rounded-3xl py-10 px-4 shadow-[0_10px_4px_10px_rgba(0,0,0,0.25)]"
      >
        <motion.h2
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center font-bold text-cta text-[40px] md:text-[70px] xl:text-[90px] font-poppins"
        >
          Our Core Values
        </motion.h2>
        <div className="flex flex-col xl:flex-row items-center mt-4 md:mt-6 lg:px-10 gap-10">
          {/* Image */}
          <motion.img
            initial={{ opacity: 0, rotate: shouldReduceMotion ? 0 : -110 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src="/assets/core-values.png"
            alt="Our core values"
            className="w-[234px] h-[238px] md:w-[382px] md:h-[388px] xl:w-[520px] xl:h-[520px] xl:-rotate-90"
          />

          {/* Grid */}
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-8 xl:gap-4"
          >
            {coreValues.map((value, idx) => (
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                key={value.label}
                className={cn(
                  idx === coreValues.length - 1 &&
                    "md:col-span-2 xl:col-span-1 md:max-w-md md:mx-auto xl:max-w-none",
                )}
              >
                <h3 className="text-center xl:text-left! italic text-[30px] font-bold">
                  {value.label}
                </h3>
                <p className="text-center xl:text-left! text-balance xl:text-wrap text-[20px]">
                  {value.description}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>

      {/* Mission Vision. */}
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
        className="relative my-24 flex flex-col lg:flex-row justify-center max-w-md mx-auto gap-y-8 gap-x-14 lg:max-w-[1000px]"
      >
        {missionVision.map((value, idx) => (
          <MVCard key={value.label} {...value} idx={idx} />
        ))}
      </motion.ul>
    </section>
  );
}

function MVCard(props: {
  label: string;
  description: string;
  imageUrl: string;
  idx: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.li
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative bg-[#00327D] px-8 py-6 rounded-2xl text-white"
    >
      <img src={props.imageUrl} alt="Mission" width={86} height={90} />
      <h3 className="mt-4 font-extrabold text-[28px]">{props.label}</h3>
      <p className="mt-2 text-[24px]">{props.description}</p>
    </motion.li>
  );
}
