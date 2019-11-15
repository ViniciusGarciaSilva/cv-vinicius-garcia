import * as React from 'react';
import './professional.css'
import EnterpriseLeftComponent from './enterprise-left.component';
import EnterpriseRightComponent from './enterprise-right.component';
import { Enterprise } from './../models/enterprise.model';

interface ProfessionalComponentProps {
  enterprise: Enterprise[];
}

export default class ProfessionalComponent extends React.Component<ProfessionalComponentProps, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className='professional'>
        <div className='professional__row'>
          <div className='professional__column-left'>
            {this.props.enterprise.map((enterprise, index) => {
              if (index % 2 === 1) {
                return (
                  <EnterpriseLeftComponent
                    img={enterprise.icon}
                    name={enterprise.name}
                    job={enterprise.job}
                  />
                )
              }
              return <div className='professional__column__space' key={enterprise.name}/>
            })}
          </div>
          <div className='professional__column-center'>
            <div className='professional__column-center__line' />
          </div>
          <div className='professional__column-right'>
            {this.props.enterprise.map((enterprise, index) => {
              if (index % 2 === 0) {
                return (
                  <EnterpriseRightComponent
                    img={enterprise.icon}
                    name={enterprise.name}
                    job={enterprise.job}
                  />
                )
              }
              return <div className='professional__column__space' key={enterprise.name}/>
            })}
          </div>
        </div>
      </div>
    )
  }
} 