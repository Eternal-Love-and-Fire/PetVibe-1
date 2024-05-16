import catAndDogImage from "@/assets/catAndDogAboutUs.png";

export const About = () => {
  return (
    <section className="h-screen w-screenz flex items-center sm:flex-row flex-col">
      <article
        className="h-full flex-1 flex flex-col items-center justify-center"
        id="about"
      >
        <h3 className="text-6xl mb-12">Про Нас:</h3>
        <p className="text-xl w-3/5 leading-8">
          Це як салон краси, і теж для тварин! А ще — це місце сили незрівнянних
          укладок, ідеальних мейків та легендарних нейл-артів! G×Bar — це 40
          б'юті-бари у 12 країнах, десятки тисяч кіс та укладок, стільки ж
          мейкапів і вдвічі більше манікюрів з педикюрами та брів! А разом — не
          злічити скільки дівчат і їхніх щасливих, гордих і незабутніх історій з
          G
        </p>
      </article>
      <article className="h-full flex-1 flex items-center justify-center overflow-hidden">
        <div className="">
          <img
            src={catAndDogImage}
            width={700}
            alt=""
            className="border-b-2 border-black dark:border-white"
          />
        </div>
      </article>
    </section>
  );
};
