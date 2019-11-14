import * as React from 'react';
import ProfessionalComponent from './professional.component';

export default class ProfessionalContainer extends React.Component<any,any> {
  constructor(props: any) {
    super(props);
  }
  
  public render() {
    return (
      <ProfessionalComponent/>
    )
  }
} 
