import React from "react";

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="flex-1 flex items-center justify-start">
    <div
      className={`${
        isPlaying && isActive ? "animate-[spin_3s_linear_infinite]" : ""
      } hidden sm:block h-16 w-16 mr-4`}
    >
      <img
        src={activeSong?.images?.coverart || activeSong?.images?.coverArt || activeSong?.attributes?.artwork?.url.replace("{w}", "125").replace("{h}", "125") || "https://placehold.co/250x250?text=No+Cover+Image" }
        alt="cover art"
        className="rounded-full"
      />
    </div>
    <div className="w-[50%]">
      <p className="truncate text-white font-bold text-lg">
        {activeSong?.title || activeSong?.attributes?.name || "No active Song"}
      </p>
      <p className="truncate text-gray-300">
        {activeSong?.subtitle
          ? activeSong?.subtitle
          : activeSong?.primaryArtist
          ? activeSong?.primaryArtist
          : activeSong?.attributes.artistName
          ? activeSong?.attributes.artistName
          : "No active Song"}
      </p>
    </div>
  </div>
);

export default Track;
