import React from 'react';
import './Paragraph.css';

interface IProps {
  text: string;
}

interface IState {}

class Paragraph extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <p className="Paragraph" dangerouslySetInnerHTML={{ __html: this.props.text }}></p>
    );
  }
}

export default Paragraph;