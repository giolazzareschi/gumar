import React from 'react';
import Title from './Title';
import Paragraph from './Paragraph';
import NextButton from './NextButton';
import './Page.css';

interface NextButtonData {
  title: string;
  show?: boolean;
  onClick: Function;
}

interface PageData {
  title: string;
  paragraphs: string[];
  nextButton: NextButtonData;
}

interface IProps {
  data: PageData;
}

interface IState {}

class Page extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {};
  }

  render() {
    const paragraphs = this.props.data.paragraphs.map((paragraph: string, index: number) => {
      return <Paragraph key={index} text={paragraph} />;
    });

    return (
      <div className="Page">
        <div className="page-head">
          <Title text={this.props.data.title} />
        </div>
        <div className="page-body">
          {paragraphs}
        </div>
        <div className="page-actions">
          <NextButton
            text={this.props.data.nextButton.title}
            onClick={this.props.data.nextButton.onClick}
          />
        </div>
      </div>
    );
  }
}

export default Page;