import { Pause, Play } from "lucide-react";
import React, { useState, useEffect } from "react";

const useAudio = (url: string) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ url }: { url: string }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <button
        className="rounded-full h-[75px] w-[75px] bg-[#A445ED]/25 flex items-center justify-center hover:bg-[#A445ED] hover:[&>svg]:fill-white hover:[&>svg]:text-white hover:cursor-pointer"
        onClick={toggle}
      >
        {playing ? (
          <Pause className="fill-[#A445ED] text-[#A445ED]" />
        ) : (
          <Play className="fill-[#A445ED] text-[#A445ED]" />
        )}
      </button>
    </div>
  );
};

export default Player;
