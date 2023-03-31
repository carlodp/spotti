import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay, type }) => {
  
  let activeSongName;
  if(activeSong?.title) {
    activeSongName = activeSong?.title;
  } else {
    activeSongName = activeSong?.attributes?.name;
  }

  console.log('activeSong');
  console.log(activeSong);
  console.log('song');
  console.log(song);

  return (
    <>
    {
      type === 'search' ? (
        isPlaying && activeSong.key === song.key ? (
          <FaPauseCircle size={35} className="text-gray-300" onClick={handlePause} />
        ) : (
          <FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay} />
        )
      ) : (
        isPlaying && activeSongName === song?.title || isPlaying && activeSongName === song ? (
          <FaPauseCircle size={35} className="text-gray-300" onClick={handlePause} />
        ) : (
          <FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay} />
        )
      )
    }
    {/* {
      isPlaying && activeSongName === song?.title || isPlaying && activeSongName === song ? (
        <FaPauseCircle size={35} className="text-gray-300" onClick={handlePause} />
      ) : (
        <FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay} />
      )
    } */}
    </>
  );
}

export default PlayPause;
