import React, { Component } from 'react';
import Player from './components/player/Player'

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      urlToPlay: ''
    };
  }

  startClipFour = () => {
    this.setState({
      urlToPlay: 'https://harshitsww.s3.eu-west-3.amazonaws.com/videoplayback.mp4'
    });
  }
  startClipThree = () => {
    this.setState({
      urlToPlay: 'https://storage.googleapis.com/shaka-live-assets/player-source.m3u8'
    });
  }

  startClipTwo = () => {
    this.setState({
      urlToPlay: 'https://harshitsww.s3.eu-west-3.amazonaws.com/file_example_MP4_1920_18MG.mp4'
    });
  }

  startClipOne = () => {
    this.setState({
      urlToPlay: '//storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd'
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to react-shaka-player test</h2>
        </div>
        <p className="App-intro">
          Click buttons below to pass new props to the player!
        </p>

        <button onClick={this.startClipOne}>mpd Format</button>
        <button onClick={this.startClipTwo}>17mb MP4 Video</button>
        <button onClick={this.startClipThree}>HLS m3u8 Format</button>
        <button onClick={this.startClipFour}>256mb MP4 Video</button>
        <Player url={this.state.urlToPlay} />
      </div>
    );
  }
}

export default App;
