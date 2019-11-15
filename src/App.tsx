import * as React from 'react';
import './App.css';
import HeaderComponent from './header/header.component';
import AboutMeContainer from './about-me/about-me.container';
import GoalsContainer from './goals/goals.container';
import ProfessionalContainer from './professional-experience/professional.container';

class App extends React.Component {
  constructor(props: any) {
    super(props);
  }

  public handlerOnClickButton = (number: any) => {
    window.scrollTo(0, number)
    return
  }

  
  public render() {
    return (
      <div className="App">
        <HeaderComponent onClickButton={this.handlerOnClickButton}/>
        <AboutMeContainer />
        <GoalsContainer />
        <ProfessionalContainer/>
      </div>
    );
  }
}

export default App;
