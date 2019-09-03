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
          <img className='goal__circle__img' src={this.props.img}/>
          <p className='goal__circle__title'>
            {this.props.title}
          </p>
        </div>
        <p className='goal__text'>
          {this.props.description}
        </p>
      </div>
    )
  }
} 