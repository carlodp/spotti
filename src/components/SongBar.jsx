import React from "react";
import { Link } from "react-router-dom";
import { useGetSongDetailsQuery } from "../redux/services/shazamCore";

import PlayPause from "./PlayPause";

const SongBar = ({
  song,
  songId,
  i,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => {
  return (
    <div
      className={`w-full flex flex-row items-center hover:bg-[#191f24] ${
        activeSong?.isrc === song?.isrc ? "bg-[#191f247c]" : "bg-transparent"
      } py-2 p-4 rounded-lg cursor-pointer mb-2`}
    >
      <h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>
      <div className="flex-1 flex flex-row justify-between items-center">
        <img
          className="w-20 h-20 rounded-lg"
          src={"https://placehold.co/250x250?text=No+Cover+Image" }
          alt={song?.title}
        />
        <div className="flex-1 flex flex-col justify-center mx-3">
          <Link to={`/songs/${songId}`}>
            <p className="text-xl font-bold text-white">{song?.title}</p>
          </Link>
          <p className="text-base text-gray-300 mt-1">{song?.artist}</p>
        </div>
      </div>
      <PlayPause
        isPlaying={isPlaying}
        activeSong={activeSong}
        song={song}
        handlePause={handlePauseClick}
        handlePlay={() => handlePlayClick(song, i)}
      />
    </div>
  );
};
export default SongBar;
