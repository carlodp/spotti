import { Link } from "react-router-dom";

const ArtistDetailsHeader = ({ artistId, artistData }) => {
  const artist = artistData.data[0].attributes;

  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-[#191f24] sm:h-48 h-28" />
      <div className="absolute inset-0 flex items-center">
        <img
          className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
          alt="art"
          src={artist?.artwork?.url.replace("{w}", "500").replace("{h}", "500")}
        />

        <div className="ml-5">
          <p className="font-bold sm:text-3xl text-xl text-white">
            {artist?.name}
          </p>
          <p className="text-base text-gray-400 mt-2">
            {artistId ? artist?.genreNames[0] : songData?.genres.primary}
          </p>
        </div>
      </div>
      <div className="w-full sm:h-44 h-24" />
    </div>
  );
};

export default ArtistDetailsHeader;
