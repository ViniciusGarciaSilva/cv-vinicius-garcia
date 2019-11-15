import * as React from 'react'
import './enterprise-left.css'
import { Job } from '../models/enterprise.model';

interface EnterpriseLeftComponentProps {
  img: any;
  name: string;
  job: Job[];
}

export default class EnterpriseLeftComponent extends React.Component<EnterpriseLeftComponentProps, any> {
  constructor(props: any) {
    super(props)
  }

  public render() {
    return (
      <div className='enterprise-left'>
        <div className="enterprise-left__row">
          <img src={this.props.img} className='enterprise-left__icon' />
        </div>
        <div className='enterprise-left__description'>
          <p className='enterprise-left__description__name'>
            {this.props.name}
          </p>
          {this.props.job.map(job => (
            <p className='enterprise-left__description__job'>
              <span className='enterprise-left__description__job__title'>{job.title}</span>
              {job.description}
            </p>
          ))}
        </div>

      </div>

    )
  }
}