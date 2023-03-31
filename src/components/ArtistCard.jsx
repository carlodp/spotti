import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ArtistCard = ({ artist }) => {
  const navigate = useNavigate();

  console.log(artist);

  return (
    <Link to={`/artists/${artist?.adamid}`}>
      <div
        className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <img
          alt="artist_img"
          src={artist?.avatar || "https://placehold.co/250x250?text=No+Artist+Image"}
          className="w-full h-56 rounded-lg"
        />
        <p className="mt-4 font-semibold text-lg text-white truncate">
          {artist?.name}
        </p>
      </div>
    </Link>
  );
};

export default ArtistCard;
