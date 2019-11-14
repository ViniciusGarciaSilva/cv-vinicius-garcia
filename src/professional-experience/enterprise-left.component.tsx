import * as React from 'react'
import './enterprise-left.css'
import { Job } from './../models/enterprise.model';

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
      <div className='enterprise'>
        <div className="enterprise__row">
          <img src={this.props.img} className='enterprise__icon' />
        </div>
        <div className='enterprise__description'>
          <p className='enterprise__description__name'>
            {this.props.name}
          </p>
          {this.props.job.map(job => (
            <p className='enterprise__description__job'>
              <span className='enterprise__description__job__title'>{job.title}</span>
              {job.description}
            </p>
          ))}
        </div>

      </div>

    )
  }
}