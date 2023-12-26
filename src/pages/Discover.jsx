/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector } from 'react-redux';
import { Loader, Error, SongCard } from '../components';
import { useGetTopChartsQuery } from '../redux/Servicess/ShazamCore';

const Discover = () => {
  // eslint-disable-next-line no-unused-vars
  const dispathch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  // eslint-disable-next-line no-unused-vars
  const { data, isFetching, isError } = useGetTopChartsQuery();

  if (isFetching) return <Loader title="Looder Songs..." />;
  if (isError) return <Error />;
  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          Discover Pop
        </h2>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data.tracks?.map((song, i) => (
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
    </div>
  );
};

export default Discover;
