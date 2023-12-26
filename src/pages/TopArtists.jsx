import React from 'react';
import { useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { useGetTopChartsQuery } from '../redux/Servicess/ShazamCore';

const TopArtists = () => {
  const { activeSong, isPlaying, isFetching, isError } = useSelector((state) => state.player);

  // eslint-disable-next-line no-unused-vars
  const { data } = useGetTopChartsQuery();
  if (isFetching) return <Loader title="Looder Songs..." />;
  if (isError) return <Error />;
  return (
    <>
      <h2 className="font-bold text-3xl text-white text-left mb-4">
        TopArtists
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.tracks?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
          />
        ))}
      </div>
    </>
  );
};
export default TopArtists;
