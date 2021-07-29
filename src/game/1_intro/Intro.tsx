import React from 'react';
import Page from '../../components/Page';
import './Intro.css';

interface IProps {
  show?: boolean;
};

interface IState {
  paragraphs: string[];
};

class Intro extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      paragraphs: [],
    };
  }

  componentDidMount() {
    const paragraphs = this.getParagraphs();
    this.setState({ paragraphs });
  }

  getParagraphs() : string[] {
    return [
      "Gumar é um jogo-livro ou <i>read-game</i>. O objetivo é ler o livro, aproveitar a história e jogar. Conforme você ler o livro será necessário jogar o jogo para poder habilitar as novas páginas e capítulos.",
      "O livro está sendo escrito atualmente e não tem data para acabar. Enquanto existir a possibilidade de criar o proximo capítulo, Gumar continuará sendo escrito.",
    ];
  }

  callNextScreen() : void {
    console.log('dd');
  }

  render() {
    const PageData = {
      title: 'Bem-vindo',
      paragraphs: this.getParagraphs(),
      nextButton: {
        title: 'Prosseguir',
        onClick: this.callNextScreen.bind(this),
      },
    };

    return (
      <div className={`Intro animate__animated ${this.props.show && 'animate__fadeIn'}`}>
        <Page data={PageData} />
      </div>
    );
  }
}

export default Intro;