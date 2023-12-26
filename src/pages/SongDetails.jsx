import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader } from '../components';

import { setActiveSong, playPause } from '../redux/features/playerSlice';
import { useGetTopChartsQuery } from '../redux/Servicess/ShazamCore';

const SongDetails = () => {
  const dispatch = useDispatch();
  const idParams = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: topChartsData, isFetching, isError } = useGetTopChartsQuery();

  if (isFetching) return <Loader title="Looder Songs..." />;
  if (isError) return <Error />;

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, topChartsData, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col">
      {topChartsData?.tracks?.map((song) => (
        <DetailsHeader
          key={song.key}
          song={song}
          idParams={idParams}
          isFetching={isFetching}
          activeSong={activeSong}
          isPlaying={isPlaying}
          topChartsData={topChartsData}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
        />
      ))}
    </div>
  );
};
export default SongDetails;
