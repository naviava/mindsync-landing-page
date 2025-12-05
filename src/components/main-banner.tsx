export function MainBanner() {
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
          <div className="flex flex-col lg:flex-row lg:gap-x-2 items-center md:items-start lg:items-center lg:justify-between">
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
          </div>
          <img
            src="/assets/banner-line.png"
            alt="Underline"
            className="hidden lg:block"
          />
          <a href="#contact-us">
            <div className="mt-10 inline-flex items-center justify-center cursor-pointer text-white font-semibold px-10 py-4 text-lg rounded-full border border-cta backdrop-blur-md hover:bg-cta hover:shadow-[0_10px_25px_rgba(0,118,234,0.45)] transition-all duration-300 text-[24px] tracking-wide font-poppins lg:max-w-100">
              GET IN TOUCH
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
