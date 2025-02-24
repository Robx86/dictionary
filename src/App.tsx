import "@/App.css";
import { Search } from "./components/ui/search";
import NavBar from "./components/navbar";
import Result from "./components/Result";

function App() {
  return (
    <div className="container mx-auto max-w-[736px] mb-32">
      <NavBar />
      <Search className="bg-[#F4F4F4] w-full h-16 py-5 px-6 font-bold" />
      <Result />
    </div>
  );
}

export default App;
