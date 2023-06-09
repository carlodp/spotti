import { Link } from "react-router-dom";

const DetailsHeader = ({ artistId, artistData, songData }) => {
  const artist = artistData?.data[0]?.attributes;

  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-[#191f24] sm:h-48 h-28 rounded-lg" />
      <div className="absolute inset-0 flex items-center">
        <img
          className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
          alt="art"
          src={
            artistId
              ? artist.artwork?.url.replace("{w}", "500").replace("{h}", "500")
              : songData?.images?.coverart ||
                "https://placehold.co/250x250?text=No+Song+Image"
          }
        />

        <div className="ml-5">
          <p className="font-bold sm:text-3xl text-xl text-white">
            {artistId ? artist?.name : songData?.title}
          </p>
          {!artistId && (
            <Link
              to={
                songData.artists
                  ? `/artists/${songData?.artists[0]?.adamid}`
                  : "/top-artists"
              }
            >
              <p className="text-xl text-white mt-2">{songData?.subtitle}</p>
            </Link>
          )}
          <p className="text-base text-gray-300 mt-2">
            {artistId ? artist?.genreNames[0] : songData?.genres?.primary}
          </p>
        </div>
      </div>
      <div className="w-full sm:h-44 h-24" />
    </div>
  );
};

export default DetailsHeader;
