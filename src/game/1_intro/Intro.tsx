import React from 'react';

interface IProps {
  show?: boolean;
};

interface IState {};

const styles: React.CSSProperties = {
  color: 'white',
}

class Intro extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className={`Intro animate__animated ${this.props.show && 'animate__fadeIn'}`}>
        <span style={styles}>DSADASA</span>
      </div>
    );
  }
}

export default Intro;