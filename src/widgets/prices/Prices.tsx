import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AccordionHeader } from "@radix-ui/react-accordion";

export const Prices = () => {
  return (
    <section id="prices" className="w-screen my-16 flex flex-col items-center  ">
      <h1 className="">Ціна на послуги</h1>
      <Accordion type="single" collapsible className="w-4/5 md:w-3/5 mx-auto">
        <AccordionItem value="item-1">
          <AccordionTrigger>КУПАННЯ</AccordionTrigger>
          <AccordionContent className="leading-7">
            <AccordionHeader className="text-xl">Від 150 грн</AccordionHeader>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
              iusto.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
              iusto.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
              iusto.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
              iusto.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>ГІГІЄНІЧНИЙ КОМПЛЕКС</AccordionTrigger>
          <AccordionContent className="leading-7">
            <AccordionHeader className="text-xl">Від 150 грн</AccordionHeader>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
              iusto.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
              iusto.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
              iusto.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
              iusto.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>ДОМАШНЯ СТРИЖКА</AccordionTrigger>
          <AccordionContent className="leading-7">
            <AccordionHeader className="text-xl">Від 150 грн</AccordionHeader>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
              iusto.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
              iusto.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
              iusto.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
              iusto.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>ПОРОДНИЙ КОМПЛЕКС</AccordionTrigger>
          <AccordionContent className="leading-7">
            <AccordionHeader className="text-xl">Від 150 грн</AccordionHeader>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
              iusto.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
              iusto.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
              iusto.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
              iusto.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};
