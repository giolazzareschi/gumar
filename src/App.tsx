import React from 'react';
import 'animate.css/animate.css';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    console.log('mounted');
  }

  render() {
    return (
      <div className="App">
        <div className="infinite">
          <div className="stars"></div>
          <div className="stars-2"></div>
          <div className="twinkling"></div>          
        </div>
        <div className="animate__animated animate__fadeIn animate__delay-1s header-wrap">
          <h1 className="animate__animated animate__bounce animate__delay-4s">Gumar</h1>
        </div>
        <div className="animate__animated animate__fadeIn animate__delay-3s start-game-wrap">
          <button className="button-startg-game">Start Readgame</button>
        </div>
      </div>
    );
  }
}

export default App;
