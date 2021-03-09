import React,{Component, useState} from 'react';
import '../App.css';

//  export default class Increment extends Component{

//     constructor(){
//         super()
//         this.state = {
//             counter : 0
//         }
//         this.handleCounter = this.handleCounter.bind(this)
//     }

//     handleCounter(){
//         this.setState(
//             {
//                 counter: this.state.counter + 1
//             }
//         )
//     }

//      render(){
//          return(
            //  <div className="App-header">
            //      <p>If You Click a Button to Increment</p>

            //      {/* <button style={{marginTop:20}} onClick={() => this.setState({counter: this.state.counter + 1})}>Hit Me !</button> */}

            //     <p>{this.state.counter}</p>

            //      <button style={{marginTop:20}} onClick={this.handleCounter}>Hit Me !</button>
            //  </div>
//          )
//      }
//  }


function Increment(){
    const [counter, setCounter] = useState(0)

    function handleCounter(){
        setCounter(counter + 1)
    }

    return(
        <div className="App-header">
                 <p>If You Click a Button to Increment</p>

                 {/* <button style={{marginTop:20}} onClick={() => this.setState({counter: this.state.counter + 1})}>Hit Me !</button> */}

                <p>{counter}</p>

                 <button style={{marginTop:20}} onClick={handleCounter}>Hit Me !</button>
             </div>
    )
}

export default Increment