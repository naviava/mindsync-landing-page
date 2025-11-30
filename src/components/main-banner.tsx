export function MainBanner() {
  return (
    <section
      className="lg:h-[671px] bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/main-banner.png')",
        height: `calc(100vh - 121px)`,
      }}
    >
      <div className="text-white h-full font-bold font-poppins text-[60px] px-10 flex items-center justify-center md:justify-start max-w-[2350px] mx-auto">
        <div>
          <div className="flex flex-col lg:flex-row lg:gap-x-2 items-center md:items-start lg:items-center lg:justify-between">
            <p>Think</p>
            <img
              src="/assets/banner-dot.png"
              alt="Separator"
              className="hidden lg:block"
            />
            <p>Transform</p>
            <img
              src="/assets/banner-dot.png"
              alt="Separator"
              className="hidden lg:block"
            />
            <p>Thrive</p>
          </div>
          <img
            src="/assets/banner-line.png"
            alt="Underline"
            className="hidden lg:block"
          />
        </div>
      </div>
    </section>
  )
}
