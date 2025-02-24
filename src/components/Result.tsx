import { Play } from "lucide-react";
import { Separator } from "./ui/separator";
import Sad from "@/assets/sad.png";

const Result = ({ data }: any) => {
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
          <h1 className="text-[64px] font-bold">keyboard</h1>
          <p className="mt-2 text-[#A445ED]">/ˈkiːbɔːd/</p>
        </div>
        <button className="rounded-full h-[75px] w-[75px] bg-[#A445ED]/25 flex items-center justify-center hover:bg-[#A445ED] hover:[&>svg]:fill-white hover:[&>svg]:text-white hover:cursor-pointer">
          <Play className="fill-[#A445ED] text-[#A445ED]" />
        </button>
      </div>
      <div>
        <div>
          <p className="text-[#2d2d2d] font-bold italic my-10 text-2xl">noun</p>
        </div>
        <p className="text-[#757575]">Meaning</p>
        <ul className="list-disc list-inside flex flex-col gap-3 mt-[1.5625rem] mx-[1.375rem]">
          <li>
            (etc.) A set of keys used to operate a typewriter, computer etc.
          </li>
          <li>
            A component of many instruments including the piano, organ, and
            harpsichord consisting of usually black and white keys that cause
            different tones to be produced when struck.
          </li>
          <li>
            A device with keys of a musical keyboard, used to control electronic
            sound-producing devices which may be built into or separate from the
            keyboard device.
          </li>
        </ul>
        <div className="mt-10">
          Synonyms{" "}
          <span className="text-[#A445ED] font-bold">electronic keyboard</span>
        </div>
      </div>
      <div>
        <p className="text-[#2d2d2d] font-bold italic my-10 text-2xl">verb</p>
      </div>
      <p className="text-[#757575]">Meaning</p>
      <ul className="list-disc list-inside flex flex-col gap-3 mt-[1.5625rem] mx-[1.375rem]">
        <li>
          To type on a computer keyboard.
          <p className="ml-5 text-[#757575]">
            “Keyboarding is the part of this job I hate the most.”
          </p>
        </li>
      </ul>
      <Separator className="my-5" />
      <div className="text-sm">
        <span className="text-[#757575]">Source</span>{" "}
        <a href="" className="underline">
          https://en.wiktionary.org/wiki/keyboard
        </a>
      </div>
    </>
  );
};

export default Result;
