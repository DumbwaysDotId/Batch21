import React, {Component} from 'react';


//Import CSS
import './App.css';


//Import Components
import Content from './components/content';
import Header from './components/header';


function App(){
  return(
    <div>
      <Header lalala="Convert Title By Props"
              lalala2="This 2 Props for Child"/>
      <Content />
    </div>
  )
}

// class App extends Component {
//   render(){
//     return(
//       <div className="App">
//         <Header />
//         <Content />
//       </div>
//     )
//   }
// }

export default App