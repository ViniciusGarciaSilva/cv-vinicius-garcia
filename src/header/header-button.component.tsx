import * as React from 'react';
import './header-button.css';

interface HeaderButtonComponentProps {
  text: string;
}

class HeaderButtonComponent extends React.Component<HeaderButtonComponentProps,any> {
  constructor(props: any) {
    super(props);
  }
  
  public render() {
    return (
      <div className='header-button'>
        <p>
          {this.props.text}
        </p>
      </div>
    )
  }
} 

export default HeaderButtonComponent;