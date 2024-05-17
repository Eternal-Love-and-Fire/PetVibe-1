import bghero from "@/assets/bg-hero.png";
import { Btn } from "./components/Btn";
type HeroContentType = {
  content: {
    title?: string;
    paragraphs?: string[];
    bgImage?: string;
  };
};
export const Hero: React.FC<HeroContentType> = ({ content }) => {
  return (
    <>
      <main
        style={{ backgroundImage: `url(${bghero})` }}
        className={`h-[100vh] w-full flex flex-col bg-cover bg-center bg-no-repeat`}
      >
        <div className="w-full flex flex-col gap-5 items-center justify-center my-auto">
          <h1 className="tracking-wide font-medium text-2xl sm:text-5xl text-white">
            {content.title}
          </h1>
          <h3 className="text-center text-white text-base sm:w-2/5 w-4/5">
            {content.paragraphs?.map((str, i) => {
              return <p key={i}>{str}</p>;
            })}
          </h3>
          <div className="flex gap-5 sm:gap-7">
            <Btn
              type="btn"
              text="Дивитися послуги"
              classnames="w-[160px] sm:w-[175px]"
            />
            <Btn
              type="btn"
              text="Запис Онлайн"
              classnames="w-[160px] sm:w-[175px]"
            />
          </div>
        </div>
        {/* <Bubbles /> */}
      </main>
      {/* <AppointmentLink /> */}
    </>
  );
};
