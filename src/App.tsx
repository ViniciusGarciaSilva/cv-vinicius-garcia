import * as React from 'react';
import './App.css';
import HeaderComponent from './header/header.component';
import AboutMeContainer from './about-me/about-me.container';
import GoalsContainer from './goals/goals.container';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <HeaderComponent/>
        <div className='App__content'>
          <AboutMeContainer/>
          <GoalsContainer/>
        </div> 
      </div>
    );
  }
}

export default App;
