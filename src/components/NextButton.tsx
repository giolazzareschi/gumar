import React from 'react';
import './Paragraph.css';

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
      <button onClick={this.props.onClick.bind(this)}>{this.props.text}</button>
    );
  }
}

export default NextButton;