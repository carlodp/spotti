import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { ArtistCard, Error, Loader, SongCard } from '../components';
import { useGetSongsBySearchQuery } from '../redux/services/shazamCore';

const Search = () => {
  const { searchTerm } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm);

  const songs = data?.tracks?.hits.map((song) => song.track);
  const artists = data?.artists?.hits.map((artist) => artist.artist);

  if (isFetching) return <Loader title={`Searching ${searchTerm}...`} />;
  if (error) return <Error />;

  console.log(artists);

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10 capitalize">Showing results for <span className="font-black">{searchTerm}</span></h2>

      <h3 className='font-bold text-2xl text-white text-left mt-4 mb-5'>Artists:</h3>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        
        {artists.map((artist, i) => (
          <ArtistCard key={artist+i} artist={artist}/>
        ))}
      </div>
      
      <h3 className='font-bold text-2xl text-white text-left mt-4 mb-5'>Songs:</h3>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songs.map((song, i) => (
          <SongCard
            type="search"
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;