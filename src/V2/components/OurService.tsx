import React from "react";
import { Btn } from "./Btn";
type ServiceType = {
  title: string;
  listitems: string[];
};
export const OurService: React.FC<ServiceType> = ({ title, listitems }) => {
  return (
    <li>
      <article className="sm:w-[371px] w-[350px] min-w-[330px] mx-auto sm:mx-0 sm:h-[533px] px-5 pt-12 flex flex-col rounded-[20px] border border-black bg-[#CCF4FF]">
        <h3 className="text-[25px]">{title}</h3>
        <ul className="mt-[40px] pl-2 ml-2 flex flex-col gap-3 list-disc">
          {listitems.map((str, i) => (
            <li key={i}>{str}</li>
          ))}
        </ul>
        <div className="sm:mt-auto mb-8 mt-10 sm:mb-[53px] flex flex-col gap-[11px]">
          <Btn
            type="btn"
            text="Дізнатися більше"
            classnames="w-[155px] sm:w-[173px]"
          />
          <Btn
            type="btn"
            text="Записатися Онлайн"
            classnames="w-[165px] sm:w-[187px]"
          />
        </div>
      </article>
    </li>
  );
};
