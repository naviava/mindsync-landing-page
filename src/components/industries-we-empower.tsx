import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

const INDUSTRIES: {
  id: string;
  label: string;
}[] = [
  { id: "edtech", label: "Education & EdTech" },
  { id: "healthcare", label: "Healthcare & Wellness" },
  { id: "ecommerce", label: "E-Commerce & Retail" },
  { id: "fintech", label: "FinTech" },
  { id: "saas", label: "SaaS & Startups" },
];

export function IndustriesWeEmpower() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="industries"
      className="bg-cover bg-center pt-12 md:pt-16 lg:pt-18 pb-16 mt-12 px-4 md:pb-24 lg:pb-32 xl:pb-24"
      style={{ backgroundImage: "url('/assets/industries-bg.png')" }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.25 } },
        }}
        className="text-white flex flex-col justify-center items-center xl:flex-row max-w-[1600px] mx-auto"
      >
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[700px] font-poppins font-bold text-[40px] md:text-[70px] lg:text-[90px] text-balance text-center leading-12 md:leading-[4.4rem] lg:leading-24 line-clamp-2 lg:w-[650px] shrink-0 xl:text-left"
        >
          Industries We Empower
        </motion.h2>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mt-4 text-balance text-[25px] md:mt-8 xl:text-justify my-auto"
        >
          At <span className="font-semibold">MindSync</span>, our strength lies
          in combining deep technical expertise with creative problem-solving.
          We build scalable, secure, and intelligent solutions using modern
          technologies, tailored to fit your business goals and growth
          performance.
        </motion.p>
      </motion.div>
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.18 } },
        }}
        className="flex flex-col gap-y-6 justify-center items-center mt-6 md:mt-16 md:gap-y-10 xl:mt-32"
      >
        {INDUSTRIES.map((item, idx) => {
          const fromLeft = idx % 2 === 0;

          return (
            <motion.li
              key={item.id}
              initial={{
                opacity: 0,
                x: fromLeft ? -80 : 80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className={cn(
                "bg-[#0076EA] py-1 font-poppins italic text-white font-semibold px-4 text-[30px] rounded-xl text-balance text-center min-w-335px] transition-transform",
                fromLeft
                  ? "md:-translate-x-32 lg:-translate-x-52 xl:-translate-x-68 2xl:-translate-x-80"
                  : "md:translate-x-32 lg:translate-x-52 xl:translate-x-68",
              )}
            >
              {item.label}
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
}
