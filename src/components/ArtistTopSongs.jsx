import ArtistTopSongBar from "./ArtistTopSongBar";

const ArtistTopSongs = ({
  data,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => {

  const topSongs = data?.data;

  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-3xl text-white">Top Songs: </h1>

      <div className="mt-6 w-full flex flex-col bg-[#191f247c] rounded-lg p-2 py-3">
        {topSongs?.map((song, i) => (
          <ArtistTopSongBar
            key={`${song.id}-${i}`}
            song={song}
            songId={song[0]}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
          />
        ))}

      </div>
    </div>
  );
};

export default ArtistTopSongs;
