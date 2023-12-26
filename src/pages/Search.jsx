import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Error, Loader, SongCard, Searchbar } from '../components';
import { useGetTopChartsQuery } from '../redux/Servicess/ShazamCore';

const Search = () => {
  const { searchTerm } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartsQuery();
  const [filteredTracks, setFilteredTracks] = useState([]);
  // Filter tracks based on the search term
  const filterTracks = (searchTermParams) => {
    if (!searchTermParams || !data?.tracks) {
      setFilteredTracks(data?.tracks || []);
    } else {
      const filtered = data.tracks.filter((song) => (
        song?.title.toLowerCase().includes(searchTerm.toLowerCase())
      ));
      setFilteredTracks(filtered);
    }
  };

  React.useEffect(() => {
    filterTracks(searchTerm);
  }, [searchTerm, data]);

  if (isFetching) return <Loader title={`Searching ${searchTerm}...`} />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Showing results for <span className="font-black">{searchTerm}</span>
      </h2>

      <Searchbar onSearch={filterTracks} />

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {filteredTracks.length > 0
          ? filteredTracks.map((song, i) => (
            <SongCard
              key={song.key}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={data}
              i={i}
            />
          ))
          : ( // Render all tracks if no match
            data?.tracks.map((song, i) => (
              <SongCard
                key={song.key}
                song={song}
                isPlaying={isPlaying}
                activeSong={activeSong}
                data={data}
                i={i}
              />
            )))}
      </div>
    </div>
  );
};

export default Search;
