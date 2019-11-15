import * as React from 'react'
import AboutMeComponent from './about-me.component';
import Perfil from '../resources/perfil@1x.png'

const AboutMeText: string = 'Desenvolvedor de software. Estudante de Engenharia de Computação na escola politécnica da USP. Em busca de desenvolvimento pessoal e profissional que permitam aliar gostos pessoais com o dever de retornar à sociedade a oportunidade de estudo oferecida por meio da universidade pública. Apaixonado por rock, música eletrônica e video games. Sempre valorizando as relações humanas, a família, os amigos e os colegas.'

export default class AboutMeContainer extends React.Component<any,any> {
  constructor(props: any) {
    super(props);
  }
  
  public render() {
    return (
      <AboutMeComponent 
        text={AboutMeText}
        img={Perfil} 
      />
    )
  }
} 

