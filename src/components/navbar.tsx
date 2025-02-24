import { Moon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Separator } from "./ui/separator";
import { Switch } from "./ui/switch";
import Book from "@/assets/book.svg";

const NavBar = () => {
  return (
    <nav className="mt-[58px] mb-[3.2188rem] flex justify-between items-center">
      <img src={Book} alt="book" className="w-[24px] h-[24px]" />
      <div className="flex items-center gap-5">
        <Select defaultValue="sans">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="sans">Sans Serif</SelectItem>
              <SelectItem value="serif">Serif</SelectItem>
              <SelectItem value="mono">Mono</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Separator orientation="vertical" className="h-full" />
        <Switch />
        <Moon className="h-5" />
      </div>
    </nav>
  );
};

export default NavBar;
