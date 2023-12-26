import React from 'react';
// eslint-disable-next-line import/no-cycle, import/no-useless-path-segments
import { RelatedSongs } from '../components';

const DetailsHeader = ({
  song,
  idParams,
  isFetching,
  activeSong,
  isPlaying,
  topChartsData,
  handlePauseClick,
  handlePlayClick,
}) => {
  const { key } = idParams;

  if (key === song?.key) {
    return (
      <>
        <div className=" relative w-full  bg-gradient-to-l from-transparent to-black h-28">
          <div className="absolute w-[130px] top-5 ">
            {song.key === '673104339' || song.key === '675031499' ? (
              <img
                src={song.hub?.image}
                alt="img_song"
                className="w-full rounded-full object-cover border-2 shadow-xl shadow-black"
              />
            ) : (
              <img
                src={song.images?.coverart}
                alt="img_song"
                className="w-full rounded-full object-cover border-2 shadow-xl shadow-black"
              />
            )}
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-white text-xl font-bold">{song?.title}</h2>
          <h3 className="text-white text-xl font-bold">{song?.subtitle}</h3>
          <p className="text-gray-400 text-base my-1">
            Lyrics Snippet: In a world that changes with every moment, We dream
            of aspirations soaring far. Life is an adventure, Lets travel to
            unknown realms.
          </p>
        </div>
        <RelatedSongs
          isFetching={isFetching}
          activeSong={activeSong}
          isPlaying={isPlaying}
          topChartsData={topChartsData}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
        />
      </>
    );
  }

  return null;
};

export default DetailsHeader;
