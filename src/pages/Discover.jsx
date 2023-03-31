import { useDispatch, useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import { useGetChartsQuery } from "../redux/services/shazamCore";
import { useState } from "react";
import { selectGenreListId } from "../redux/features/playerSlice";


const Discover = () => {
  const dispatch = useDispatch();
  const [genre, setGenre] = useState('');
  const [genreName, setGenreName] = useState('Global');
  const { activeSong, isPlaying, genreListId } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetChartsQuery(genreListId);

  if (isFetching) return <Loader title="Loading songs..." />;
  if (error) return <Error />;

  const genreHandler = (event) => {
    const index = event.nativeEvent.target.selectedIndex;
    setGenreName(event.nativeEvent.target[index].text);

    dispatch(selectGenreListId(event.target.value));
  }

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          {genreName}
        </h2>
        <select
          onChange={genreHandler}
          value={genreListId}
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
          name="genre"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value} name={genre.title} onClick={genreHandler}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data.tracks?.map((song, i) => (
          <SongCard key={song.key} song={song} i={i} data={data} isPlaying={isPlaying} activeSong={activeSong} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
