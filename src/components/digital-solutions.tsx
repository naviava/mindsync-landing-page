import { motion, useReducedMotion } from "motion/react";

import { digitalSolutions } from "@/data/tech-expertise";
import { useScreenSize } from "@/hooks/use-screen-size";
import { cn } from "@/lib/utils";

export function DigitalSolutions() {
  const { isMobile } = useScreenSize();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex flex-col gap-y-6 mt-12 lg:mt-16 md:gap-y-8 lg:gap-y-10 xl:gap-y-14">
      <h3 className="text-cta text-[40px] font-poppins font-bold text-center">
        Digital Solutions
      </h3>
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="grid grid-cols-2 md:grid-cols-3"
      >
        {digitalSolutions.map((item, idx) => (
          <li
            key={item.id}
            className={cn(
              "relative border-cta",
              isMobile && idx < 4 && "border-b-2",
              isMobile && idx % 2 === 0 && "border-r-2",
              !isMobile && idx < 3 && "md:border-b-2",
              !isMobile && idx !== 2 && idx !== 5 && "md:border-r-2",
            )}
          >
            {/* Dots for left side on mobile */}
            {isMobile && idx === 0 && (
              <>
                <div className="absolute w-2 h-2 bg-cta rounded -right-[5px]" />
                <div className="absolute w-2 h-2 bg-cta rounded -bottom-[5px]" />
              </>
            )}
            {isMobile && idx === 4 && (
              <>
                <div className="absolute w-2 h-2 bg-cta rounded -top-[5px]" />
                <div className="absolute w-2 h-2 bg-cta rounded -right-[5px] bottom-0" />
              </>
            )}

            {/* Dots for right side on mobile */}
            {isMobile && idx === 1 && (
              <div className="absolute w-2 h-2 bg-cta rounded -bottom-[5px] right-0" />
            )}
            {isMobile && idx === 5 && (
              <div className="absolute w-2 h-2 bg-cta rounded -top-[5px] right-0" />
            )}

            {/* Dots for non-mobile screens */}
            {!isMobile && idx === 0 && (
              <>
                <div className="absolute w-2 h-2 bg-cta rounded -right-[5px] top-0" />
                <div className="absolute w-2 h-2 bg-cta rounded -bottom-[5px] left-0" />
              </>
            )}
            {!isMobile && idx === 2 && (
              <>
                <div className="absolute w-2 h-2 bg-cta rounded -left-[5px] top-0" />
                <div className="absolute w-2 h-2 bg-cta rounded -bottom-[5px] right-0" />
              </>
            )}
            {!isMobile && idx === 3 && (
              <div className="absolute w-2 h-2 bg-cta rounded -right-[5px] bottom-0" />
            )}
            {!isMobile && idx === 5 && (
              <div className="absolute w-2 h-2 bg-cta rounded -left-[5px] bottom-0" />
            )}

            {/* Content */}
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col mx-auto p-4 md:p-8 xl:p-12"
            >
              <img
                src={item.imageUrl}
                alt={item.label}
                className="w-[166px] aspect-square mx-auto"
              />
              <h4 className="text-center text-balance text-[25px] font-bold text-cta">
                {item.label}
              </h4>
            </motion.div>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
