import React from 'react';
import Title from '../../components/Title';
import './Intro.css';

interface IProps {
  show?: boolean;
};

interface IState {};

class Intro extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className={`Intro animate__animated ${this.props.show && 'animate__fadeIn'}`}>
        <Title text="Intro" />
        <p>
          Gumar é um jogo-livro ou <i>read-game</i>. O objetivo é ler o livro, aproveitar a história
          e jogar. Conforme você ler o livro será necessário jogar o jogo para poder habilitar as novas
          páginas e capítulos.
        </p>
        <p>
          O livro está sendo escrito atualmente e não tem data para acabar. Enquanto existir a possibilidade
          de criar o proximo capítulo, Gumar continuará sendo escrito.
        </p>
      </div>
    );
  }
}

export default Intro;