import * as React from 'react';
import './header.css';
import HeaderButtonComponent from './header-button.component';

interface HeaderComponentProps {
  onClickButton: (ref: any) => void;
}

class HeaderComponent extends React.Component<HeaderComponentProps, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className='header'>
        <HeaderButtonComponent text='Quem Sou Eu?' onClickButton={this.props.onClickButton}/>
        <HeaderButtonComponent text='Objetivo Geral' onClickButton={this.props.onClickButton}/>
        <HeaderButtonComponent text='Formação Acadêmica' onClickButton={this.props.onClickButton}/>
        <HeaderButtonComponent text='Experiência Profissional' onClickButton={this.props.onClickButton}/>
        <HeaderButtonComponent text='Contato' onClickButton={this.props.onClickButton}/>
      </div>
    )
  }
}

export default HeaderComponent;