import React, { Component } from 'react';
import logo from './logo.svg';
import TodoApp from '../containers/TodoContainer';
import ScrollPos from '../components/functionAsChildComponent/scrollPos';
import SlideShow from '../components/childrenApi/SlideShow';
import { Link } from 'react-router-dom'

class App extends Component {
  render() {    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <h3>React-Redux...</h3>
          <Link to="/context">Context Example</Link>
            <TodoApp />
            <ScrollPos>
              {
                position => <h3 style={{transform: `rotateX(${position}deg)`}}>FunctionAsChildComponent!</h3>
              }
            </ScrollPos>
            
            
              <SlideShow>
                <img src="//robohash.org/91D.png?set=set2&size=150x150" alt="images"/>
                <img src="//robohash.org/PQI.png?set=set2&size=150x150" alt="images"/>
                <img src="//robohash.org/M4D.png?set=set2&size=150x150" alt="images"/>
                <img src="//robohash.org/NKU.png?set=set2&size=150x150" alt="images"/>
                <img src="//robohash.org/FFL.png?set=set2&size=150x150" alt="images"/>                
              </SlideShow>
            
            <div className="spacer"></div>
        </div> 
      </div>
    );
  }  
}

export default App;
