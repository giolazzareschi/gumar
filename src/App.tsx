import React, { MouseEvent } from 'react';
import 'animate.css/animate.css';
import './App.css';
import Intro from './game/1_intro/Intro';

interface IProps {};

interface IState {
  fadeOut: boolean;
  showIntro: boolean;
};

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      fadeOut: false,
      showIntro: false,
    };
  }

  fadeOut(event: MouseEvent<HTMLButtonElement>) : void {
    event.preventDefault();

    this.setState({
      fadeOut: true,
    });

    window.setTimeout(() : void => this.callNextScreen(), 1000);
  }

  callNextScreen() : void {
    this.setState({
      showIntro: true,
    });
  }

  render() {
    return (
      <div className="App">
        <div className='infinite'>
          <div className="stars"></div>
          <div className="stars-2"></div>
          <div className="twinkling"></div>          
        </div>
        <ul>
        </ul>
        {
          (!this.state.showIntro &&
          <div className={`animate__animated ${this.state.fadeOut && 'animate__fadeOut'} action-wrap`}>
            <div className="animate__animated animate__fadeIn animate__delay-1s header-wrap">
              <h1 className="animate__animated animate__bounce animate__delay-2s">Gumar</h1>
            </div>
            <div className="animate__animated animate__fadeIn animate__delay-2s start-game-wrap">
              <button className="button-startg-game" onClick={this.fadeOut.bind(this)}>Start Readgame</button>
            </div>
          </div>)
          ||
          (<Intro show={this.state.showIntro} />)
        }
        <div className="lower-background"></div>
      </div>
    );
  }
}

export default App;
