import { GetInTouch } from "./get-in-touch";
import { QuickLinks } from "./quick-links";

export function Footer() {
  return (
    <footer className="pt-10 px-6 pb-24 bg-[#00132b]">
      <div className="text-white flex flex-col lg:flex-row max-w-[1200px] gap-y-12 md:gap-y-16 mx-auto">
        <div className="flex flex-col md:items-center lg:items-start">
          <a href="#">
            <img
              src="/assets/logo-dark.png"
              alt="Mindsync logo"
              className="w-[142px]"
            />
          </a>
          <p className="text-[18px] text-balance w-fit md:text-center max-w-120 lg:text-left">
            Mindsync specialises in building customised software designed to
            evolve with your business.
          </p>
        </div>
        <div className="flex flex-col md:flex-row flex-1 gap-y-8 max-w-120 gap-x-20 md:mx-auto lg:mx-0 lg:ml-auto">
          <QuickLinks />
          <GetInTouch />
        </div>
      </div>
    </footer>
  );
}
