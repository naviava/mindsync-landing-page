import { coreValues } from '@/data/core-values'
import { missionVision } from '@/data/mission-vision'
import { cn } from '@/lib/utils'

export function OurCoreValues() {
  return (
    <section
      id="core-values"
      className="bg-[#01478B] overflow-hidden px-4 py-10 lg:px-14"
    >
      {/* Core values card. */}
      <div className="max-w-7xl mx-auto bg-white rounded-3xl py-10 px-4 shadow-[0_10px_4px_10px_rgba(0,0,0,0.25)]">
        <h2 className="text-center font-bold text-cta text-[40px] md:text-[70px] xl:text-[90px] font-poppins">
          Our Core Values
        </h2>
        <div className="flex flex-col xl:flex-row items-center mt-4 md:mt-6 lg:mt-12 lg:px-10 gap-10">
          {/* Image */}
          <img
            src="/assets/core-values.png"
            alt="Our core values"
            className="w-[234px] h-[238px] md:w-[382px] md:h-[388px] xl:w-[520px] xl:h-[520px] xl:-rotate-90"
          />

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-8 xl:gap-4">
            {coreValues.map((value, idx) => (
              <div
                key={value.label}
                className={cn(
                  idx === coreValues.length - 1 &&
                    'md:col-span-2 xl:col-span-1 md:max-w-md md:mx-auto xl:max-w-none',
                )}
              >
                <h3 className="text-center xl:text-left! italic text-[30px] font-bold">
                  {value.label}
                </h3>
                <p className="text-center xl:text-left! text-balance xl:text-wrap text-[20px]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Vision. */}
      <div className="relative my-24 flex flex-col lg:flex-row justify-center max-w-md mx-auto gap-y-8 gap-x-14 lg:max-w-[1000px]">
        {missionVision.map((value, idx) => (
          <MVCard key={value.label} {...value} idx={idx} />
        ))}
      </div>
    </section>
  )
}

function MVCard(props: {
  label: string
  description: string
  imageUrl: string
  idx: number
}) {
  return (
    <div className="relative bg-[#00327D] px-8 py-6 rounded-2xl text-white">
      <img src={props.imageUrl} alt="Mission" width={86} height={90} />
      <h3 className="mt-4 font-extrabold text-[28px]">{props.label}</h3>
      <p className="mt-2 text-[24px]">{props.description}</p>
    </div>
  )
}
