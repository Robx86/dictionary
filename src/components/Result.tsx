import { Separator } from "./ui/separator";
import Sad from "@/assets/sad.png";
import { DefinitionType, MeaningType, TermType } from "@/lib/definition.types";
import Player from "./Player";

type ResultProps = {
  data: TermType;
  isLoading: boolean;
  error: Error | null;
  searchedTerm: string;
};

const Result = ({ data, isLoading, error, searchedTerm }: ResultProps) => {
  if (!searchedTerm) {
    return <p className="text-red-500">Whoops, can’t be empty…</p>;
  }

  if (isLoading) {
    return <div className="text-center mt-32">Loading...</div>;
  }

  if (error?.message.includes("404")) {
    return (
      <div className="text-center mt-32">
        <p className="font-bold text-lg">
          <img src={Sad} alt="Sad face" className="w-[64px] h-[64px] mx-auto" />
        </p>
        <p className="font-bold text-lg mt-11">Word Not Found</p>
        <p className="mt-6 text-md">
          Sorry, we couldn't find the word you were looking for. Please try again.
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-32">
        <p className="font-bold text-lg">
          <img src={Sad} alt="Sad face" className="w-[64px] h-[64px] mx-auto" />
        </p>
        <p className="font-bold text-lg mt-11">An Error Occurred</p>
        <p className="mt-6 text-md">Sorry</p>
      </div>
    );
  }

  if (data && Array.isArray(data) && data.length > 0) {
    return (
      <>
        <div className="mt-[45px] flex items-center justify-between">
          <div className="">
            <h1 className="text-[64px] font-bold">{data[0]?.word}</h1>
            <p className="mt-2 text-[#A445ED]">{data[0]?.phonetics[0]?.text}</p>
          </div>
          {data[0]?.phonetics[0]?.audio && (
            <Player url={data[0]?.phonetics[0]?.audio} />
          )}
        </div>
        <div>
          {data[0]?.meanings?.map((item: MeaningType, index: number) => (
            <div key={index}>
              <p className="text-[#2d2d2d] font-bold italic my-10 text-2xl dark:text-white">
                {item.partOfSpeech}
              </p>
              {item.definitions?.length > 0 && (
                <>
                  <span className="text-gray-500">Meaning</span>
                  <ul className="list-disc list-inside flex flex-col gap-3 mt-[1.5625rem] mx-[1.375rem]">
                    {item.definitions.map(
                      (definition: DefinitionType, index: number) => (
                        <>
                          <li key={index}>{definition.definition}</li>
                          {definition.example && (
                            <p className="ml-5 text-gray-600">
                              "{definition.example}"
                            </p>
                          )}
                        </>
                      )
                    )}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
        {data[0]?.meanings[0]?.synonyms.length > 0 && (
          <div className="mt-10">
            <>
              <span className="text-gray-500 mr-2">Synonyms</span>
              <span className="text-[#A445ED] font-bold">
                {data[0]?.meanings[0]?.synonyms?.join(", ")}
              </span>
            </>
          </div>
        )}
        <Separator className="my-5" />
        <div className="text-sm">
          <span className="text-[#757575]">Source</span>{" "}
          <a href="" className="underline">
            {data[0]?.sourceUrls?.map((url: string) => (
              <span key={url}>{url}</span>
            ))}
          </a>
        </div>
      </>
    );
  }
};

export default Result;
