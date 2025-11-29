import { MainBanner } from '@/components/main-banner'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      {
        name: 'description',
        content:
          'Mindsync provides strategic, purpose-driven partnership to scale businesses globally through digital innovation and structured market expansion.',
      },
      {
        title: 'Mindsync - Connecting Intelligence with Innovation',
      },
    ],
  }),
  component: LandingPage,
})

function LandingPage() {
  return (
    <main>
      <header className="h-[121px] bg-[#001633]">Top header</header>
      <MainBanner />
      <section>About us</section>
      <section>Our Core Values</section>
      <section>Technologies and Expertise</section>
      <section>Industries We Empower</section>
      <section>Contact us</section>
    </main>
  )
}
