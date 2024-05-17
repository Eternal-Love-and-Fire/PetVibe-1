import { useEffect, useState } from "react";
import { Btn } from "./components/Btn";

type ListItemType = {
  type: string;
  price: number;
};

type PricesType = {
  content: {
    type: string;
    data: {
      title: string;
      listitems: ListItemType[];
    };
  }[];
};

export const Prices: React.FC<PricesType> = ({ content }) => {
  const [prices, setPrices] = useState<ListItemType[]>([]);

  const _setContentData = (type: "hygiene" | "complex" | "other") => {
    const selectedContent = content.find((part) => part.type === type);
    if (selectedContent) {
      setPrices(selectedContent.data.listitems);
    }
  };

  useEffect(() => {
    _setContentData("hygiene");
  }, []);

  return (
    <section className="py-4 px-2 sm:py-8 sm:px-12 bg-[#CCDDFF]">
      <div className="my-4 justify-center sm:flex-row flex flex-col gap-4 mx-4">
        <Btn
          type="btn"
          text="Гігієничний догляд за собаками"
          onClick={() => _setContentData("hygiene")}
          classnames="p-1 h-[50px] sm:w-[220px]"
        />
        <Btn
          type="btn"
          text="Комплексний догляд та стрижка собак"
          onClick={() => _setContentData("complex")}
          classnames="p-1 h-[50px] sm:w-[220px]"
        />
        <Btn
          type="btn"
          text="Інші послуги"
          onClick={() => _setContentData("other")}
          classnames="p-1 h-[50px] sm:w-[220px]"
        />
      </div>
      <article>
        <ul className="lg:max-h-[533px] flex flex-col gap-3 flex-wrap">
          {prices?.length > 0 ? (
            prices.map((item, i) => (
              <li
                key={i}
                className="max-w-[400px] p-1 sm:mr-6 border-b border-blue-600 flex justify-between text-sm rounded-[10px] bg-[#bdd3ff]"
              >
                <span>{item.type}</span>
                <span>{item.price}</span>
              </li>
            ))
          ) : (
            <li className="text-center text-2xl">Щось пішло не так або ж ця частина ще дороблюється :D</li>
          )}
        </ul>
      </article>
    </section>
  );
};
