import * as React from 'react';
import './professional.css'
import EnterpriseLeftComponent from './enterprise-left.component';
import certys_icon from '../resources/certsys.png';

export default class ProfessionalComponent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className='professional'>
        <div className='professional__row'>
          <div className='professional__column-left'>
            <EnterpriseLeftComponent 
              img={certys_icon}
              name={'Certsys Tecnologia da Informação'}
              job={[{title: 'BPM (Business Process Management):', description: ' Desenvolvimento de um sistema interno de contratação para a empresa utilizando a solução IBM Business Process Manager'}]}
            />
          </div>
          <div className='professional__column-center'>
            <div className='professional__column-center__line'/>
          </div>
          <div className='professional__column-right'>
          <p className='test'>
              column3
            </p>
          </div>
        </div>
      </div>
    )
  }
} 