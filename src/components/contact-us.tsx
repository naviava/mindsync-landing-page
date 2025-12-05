import { ContactForm } from "./contact-form";

export function ContactUs() {
  return (
    <section
      id="contact-us"
      className="bg-cover bg-center flex justify-center items-center px-4 py-20"
      style={{ backgroundImage: "url('/assets/contact-bg.png')" }}
    >
      <div className="bg-[#0076EABA] py-10 rounded-[4rem] px-4 md:px-12 w-full md:w-[665px] lg:w-[844px] xl:w-[1000px]">
        <h3 className="font-poppins text-white font-semibold text-[40px] md:text-[50px] xl:text-[80px] text-balance text-center leading-12]">
          Lets start a<br />
          Conversation!
        </h3>
        <ContactForm />
      </div>
    </section>
  );
}
