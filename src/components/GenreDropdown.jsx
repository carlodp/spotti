import { genres } from "../assets/constants";

const GenreDropdown = ({ genreName, genreListId, genreHandler }) => {
  const genreChangeHandler = (event) => {
    genreHandler(event);
  };

  return (
    <div className="w-full flex justify-between items-center sm:flex-row flex-col mb-10">
      <h2 className="font-bold text-3xl text-white text-left">
        Top Songs on {genreName}
      </h2>
      
      <select
        onChange={genreChangeHandler}
        value={genreListId}
        className="genre-select bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5 cursor-pointer lg:w-[200px]"
        name="genre"
      >
        {genres.map((genre) => (
          <option
            key={genre.value}
            value={genre.value}
            name={genre.title}
            onClick={genreChangeHandler}
            className="p-2"
          >
            {genre.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenreDropdown;
