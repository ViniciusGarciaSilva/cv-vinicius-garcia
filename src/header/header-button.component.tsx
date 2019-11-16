import * as React from 'react';
import './header-button.css';

interface HeaderButtonComponentProps {
  text: string;
  onClickButton: (number:any) => void;
}

class HeaderButtonComponent extends React.Component<HeaderButtonComponentProps,any> {
  constructor(props: any) {
    super(props);
  }

  public handlerOnButtonClick = () => {
    return
  }
  
  public render() {
    return (
      <button className='header-button' onClick={this.handlerOnButtonClick}>
        <p className='header-button__text'>
          {this.props.text}
        </p>
      </button>
    )
  }
} 

export default HeaderButtonComponent;