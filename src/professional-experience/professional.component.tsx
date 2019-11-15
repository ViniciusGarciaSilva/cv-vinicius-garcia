import * as React from 'react';
import './professional.css'
import EnterpriseLeftComponent from './enterprise-left.component';
import EnterpriseRightComponent from './enterprise-right.component';
import { Enterprise } from '../models/enterprise.model';
import Period from './period.component';

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
        <p className='professional__title'>
          Experiência Profissional
        </p>
        <div className='professional__column'>
          {this.props.enterprise.map((enterprise, index) => (
            index % 2 === 1 ?
              <div className='professional__row'>
                <div className='professional__column-left'>
                  <EnterpriseLeftComponent
                    img={enterprise.icon}
                    name={enterprise.name}
                    job={enterprise.job}
                  />
                </div>
                <div className='professional__column-center'>
                  <div className='professional__column-center__row'>
                    <Period start={enterprise.start} end={enterprise.end} />
                    <div className='professional__column-center__line' />
                    <div className='professional__column-center__space' />
                  </div>
                </div>
                <div className='professional__column__space' key={enterprise.name} />
              </div>
              :
              <div className='professional__row'>
                <div className='professional__column__space' key={enterprise.name} />
                <div className='professional__column-center'>
                  <div className='professional__column-center__row'>
                    <div className='professional__column-center__space' />
                    <div className='professional__column-center__line' />
                    <Period start={enterprise.start} end={enterprise.end} />
                  </div>
                </div>
                <div className='professional__column-right'>
                  <EnterpriseRightComponent
                    img={enterprise.icon}
                    name={enterprise.name}
                    job={enterprise.job}
                  />
                </div>
              </div>
          ))}
        </div>
      </div>
    )
  }
} 