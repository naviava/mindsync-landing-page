import { DigitalSolutions } from "./digital-solutions";
import { TechCards } from "./tech-cards";

export function TechExpertise() {
  return (
    <section
      id="tech_expertise"
      className="px-4 mt-10 md:mt-16 lg:mt-20 max-w-[1600px] mx-auto md:px-10!"
    >
      <div className="flex flex-col xl:flex-row lg:gap-x-6 lg:items-center">
        <h2 className="text-cta font-bold text-center lg:text-left! text-[40px] md:text-[70px] lg:text-[90px] font-poppins text-balance line-clamp-2 lg:w-[650px] shrink-0 lg:leading-24">
          Technologies and Expertise
        </h2>
        <p className="text-[25px] text-balance text-center mt-4 md:text-justify lg:mt-6">
          At <span className="text-cta font-bold">MindSync</span>, our strength
          lies in combining deep technical expertise with creative
          problem-solving. We build scalable, secure, and intelligent solutions
          using modern technologies, tailored to fit your business goals and
          growth performance.
        </p>
      </div>
      <TechCards />
      <DigitalSolutions />
    </section>
  );
}
