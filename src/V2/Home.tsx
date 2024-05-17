import { useEffect, useState } from "react";
import axios from "axios";
import { ContentType } from "./model/ContentType";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { About } from "./About";
import { OurServices } from "./OurServices";
import { Prices } from "./Prices";
import { Footer } from "./Footer";
import { Bubbles } from "@/components/ui/Bubbles";

export const Home = () => {
  const [content, setContent] = useState<ContentType | undefined>(undefined);
  const getContent = async (url: string) => {
    try {
      const { data } = await axios.get<ContentType>(url);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getContent("http://localhost:3000/attributes").then((res) => {
      console.log(res);
      setContent(res);
    });
  }, []);

  return (
    <div className="min-w-screen relative overflow-hidden">
      {content ? (
        <>
          <Header />
          <Hero content={content.hero} />
          <Bubbles />
          <About content={content.about} />
          <OurServices content={content.ourservices} />
          <Prices content={content.prices} />
          {/* feedbacks */}
          <Footer />
        </>
      ) : (
        ""
      )}
      {/*
      <Feedbacks />
      <Footer /> */}
    </div>
  );
};
