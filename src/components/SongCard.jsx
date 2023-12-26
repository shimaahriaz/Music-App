import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, i, isPlaying, activeSong, data }) => {
  const dispatch = useDispatch();
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div
      className="flex flex-col lg:w-[200px] md:w-[160px] w-[250px] justify-center p-4 bg-white/5 bg-opacity-80
   backdrop-blur-sm animate-slideup"
    >
      <div className="relative group">
        <div
          className={`absolute inset-0 justify-center items-center
      bg-black bg-opacity-50 group-hover:flex 
      ${
        activeSong?.title === song.title
          ? 'flex bg-black bg-opacity-70'
          : 'hidden'
      }`}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        {song.key === '673104339' || song.key === '675031499' ? (
          <img src={song.hub?.image} alt="img_song" />
        ) : (
          <img src={song.images?.coverart} alt="img_song" />
        )}
      </div>
      <div className="flex flex-col mt-4">
        <p className="font-simbold text-lg text-white truncate">
          <Link to={`/songs/${song?.key}`}>{song.title}</Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">{song.subtitle}</p>
      </div>
    </div>
  );
};

export default SongCard;
