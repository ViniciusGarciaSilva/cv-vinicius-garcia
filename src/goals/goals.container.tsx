import * as React from 'react';
import GoalsComponent from './goals.component';
import { Goal } from './../models/goals.model';
import goal_img from '../resources/goal_web.png'

export default class GoalsContainer extends React.Component<any,any> {
  constructor(props: any) {
    super(props);
  }
  
  public render() {
    return (
      <GoalsComponent goals={goals}/>
    )
  }
} 

const goals: Goal[][] = [
  [
    {
      img: goal_img,
      description: 'bla',
      title: 'title' 
    },
  ],
  [
    {
      img: goal_img,
      description: 'bla1',
      title: 'title' 
    },
    {
      img: goal_img,
      description: 'bla22222',
      title: 'title' 
    },
    {
      img: goal_img,
      description: 'bla3',
      title: 'title' 
    },
    {
      img: goal_img,
      description: 'bla4',
      title: 'title' 
    },
    {
      img: goal_img,
      description: 'bla5',
      title: 'title' 
    }
  ]
]
