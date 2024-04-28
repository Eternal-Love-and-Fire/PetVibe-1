import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
interface PopoverServiceModel {
  svg: React.ReactNode;
  title: string;
  content: string;
}
export const PopoverService: React.FC<PopoverServiceModel> = ({
  svg,
  title,
  content,
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="h-24 w-24 rounded-full">{svg}</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="flex flex-col justify-center gap-4">
          <h4 className="text-2xl tracking-wider font-bold">{title}</h4>
          <p className="leading-8 tracking-wide">{content}</p>
        </div>
      </PopoverContent>
    </Popover>
  );
};
