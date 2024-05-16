import { AppointmentLink } from "@/components/ui/AppointmentLink";
import { Bubbles } from "@/components/ui/Bubbles";
import { ContactUs } from "@/widgets/contactus/ContactUs";
import { PetServices } from "@/widgets/petservices/PetServices";
import { Header } from "./Header";
import { About } from "./About";
import bghero from '@/assets/bg-hero.png';
import { OurServices } from "./OurServices";
import { Prices } from "./Prices";

export const Home = () => {
  return (
    <>
      <div className="overflow-hidden relative max-w-screen">
        <Header />
        <main
          style={{ backgroundImage: `url(${bghero})` }}
          className={`h-[100vh] w-full flex flex-col bg-[#29b6f6] dark:bg-[#00008B] bg-cover bg-center bg-no-repeat`}
        >
          <div className="w-full flex flex-col gap-5 items-center justify-center my-auto">
            <h1 className="sm:text-5xl font-medium text-white">
              PetVibe - грумінг з любов’ю
            </h1>
            <h3 className="text-center text-white text-base sm:w-2/5 w-4/5">
              
              Наш професійний грумінг салон пропонує високоякісні послуги для
              собак будь-яких розмірів. У ПетВайб ми розуміємо, наскільки
              важливо, щоб ваші чотирилапі друзі виглядали і почувалися на всі
              сто!
            </h3>
            <div className="flex gap-[27px]">
                <button className="w-[175px] h-[37px] text-sm rounded-[10px] border border-black text-black bg-[#FDFF89] hover:opacity-60 active:opacity-80 duration-300">Дивитися послуги</button>
                <button className="w-[175px] h-[37px] text-sm rounded-[10px] border border-black text-black bg-[#FDFF89] hover:opacity-60 active:opacity-80 duration-300">Запис Онлайн</button>
            </div>
          </div>
          <Bubbles />
        </main>
        <About />
        <OurServices />
        <Prices />
        <PetServices />
        <ContactUs />
      </div>
      <AppointmentLink />
    </>
  );
};
