import { AppointmentLink } from "@/components/ui/AppointmentLink";
import { Bubbles } from "@/components/ui/Bubbles";
import { About } from "@/widgets/about/About";
import { ContactUs } from "@/widgets/contactus/ContactUs";
import { Header } from "@/widgets/header/Header";
import { PetServices } from "@/widgets/petservices/PetServices";
import { Prices } from "@/widgets/prices/Prices";
import bgImage from "@/assets/bg1.webp";

export const Home = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <main style={{ backgroundImage: `url(${bgImage})` }} className={`h-[calc(100vh-88px)] w-full flex flex-col bg-[#29b6f6] dark:bg-[#00008B] bg-cover bg-center bg-no-repeat`}>
          <div className="w-full flex flex-col items-center justify-center my-auto">
            <h1 className="sm:text-9xl text-5xl font-bold">PetVibe</h1>
            <h3 className="text-white text-xl sm:w-2/5 w-4/5">
              Повний грумінг. Ми працюємо з собаками та котами різних порід.
              Виконуємо стрижку будь-якої складності. Купання, вичісування,
              грумінг, чищення вух, підрізання пазурів, та багато іншого. Чого
              саме? В душі не знаю.
            </h3>
          </div>
          <Bubbles />
        </main>
        <About />
        <PetServices />
        <Prices />
        <ContactUs />
      </div>
      <AppointmentLink />
    </>
  );
};
