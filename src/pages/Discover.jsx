import { useDispatch, useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import { useGetChartsQuery } from "../redux/services/shazamCore";
import { useState } from "react";
import { selectGenreListId } from "../redux/features/playerSlice";
import GenreDropdown from "../components/GenreDropdown";


const Discover = () => {
  const dispatch = useDispatch();
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
      {/* <Loader title="Loading songs..." />; */}
      <GenreDropdown genreName={genreName} genreListId={genreListId} genreHandler={genreHandler} />
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data.tracks?.map((song, i) => (
          <SongCard key={song.key} song={song} i={i} data={data} isPlaying={isPlaying} activeSong={activeSong} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
