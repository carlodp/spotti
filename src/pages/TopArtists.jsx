import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import PlayPause from "../components/PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetChartsQuery } from "../redux/services/shazamCore";

import "swiper/css";
import "swiper/css/free-mode";

const TopArtistCard = ({
  song,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
  i,
  type,
}) => {
  let filterQuery;
  if (type === "search") {
    filterQuery = activeSong?.key === song?.key;
  } else {
    filterQuery = activeSong?.title === song?.title;
  }

  return (
    <>
      <div className="flex flex-col lg:w-[calc(25%-25px)] md:w-[calc(33.33333%-25px)] sm:w-[calc(50%-25px)] w-fit p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
        <div className="relative w-full group">
          <Link to={`/artists/${song?.artists[0].adamid}`}>
        <img
          src={song?.images.background}
          alt="name"
          className="rounded-lg w-full object-cover"
        />
      </Link>
        </div>
        <div className="flex flex-col items-center text-center my-5">
          <Link to={`/artists/${song.artists[0].adamid}`}>
            <p className="font-bold text-2xl text-gray-300 mt-1">{song?.subtitle}</p>
          </Link>
        </div>
      </div>
    </>
  );
};

const TopArtists = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying, genreListId } = useSelector(
    (state) => state.player
  );
  const { data } = useGetChartsQuery(genreListId);
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  const topPlays = data?.tracks;

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div
      ref={divRef}
      className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 max-w-full flex flex-col"
    >
      <div className="w-full flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-5xl mb-5">Top Artists</h2>
        </div>

        <div className="mt-4 flex flex-row flex-wrap gap-5">
          {topPlays?.map((song, i) => (
            <TopArtistCard
              key={song.key}
              song={song}
              i={i}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={() => handlePlayClick(song, i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopArtists;
