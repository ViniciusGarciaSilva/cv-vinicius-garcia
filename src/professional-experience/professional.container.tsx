import * as React from 'react';
import ProfessionalComponent from './professional.component';
import { Enterprise } from './../models/enterprise.model';
import bradesco_logo from '../resources/bradesco_logo.png';
import certsys_logo from '../resources/certsys_logo.png';
import controlid_logo from '../resources/controlid_logo.png';
import mgc_logo from '../resources/mgc_logo.png';
import taqtile_logo from '../resources/taqtile_logo.png';

export default class ProfessionalContainer extends React.Component<any,any> {
  constructor(props: any) {
    super(props);
  }
  
  public render() {
    return (
      <ProfessionalComponent enterprise={enterprise}/>
    )
  }
} 

const enterprise: Enterprise[] = [
  {
    name: 'Bradesco',
    icon: bradesco_logo,
    job: [
      {
        title: 'Smart Home:',
        description: ' Projeto de formatura feito em parceria com a empresa. Desenvolvimento de um sistema de casa inteligente voltada a idosos utilizando como acelerador o projeto Hedwig. Desenvolvimento de backend em Node JS. Gerenciamento do projeto.'
      }
    ]
  },
  {
    name: 'Taqtile',
    icon: taqtile_logo,
    job: [
      {
        title: 'Aplicativo oBoticário:',
        description: ' Desenvolvimento do aplicativo de supervisoras da oBoticário. Trabalho no front-end e integração com o back-end. Desenvolvimento em JavaScript e React Native.'
      },
      {
        title: 'Mentoria:',
        description: ' Acompanhamento feito semanalmente para estudos voltados ao desenvolvimento técnico. Estudos dos conceitos de programação imperativa e declarativa; herança e composição; aprofundamento em React Native; estudo de programação funcional.'
      },
      {
        title: 'Devision:',
        description: ' Iniciativa interna da Taqtile que resultou na criação de um grupo para garantir que as pessoas da empresa sempre se desenvolvam, buscando evolução técnica e pessoal. Reuniões semanais e atividades de acompanhamento dos funcionários.'
      },
    ]
  },
  {
    name: 'Control Id',
    icon: controlid_logo,
    job: [
      {
        title: 'Print Id:',
        description: ' Elaboração de uma impressora térmica não fiscal para pontos de venda. Desenvolvimento de um decodificador para o protocolo ESC/POS. Desenvolvimento e aprimoramento da funcionalidade de rasterização de texto. Projeto em linguagem de programação C++.'
      },
      {
        title: 'Integração:',
        description: ' Suporte técnico para integradores dos produtos e ferramentas Control Id. Compreensão dos problemas; elaboração de soluções/encaminhamento para responsáveis; transmissão da solução ao integrador; acompanhamento do resultado.'
      }
    ]
  },
  {
    name: 'Certsys Tecnologia da Informação',
    icon: certsys_logo,
    job: [
      {
        title: 'BPM (Business Process Management):',
        description: ' Desenvolvimento de um sistema interno de contratação para a empresa utilizando a solução IBM Business Process Manager.'
      },
      {
        title: 'Pré-vendas:',
        description: ' Contato com as ferramentas IBM MaaS360, Rational Team Concert, Watson e soluções IBM voltadas para DevOps. Contato direto com clientes da Certsys entendendo problemas, preparando propostas e fazendo orçamentos.'
      }
    ]
  },
  {
    name: 'MGC Representações',
    icon: mgc_logo,
    job: [
      {
        title: 'Painel Ilustrativo:',
        description: ' Contato com projeto e produção de placas de circuito impresso. Desenvolvimento de programas para microcontroladores em linguagem de programação C.'
      }
    ]
  }
]