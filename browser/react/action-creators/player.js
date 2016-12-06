import {START_PLAYING,
        STOP_PLAYING,
        SET_CURRENT_SONG,
        SET_LIST,
        SET_PROGRESS} from '../constants';
import axios from 'axios';
import AUDIO from '../audio';


export const play = function() {
  AUDIO.play()
  return {
    type: START_PLAYING
    }
};

export const pause = function() {
  AUDIO.pause()
  return {
    type: STOP_PLAYING,
  }
};

export const load = (currentSong, currentSongList) => dispatch => {
  AUDIO.src = currentSong.audioUrl;
  AUDIO.load();
  dispatch(setCurrentSongList(currentSongList));
  dispatch(setCurrentSong(currentSong));
};
