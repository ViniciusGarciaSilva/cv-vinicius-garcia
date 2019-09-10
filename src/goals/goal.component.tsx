import * as React from 'react';
import './goal.css';

interface GoalComponentProps {
  title: string;
  description: string;
  img: any;
}

export default class GoalComponent extends React.Component<GoalComponentProps, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className='goal'>
        <div className='goal__circle'>
          <div className='goal__circle__title'>
            <p className='goal__circle__title__text'>
              {this.props.title}
            </p>
          </div>
          <img className='goal__circle__img' src={this.props.img}/>
        </div>
        <p className='goal__text'>
          {this.props.description}
        </p>
      </div>
    )
  }
} 