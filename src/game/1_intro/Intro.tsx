import React from 'react';
import Page from '../../components/Page';
import './Intro.css';

interface IProps {};

interface IState {
  paragraphs: string[];
  showIntro: boolean;
  fadeOutIntro: boolean;
};

class Intro extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      paragraphs: [],
      showIntro: true,
      fadeOutIntro: false,
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
      "Ao apertar o botão abaixo se dará iniício a leitura-jogo.",
      "Aproveite.",
    ];
  }

  getPreface() : string[] {
    return [
      "A luz da lua fazia tanta luz naquela noite que e podia ver as sombras das árvores pela janela. O clima era ameno e o ar cheirava algo suave e calmo.",
    ];
  }

  callNextPage() : void {
    this.setState({
      fadeOutIntro: true,
    });

    window.setTimeout(() => {
      this.setState({
        showIntro: false,
      });
    }, 500);
  }

  render() {
    const IntroData = {
      fadeIn: this.state.showIntro,
      fadeOut: this.state.fadeOutIntro,
      title: 'Bem-vindo',
      paragraphs: this.getParagraphs(),
      nextButton: {
        title: 'Iniciar',
        onClick: this.callNextPage.bind(this),
      },
    };
    
    const PrefaceData = {
      fadeIn: !this.state.showIntro,
      fadeOut: this.state.showIntro,
      title: 'Prefácio',
      paragraphs: this.getPreface(),
      nextButton: {
        title: 'Iniciar',
        onClick: this.callNextPage.bind(this),
      },
    };

    return (
      <div className="Intro">
        {
          (this.state.showIntro && <Page data={IntroData} />)
          ||
          (<Page data={PrefaceData} />)
        }
      </div>
    );
  }
}

export default Intro;