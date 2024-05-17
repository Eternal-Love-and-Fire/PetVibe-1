import { OurService } from "./components/OurService";

type OurServicesType = {
  content: {
    services: {
      title: string;
      listitems: string[];
    }[];
    title: string;
  };
};

export const OurServices: React.FC<OurServicesType> = ({ content }) => {
  return (
    <section className="min-h-[647px] my-28 sm:my-40 mb:20 sm:mb-32 mx-0 sm:mx-5 text-black">
      <h2 className="text-[40px] tracking-wider text-center">
        {content.title}
      </h2>
      <div className="w-fit mx-auto mt-6 sm:mt-[37px]">
        <ul className="flex flex-wrap justify-center xl:flex-row gap-8">
          {content.services.map((service, i) => (
            <OurService
              key={i}
              title={service.title}
              listitems={service.listitems}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};
