import * as React from 'react';
import './App.css';
import HeaderComponent from './header/header.component';
import AboutMeContainer from './about-me/about-me.container';
import GoalsContainer from './goals/goals.container';
import ProfessionalContainer from './professional-experience/professional.container';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <HeaderComponent/>
        <div className='App__content'>
          <AboutMeContainer/>
          <GoalsContainer/>
          <ProfessionalContainer/>
        </div> 
      </div>
    );
  }
}

export default App;
