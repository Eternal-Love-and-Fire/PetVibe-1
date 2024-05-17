import { useState, useEffect } from "react";
import { BurgerMenu } from "@/components/ui/BurgerMenu";
import { LinkCustom } from "@/components/ui/LinkCustom";
import { Logo } from "@/components/ui/Logo";

export const Header = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    let previousScrollPosition = 0;

    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;

      if (previousScrollPosition < currentScrollPosition) {
        setShow(false);
      } else {
        setShow(true);
      }

      previousScrollPosition = currentScrollPosition;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed top-2 left-2 sm:left-4 right-2 sm:right-4 flex justify-around items-center rounded-[20px] border border-black bg-[#CCF4FF] z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-[72px]"
      } h-16 sm:px-4`}
    >
      <Logo />
      <nav className="hidden lg:flex w-full justify-end gap-8 pr-8">
        <LinkCustom to="/PetVibe-1/#about" title="Про Нас" />
        <LinkCustom to="/PetVibe-1/#petservices" title="Послуги" />
        <LinkCustom to="/PetVibe-1/#prices" title="Ціни" />
        <LinkCustom to="/PetVibe-1/#contactus" title="Контакти" />
        <LinkCustom to="/PetVibe-1/#contactus" title="Відгуки" />
        <LinkCustom to="/PetVibe-1/#contactus" title="Запис Онлайн" />
      </nav>
      <BurgerMenu />
    </header>
  );
};
