import React, { Component } from 'react';
import './App.css';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();




class App extends Component {


  constructor(){
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false,
      nowPlaying: { name: '', albumArt: '', listenNow: '', }
    }
  }
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
  }

  getPlaylist(uri){
    spotifyApi.getPlaylist(uri)
      .then((response) => {
        console.log(response);
        this.setState({
          nowPlaying: { 
              description: response.description,
              name: response.name, 
              albumArt: response.images[0].url,
              listenNow: response.external_urls.spotify,

            }
        });
      })
  }




ifStatement() {
let temp = document.getElementById('temp').innerHTML;
let tempInt = parseInt(temp, 10);

  setTimeout(function() { //Start the timer
    if ( tempInt >= 70 ) {
      this.getPlaylist('37i9dQZF1DWYzpSJHStHHx');

    } else if ( tempInt >= 50 && tempInt < 70 ) {
      this.getPlaylist('37i9dQZF1DX6ziVCJnEm59');

    } else if ( tempInt >= 30 && tempInt < 50 ) {
      this.getPlaylist('37i9dQZF1DWUNIrSzKgQbP');

    } else if ( tempInt < 30 ) {
      this.getPlaylist('37i9dQZF1DX4H7FFUM2osB');

    } else {
      console.log('error');
    }
 }.bind(this), 500)

}







// onClick={() => this.getAlbum()}





  render() {


    return (

      <div className="App">


        <a className="btn-primary" id="login" href='http://localhost:8888' > Login to Spotify </a>

        <div className="app-content hidden">

          <div className="image-wrapper hidden">
            <p className="description">{this.state.nowPlaying.description}</p>
            <img alt="" src={this.state.nowPlaying.albumArt} style={{ height: 250 }}/>
          </div>
          <p>{this.state.nowPlaying.name}</p>

          <a target="_blank" alt="" className="play-button hidden" href={this.state.nowPlaying.listenNow}>Play now <img alt="" className="play-button-image" src="img/play-button.png"/></a>


          { this.state.loggedIn &&

              <button className="btn-primary logged-in hidden tune-btn"  onClick={() => this.ifStatement()}>
                Let's set the mood
              </button>
            }

            </div>
      </div>
    );
  }


}

export default App;