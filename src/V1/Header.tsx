import { BurgerMenu } from "@/components/ui/BurgerMenu";
import { LinkCustom } from "@/components/ui/LinkCustom";
import { Logo } from "@/components/ui/Logo";

export const Header = () => {
  return (
    <header className="h-[73px] max-w-full mx-4 mt-[10px] flex justify-around items-center rounded-[20px] border border-black bg-[#CCF4FF]">
      <Logo />
      <nav className="w-6/12 hidden lg:flex justify-end gap-8 justify-self-center font-semibold tracking-wide">
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
