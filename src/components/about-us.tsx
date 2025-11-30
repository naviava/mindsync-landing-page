export function AboutUs() {
  return (
    <section id="about-us" className="px-4 py-10 lg:px-14">
      <div className="max-w-[1600px] mx-auto flex flex-col xl:flex-row items-center lg:gap-x-16 gap-y-4">
        <h2 className="text-center font-poppins font-bold text-cta text-[40px] md:text-[70px] xl:text-[90px] xl:text-left! w-full whitespace-nowrap max-w-fit">
          About Us
        </h2>
        <div className="text-[25px] text-center xl:text-justify!">
          <p className="text-balance">
            <span className="text-cta font-bold">MindSync</span> partners with
            businesses to co-create{' '}
            <span className="font-bold">
              customised, scalable digital solutions
            </span>{' '}
            that evolve with their needs. From MVPs to enterprise systems, our
            collaborative team delivers{' '}
            <span className="font-bold">seamless, secure software</span>{' '}
            designed for growth, offering not just code, but clarity,
            confidence, and capability in a fast-moving digital world.
          </p>
          <p className="text-cta italic font-bold mt-4">
            We strive to make your business thrive.
          </p>
        </div>
      </div>
    </section>
  )
}
