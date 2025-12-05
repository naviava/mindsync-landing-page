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
  return (
    <section
      id="industries"
      className="bg-cover bg-center pt-12 md:pt-16 lg:pt-18 pb-16 mt-12 px-4 md:pb-24 lg:pb-32 xl:pb-24"
      style={{ backgroundImage: "url('/assets/industries-bg.png')" }}
    >
      <div className="text-white flex flex-col justify-center items-center xl:flex-row max-w-[1600px] mx-auto">
        <h2 className="max-w-[700px] font-poppins font-bold text-[40px] md:text-[70px] lg:text-[90px] text-balance text-center leading-12 md:leading-[4.4rem] lg:leading-24 line-clamp-2 lg:w-[650px] shrink-0 xl:text-left">
          Industries We Empower
        </h2>
        <p className="text-center mt-4 text-balance text-[25px] md:mt-8 xl:text-justify my-auto">
          At <span className="font-semibold">MindSync</span>, our strength lies
          in combining deep technical expertise with creative problem-solving.
          We build scalable, secure, and intelligent solutions using modern
          technologies, tailored to fit your business goals and growth
          performance.
        </p>
      </div>
      <ul className="flex flex-col gap-y-6 justify-center items-center mt-6 md:mt-16 md:gap-y-10 xl:mt-32">
        {INDUSTRIES.map((item, idx) => (
          <li
            key={item.id}
            className={cn(
              "bg-[#0076EA] py-1 font-poppins italic text-white font-semibold px-4 text-[30px] rounded-xl text-balance text-center min-w-[335px]",
              idx % 2 === 0
                ? "md:-translate-x-32 lg:-translate-x-52 xl:-translate-x-68 2xl:-translate-x-80"
                : "md:translate-x-32 lg:translate-x-52 xl:translate-x-68",
            )}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </section>
  );
}
