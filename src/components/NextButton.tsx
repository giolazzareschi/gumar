import React from 'react';
import './NextButton.css';

interface IProps {
  text: string;
  onClick: Function;
}

interface IState {}

class NextButton extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <button className="NextButton" onClick={this.props.onClick.bind(this)}>
        <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
          <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
        </svg>
        <span>{this.props.text}</span>
      </button>
    );
  }
}

export default NextButton;