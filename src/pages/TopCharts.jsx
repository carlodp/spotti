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

const TopChartCard = ({
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
          <div
            className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
              filterQuery ? "flex bg-black bg-opacity-70" : "hidden"
            }`}
          >
            <PlayPause
              isPlaying={isPlaying}
              activeSong={activeSong}
              song={song}
              handlePause={handlePauseClick}
              handlePlay={handlePlayClick}
            />
          </div>
          <img src={song?.images?.coverart} alt={song?.title} />
        </div>
        <div className="mt-4 flex flex-col">
          <Link to={`/songs/${song?.key}`}>
            <p className="text-xl font-bold text-white">{song?.title}</p>
          </Link>
          <Link to={`/artists/${song?.artists[0]?.adamid}`}>
            <p className="text-base text-gray-300 mt-1">{song?.subtitle}</p>
          </Link>
        </div>
      </div>
    </>
  );
};

const TopCharts = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying, genreListId } = useSelector(
    (state) => state.player
  );
  const { data } = useGetChartsQuery(genreListId);

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
      className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 max-w-full flex flex-col"
    >
      <div className="w-full flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-5xl mb-5">Top Charts</h2>
        </div>

        <div className="mt-4 flex flex-row flex-wrap gap-5">
          {topPlays?.map((song, i) => (
            <TopChartCard
              key={song?.key}
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

export default TopCharts;
