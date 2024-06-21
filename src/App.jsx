/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import SideBar from './components/SideBar/SideBar';
import Player from './components/Player/Player';
import Display from './components/Display/Display';
import { PlayerContext } from './context/PlayerContext';
// import Featured from './components/Featured/Featured';

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);

  useEffect(() => {
    if (audioRef.current && track && track.file) {
      audioRef.current.src = track.file; // Ensure the src attribute is set correctly
    }
  }, [track, audioRef]);

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <SideBar />
        <Display />
      </div>
      <div>
        <Player />
        {track && track.file && (
          <audio ref={audioRef} src={track.file} preload='auto'></audio>
        )}
      </div>
    </div>
  );
}

export default App;
