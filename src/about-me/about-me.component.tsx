import * as React from 'react';
import './about-me.css';

interface AboutMeComponentProps {
  text: string;
  img: any;
}

export default class AboutMeComponent extends React.Component<AboutMeComponentProps,any> {
  constructor(props: any) {
    super(props);
  }
  
  public render() {
    return (
      <div className='about-me'>
        <p className='about-me__title'>
          Quem sou eu?
        </p>
        <img src={this.props.img}/>
        <p className='about-me__info__text'>
            {this.props.text}
        </p>
      </div>
    )
  }
} 