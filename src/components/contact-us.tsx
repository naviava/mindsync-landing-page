import { motion, useReducedMotion } from "motion/react";
import { ContactForm } from "./contact-form";

export function ContactUs() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="contact-us"
      className="bg-cover bg-center flex justify-center items-center px-4 py-20"
      style={{ backgroundImage: "url('/assets/contact-bg.png')" }}
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: shouldReduceMotion ? 1 : 0.96,
          y: shouldReduceMotion ? 0 : 30,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-[#0076EABA] py-10 rounded-[4rem] px-4 md:px-12 w-full md:w-[665px] lg:w-[844px] xl:w-[1000px]"
      >
        <motion.h3
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="font-poppins text-white font-semibold text-[40px] md:text-[50px] xl:text-[80px] text-balance text-center leading-12]"
        >
          Lets start a<br />
          Conversation!
        </motion.h3>
        <ContactForm />
      </motion.div>
    </section>
  );
}
