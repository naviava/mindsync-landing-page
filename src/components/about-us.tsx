import { motion, useReducedMotion } from "motion/react";

export function AboutUs() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about-us" className="px-4 py-10 lg:px-14">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ staggerChildren: 0.2 }}
        className="max-w-[1600px] mx-auto flex flex-col xl:flex-row items-center lg:gap-x-16 gap-y-4"
      >
        <motion.h2
          variants={{
            hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -40 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center font-poppins font-bold text-cta text-[40px] md:text-[70px] xl:text-[90px] xl:text-left! w-full whitespace-nowrap max-w-fit"
        >
          About Us
        </motion.h2>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[25px] text-center xl:text-justify!"
        >
          <p className="text-balance">
            <span className="text-cta font-bold">MindSync</span> partners with
            businesses to co-create{" "}
            <span className="font-bold">
              customised, scalable digital solutions
            </span>{" "}
            that evolve with their needs. From MVPs to enterprise systems, our
            collaborative team delivers{" "}
            <span className="font-bold">seamless, secure software</span>{" "}
            designed for growth, offering not just code, but clarity,
            confidence, and capability in a fast-moving digital world.
          </p>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-cta italic font-bold mt-4"
          >
            We strive to make your business thrive.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
