import { ModeToggle } from "@/components/mode-toggle";
import { BurgerMenu } from "@/components/ui/BurgerMenu";
import { LinkCustom } from "@/components/ui/LinkCustom";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="w-full p-6 pb-4 flex justify-around items-center">
      <Logo />
      <nav className="w-6/12 hidden lg:flex justify-end gap-8 justify-self-center font-semibold tracking-wide">
        <LinkCustom to="/PetVibe-1/#about" title="Про Нас" />
        <LinkCustom to="/PetVibe-1/#petservices" title="Послуги" />
        <LinkCustom to="/PetVibe-1/#prices" title="Ціни" />
        <LinkCustom to="/PetVibe-1/#contactus" title="Контакти" />
      </nav>
      <BurgerMenu />
      <ModeToggle />
      <Button variant={"ghost"} className="hidden lg:block justify-self-end">
        Записатись Онлайн
      </Button>
    </header>
  );
};
