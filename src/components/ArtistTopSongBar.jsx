import React from "react";
import { Link } from "react-router-dom";
import { useGetSongDetailsQuery } from "../redux/services/shazamCore";

import PlayPause from "./PlayPause";

const ArtistTopSongBar = ({
  song,
  songId,
  i,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => {
    const topSong = song.attributes;
  return (
    <div
      className={`w-full flex flex-row items-center hover:bg-[#191f24] ${
        activeSong?.name === topSong?.name ? "bg-[#191f247c]" : "bg-transparent"
      } py-2 p-4 rounded-lg cursor-pointer mb-2`}
    >
      <h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>
      <div className="flex-1 flex flex-row justify-between items-center">
        <img
          className="w-20 h-20 rounded-lg"
          src={
            topSong?.artwork?.url.replace("{w}", "125").replace("{h}", "125") ||
            "https://placehold.co/150x150"
          }
          alt={topSong?.name}
        />
        <div className="flex-1 flex flex-col justify-center mx-3">
          <p className="text-xl font-bold text-white">{topSong?.name}</p>
          <p className="text-base text-gray-300 mt-1">{topSong?.artistName}</p>
        </div>
      </div>
      <PlayPause
        isPlaying={isPlaying}
        activeSong={activeSong}
        song={topSong?.name}
        handlePause={handlePauseClick}
        handlePlay={() => handlePlayClick(song, i)}
      />
    </div>
  );
};
export default ArtistTopSongBar;
