import {START_PLAYING,
        STOP_PLAYING,
        SET_CURRENT_SONG,
        SET_LIST,
        SET_PROGRESS} from '../constants';
import axios from 'axios';
import AUDIO from '../audio';


const startPlaying = () => ({ type: START_PLAYING });

const stopPlaying = () => ({ type: STOP_PLAYING });

const setCurrentSong = (currentSong) => ({
  type: SET_CURRENT_SONG,
  currentSong
});

const setCurrentSongList = (currentSongList) => ({
  type: SET_LIST,
  currentSongList
});

export const play = () => dispatch => {
  AUDIO.play()
  dispatch(startPlaying())
};

export const pause = () => dispatch => {
  AUDIO.pause()
  dispatch(stopPlaying())
};


export const load = (currentSong, currentSongList) => dispatch => {
  AUDIO.src = currentSong.audioUrl;
  AUDIO.load();
  dispatch(setCurrentSongList(currentSongList));
  dispatch(setCurrentSong(currentSong));
};
