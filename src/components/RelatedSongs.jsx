import SongBar from "./SongBar";

const RelatedSongs = ({
  data,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => {

  const relatedSongs = data.resources["shazam-songs"];
  const result = Object.keys(relatedSongs).map((key) => [
    Number(key),
    relatedSongs[key],
  ]);

  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-3xl text-white">Related Songs: </h1>

      <div className="mt-6 w-full flex flex-col">
        {result.map((song, i) => (
          <SongBar
            key={`${song[0]}-${song[i]}`}
            song={song[1].attributes}
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

export default RelatedSongs;
