import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) => {
  
  let activeSongName;
  if(activeSong?.title) {
    activeSongName = activeSong?.title;
  } else {
    activeSongName = activeSong?.attributes?.name;
  }

  console.log(activeSongName, song);

  return (
    <>
    {
      isPlaying && activeSongName === song?.title || isPlaying && activeSongName === song ? (
        <FaPauseCircle size={35} className="text-gray-300" onClick={handlePause} />
      ) : (
        <FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay} />
      )
    }
    </>
  );
}

export default PlayPause;
