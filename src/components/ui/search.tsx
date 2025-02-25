import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import React from "react";

export type SearchProps = React.InputHTMLAttributes<HTMLInputElement> & {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
};

const Search = React.forwardRef<HTMLInputElement, SearchProps>(
  ({ className, search, setSearch, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex h-10 items-center rounded-2xl bg-white pl-3 text-sm focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-offset-2",
          className
        )}
      >
        <input
          {...props}
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          ref={ref}
          className="w-full p-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder-gray-400 dark:text-gray-800"
        />
        <SearchIcon className="h-[16px] w-[16px] text-[#A445ED]" />
      </div>
    );
  }
);

Search.displayName = "Search";

export { Search };
