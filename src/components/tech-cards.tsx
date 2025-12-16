import { motion, useReducedMotion } from "motion/react";

import { techCards } from "@/data/tech-expertise";
import { cn } from "@/lib/utils";

export function TechCards() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } },
      }}
      className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto w-fit gap-y-8 md:gap-x-12"
    >
      {techCards.map((item, idx) => (
        <motion.li
          variants={{
            hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          key={item.id}
          className={cn(
            "relative group w-[270px] h-60 rounded-lg perspective-[1000px] mx-auto",
            idx === techCards.length - 1 &&
              "md:col-span-2 lg:col-span-3 xl:col-span-1",
            idx >= 4 && "xl:translate-x-[60%]",
          )}
        >
          <div
            className="absolute inset-0 bg-[#00327D]/85 rounded-lg bg-cover bg-center [transform-style:presrve-3d] hover:transform-[rotateY(180deg)] transition-transform duration-700"
            style={{ backgroundImage: `url('${item.imageUrl}')` }}
          >
            <div className="absolute inset-0 bg-[#00327D]/85 rounded-lg flex items-center justify-center h-full px-4">
              <h4 className="text-white font-poppins text-balance text-center font-bold text-[30px] select-none opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                {item.label}
              </h4>
            </div>
            <div className="opacity-0 absolute inset-0 bg-[#001633]/85 rounded-lg flex items-center justify-center h-full px-4 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-[20px] text-white font-semibold text-center text-balance transform-[rotateY(180deg)] select-none">
                {item.description}
              </p>
            </div>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  );
}
