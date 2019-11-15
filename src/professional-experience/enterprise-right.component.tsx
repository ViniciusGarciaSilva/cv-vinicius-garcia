import * as React from 'react'
import './enterprise-right.css'
import { Job } from '../models/enterprise.model';

interface EnterpriseRightComponentProps {
  img: any;
  name: string;
  job: Job[];
}

export default class EnterpriseRightComponent extends React.Component<EnterpriseRightComponentProps, any> {
  constructor(props: any) {
    super(props)
  }

  public render() {
    return (
      <div className='enterprise-right'>
        <div className="enterprise-right__row">
          <img src={this.props.img} className='enterprise-right__icon' />
        </div>
        <div className='enterprise-right__description'>
          <p className='enterprise-right__description__name'>
            {this.props.name}
          </p>
          {this.props.job.map(job => (
            <p className='enterprise-right__description__job'>
              <span className='enterprise-right__description__job__title'>{job.title}</span>
              {job.description}
            </p>
          ))}
        </div>

      </div>

    )
  }
}