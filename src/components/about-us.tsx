export function AboutUs() {
  return (
    <section id="about-us" className="">
      <div className="max-w-[1700px] px-4 py-10 mx-auto flex flex-col lg:flex-row items-center lg:gap-x-16 gap-y-4">
        <h2 className="text-center font-poppins font-bold text-cta text-[40px] md:text-[70px] lg:text-[120px] lg:text-left! w-full whitespace-nowrap max-w-fit">
          About Us
        </h2>
        <div className="text-[25px] text-center lg:text-justify!">
          <p>
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
