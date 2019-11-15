import * as React from 'react'
import './period.css'

interface PeriodProps {
  start: string;
  end: string;
}

export default class Period extends React.Component<PeriodProps, any> {
  constructor(props: any) {
    super(props)
  }

  public render() {
    return (
      <div className='period'>
        <div className='period__row'>
          <p className='period__date'>
            {this.props.start}
          </p>
        </div>
        <div className='period__row'>
          <div className='period__line'/>
        </div>
        <div className='period__row'>
          <p className='period__date'>
            {this.props.end}
          </p>
        </div>
      </div>
    )
  }


}