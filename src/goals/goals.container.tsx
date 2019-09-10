import * as React from 'react';
import GoalsComponent from './goals.component';
import { Goal } from './../models/goals.model';
import goal_web from '../resources/goal_web.png';
import goal_dev from '../resources/goal_dev.png';
import goal_js from '../resources/goal_js.png';
import goal_mobile from '../resources/goal_mobile.png';
import goal_node from '../resources/goal_node.png';
import goal_others from '../resources/goal_others.png';
import goal_react from '../resources/goal_react.png';

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
      img: goal_dev,
      description: 'Adquirir novos conhecimentos e aprimorar os já existentes em Desenvolvimento de Software.',
      title: 'Desenvolvimento de Software' 
    },
  ],
  [
    {
      img: goal_web,
      description: 'Desenvolvimento de aplicações web, sobretudo em Front-End.',
      title: 'Web' 
    },
    {
      img: goal_mobile,
      description: 'Desenvolvimento de aplicações mobile, sobretudo em Front-End.',
      title: 'Mobile' 
    }
  ],
  [
    {
      img: goal_js,
      description: 'Adquirir novos conhecimentos em linguagem JavaScript.',
      title: 'JavaScript' 
    },
    {
      img: goal_react,
      description: 'Adquirir novos conhecimentos em linguagem React JS.',
      title: 'React JS' 
    },
    {
      img: goal_node,
      description: 'Adquirir novos conhecimentos em linguagem Node JS.',
      title: 'Node JS' 
    },
    {
      img: goal_others,
      description: 'Adquirir novos conhecimentos em outras linguagens de programação.',
      title: 'Outros' 
    }
  ]
]
