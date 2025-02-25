import { Play } from "lucide-react";
import { Separator } from "./ui/separator";
import Sad from "@/assets/sad.png";
import { DefinitionType } from "@/lib/definition.types";

type ResultProps = {
  data: DefinitionType;
  isLoading: boolean;
  error: any;
  searchedTerm: string;
};

const Result = ({ data, isLoading, error, searchedTerm }: ResultProps) => {
  if (!searchedTerm) {
    return <>Search anything</>;
  }

  if (isLoading) {
    return <div className="text-center mt-32">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center mt-32">
        <p className="font-bold text-lg">
          <img
            src={Sad}
            alt="
          Sad face"
            className="w-[64px] h-[64px] mx-auto"
          />
        </p>
        <p className="font-bold text-lg mt-11">An Error Occurred</p>
        <p className="mt-6 text-md">Sorry</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center mt-32">
        <p className="font-bold text-lg">
          <img src={Sad} alt="Sad face" className="w-[64px] h-[64px] mx-auto" />
        </p>
        <p className="font-bold text-lg mt-11">No Definitions Found</p>
        <p className="mt-6 text-md">
          Sorry pal, we couldn't find definitions for the word you were looking
          for. You can try the search again at later time or head to the web
          instead.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="mt-[45px] flex items-center justify-between">
        <div className="">
          <h1 className="text-[64px] font-bold">{data[0]?.word}</h1>
          <p className="mt-2 text-[#A445ED]">{data[0]?.phonetics[0]?.text}</p>
        </div>
        <button className="rounded-full h-[75px] w-[75px] bg-[#A445ED]/25 flex items-center justify-center hover:bg-[#A445ED] hover:[&>svg]:fill-white hover:[&>svg]:text-white hover:cursor-pointer">
          <Play className="fill-[#A445ED] text-[#A445ED]" />
        </button>
      </div>
      <div>
        {data[0]?.meanings?.map((item: any, index: number) => (
          <div key={index}>
            <p className="text-[#2d2d2d] font-bold italic my-10 text-2xl">
              {item.partOfSpeech}
            </p>
            <ul className="list-disc list-inside flex flex-col gap-3 mt-[1.5625rem] mx-[1.375rem]">
              {item.definitions.map((definition: any, index: number) => (
                <li key={index}>{definition.definition}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-10">
        Synonyms{" "}
        <span className="text-[#A445ED] font-bold">
          {data[0]?.meanings[0]?.synonyms?.join(", ")}
        </span>
      </div>
      <Separator className="my-5" />
      <div className="text-sm">
        <span className="text-[#757575]">Source</span>{" "}
        <a href="" className="underline">
          {data[0]?.sourceUrls?.map((url: any) => (
            <span key={url}>{url}</span>
          ))}
        </a>
      </div>
    </>
  );
};

export default Result;
