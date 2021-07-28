import React from "react";
import './Title.css';

interface IProps {
  text: string;
}

interface IState {}

class Title extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <h1 className="Title">{this.props.text}</h1>
    );
  }
}

export default Title;