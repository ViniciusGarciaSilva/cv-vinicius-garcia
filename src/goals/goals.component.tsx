import * as React from 'react';
import './goals.css';
import GoalComponent from './goal.component';
import { Goal } from './../models/goals.model';

interface GoalsComponentProps {
  goals: Goal[][];
}

export default class GoalsComponent extends React.Component<GoalsComponentProps, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className='goals'>
        <p className='goals__title'>
          Objetivo Geral
        </p>
        {this.props.goals ? this.props.goals.map(goalRow => (
          <div className='goals__row'>
            {goalRow.map(goal => (
              <div className='goals__column'>
              <GoalComponent
                title={goal.title}
                description={goal.description}
                img={goal.img}
              />
              </div>
            ))}
          </div>
        )) : null}
      </div>
    )
  }
} 