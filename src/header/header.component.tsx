import * as React from 'react';
import './header.css';
import HeaderButtonComponent from './header-button.component';

// interface HeaderComponentProps {

// }

class HeaderComponent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className='header'>
        <HeaderButtonComponent text='Home' />
        <HeaderButtonComponent text='Quem Sou Eu?' />
        <HeaderButtonComponent text='Objetivo Geral' />
        <HeaderButtonComponent text='Formação Acadêmica' />
        <HeaderButtonComponent text='Experiência Profissional' />
        <HeaderButtonComponent text='Contato' />
      </div>
    )
  }
}

export default HeaderComponent;