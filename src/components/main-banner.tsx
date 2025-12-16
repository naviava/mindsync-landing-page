import { motion, useReducedMotion } from "motion/react";

export function MainBanner() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="lg:h-[671px] bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/main-banner.png')",
        height: `calc(100vh - 121px)`,
      }}
    >
      <div className="text-white h-full font-bold text-[60px] px-20 flex flex-1 items-center justify-center md:justify-start max-w-[2350px] mx-auto">
        <div className="flex flex-col">
          <motion.div
            initial={{ y: shouldReduceMotion ? 0 : 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row lg:gap-x-2 items-center md:items-start lg:items-center lg:justify-between"
          >
            <p className="font-poppins">Think</p>
            <img
              src="/assets/banner-dot.png"
              alt="Separator"
              className="hidden lg:block"
            />
            <p className="font-poppins">Transform</p>
            <img
              src="/assets/banner-dot.png"
              alt="Separator"
              className="hidden lg:block"
            />
            <p className="font-poppins">Thrive</p>
          </motion.div>
          <motion.img
            initial={{ scale: shouldReduceMotion ? 1 : 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            src="/assets/banner-line.png"
            alt="Underline"
            className="hidden lg:block"
          />
          <div className="mx-auto md:mx-0">
            <a href="#contact-us">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                whileHover={{
                  scale: 1.06,
                  boxShadow: "0 15px 35px rgba(0,118,234,0.45)",
                }}
                whileTap={{ scale: 0.97 }}
                className="mt-10 inline-flex items-center justify-center cursor-pointer text-white font-semibold px-10 py-4 text-lg rounded-full border border-cta backdrop-blur-md hover:bg-cta hover:shadow-[0_10px_25px_rgba(0,118,234,0.45)] transition-all duration-300 text-[24px] tracking-wide font-poppins lg:max-w-100"
              >
                GET IN TOUCH
              </motion.div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
