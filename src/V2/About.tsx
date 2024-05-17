import dogwash from "@/assets/dog-wash.png";
type AboutType = {
  content: {
    aboutimage?: string | null;
    listheader: string;
    listitems: string[];
    paragraphs: string[];
  };
};
export const About: React.FC<AboutType> = ({ content }) => {
  return (
    <section className="min-h-[647px] mt-[49px] mx-4 relative flex flex-wrap items-center px-4 xl:px-0 pt-[34px] xl:pt-0 sm:justify-center gap-6 2xl:gap-[134px] sm:flex-row flex-col border border-black text-black rounded-[20px] font-medium bg-[#CCF4FF]">
      <div className="w-[329px] h-[58px] absolute left-[-2px] md:left-[103px] top-[-28px] flex items-center justify-center rounded-[10px] border border-black bg-[#CCDDFF]">
        <span className="text-[30px] tracking-wide">Про нас</span>
      </div>
      <article className="max-w-[578px] flex flex-col gap-5 text-[18px] font-medium">
        {content.paragraphs.map((str, i) => {
          return <h3 key={i}>{str}</h3>;
        })}
        <div>
          <h3>{content.listheader}</h3>
          <ul className=" list-disc pl-7">
            {content.listitems.map((str, i) => {
              return <li key={i}>{str}</li>;
            })}
          </ul>
        </div>
      </article>
      <article>
        <div className="mb-4 sm:mb-0">
          <img
            src={dogwash}
            alt="dog happy"
            className="rounded-[20px] border border-black"
          />
        </div>
      </article>
    </section>
  );
};
