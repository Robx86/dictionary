import "@/App.css";
import { Search } from "./components/ui/search";
import NavBar from "./components/navbar";
import Result from "./components/Result";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "@uidotdev/usehooks";

function App() {
  const [search, setSearch] = useState<string>("");
  const debouncedSearchTerm = useDebounce(search, 300);

  const { data, isLoading, error } = useQuery({
    queryKey: ["definitions", debouncedSearchTerm],
    queryFn: () =>
      fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${debouncedSearchTerm}`
      ).then((res) => res.json()),
    enabled: !!debouncedSearchTerm,
  });

  return (
    <div className="container mx-auto max-w-[736px] mb-32">
      <NavBar />
      <Search
        className="bg-[#F4F4F4] w-full h-16 py-5 px-6 font-bold"
        search={search}
        setSearch={setSearch}
      />
      <Result
        data={data}
        isLoading={isLoading}
        error={error}
        searchedTerm={search}
      />
    </div>
  );
}

export default App;
