import React, {Component} from 'react';
import store from '../store';
import Lyrics from '../components/Lyrics';
import {setLyrics, fetchLyrics} from '../action-creators/lyrics';

export default class LyricsContainer extends Component {

constructor(props) {

  super(props);

  this.state = Object.assign({
    artistQuery: '',
    songQuery: ''
  }, store.getState());

  this.setArtist = this.setArtist.bind(this);
  this.setSong = this.setSong.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

setArtist(artist) {
  this.setState({artistQuery: artist})
}

setSong(song) {
  this.setState({ songQuery: song });
}

handleSubmit(event) {
  event.preventDefault();
  if (this.state.artistQuery && this.state.songQuery){
    store.dispatch(fetchLyrics(this.state.artistQuery, this.state.songQuery))
  }
}

componentDidMount(){
  this.unsubscribe = store.subscribe( () => {
    this.setState(store.getState())
  })
}

componentWillUnmount(){
  this.unsubscribe();
}

render(){

  return (<Lyrics
    setArtist={this.setArtist}
    setSong={this.setSong}
    handleSubmit={this.handleSubmit}
    songQuery={this.state.songQuery}
    artistQuery={this.state.artistQuery}
    text={this.state.lyrics.lyric}
    />
  )
  }
}
