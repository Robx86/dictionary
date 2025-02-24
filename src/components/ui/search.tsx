import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import React from "react";

export type SearchProps = React.InputHTMLAttributes<HTMLInputElement>;

const Search = React.forwardRef<HTMLInputElement, SearchProps>(
  ({ className, ...props }, ref) => {
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
          ref={ref}
          className="w-full p-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        />
        <SearchIcon className="h-[16px] w-[16px] text-[#A445ED]" />
      </div>
    );
  }
);

Search.displayName = "Search";

export { Search };
