import React, {Component} from 'react';

import '../App.css';

function Content(){

    function getBatch(){
        return 19+2;
    }

    function cobaAlert(){
        alert("Conver Regular Function with Functional Component");
    }

    const title = "Bootcamp Dumbways with Functional Components"

    return(
        <div className="App-header">
            <p>Welcome to Dumbways.id</p>
            <p>Welcome {title} Batch {getBatch()}</p>

            <button onClick={cobaAlert}>Hit Me</button>
        </div>
    )
}

// class Content extends Component{

//     getBatch(){
//         return 20+1;
//     }

//     cobaAlert(){
//         alert("Convert Function")
//     }

//   render(){
    
//       const title = "Bootcamp Dumbways";

//     return(
//       <div className="App-header">
//         <p>This Is Content</p>
//         <p>Welcom {title} Batch {this.getBatch()}</p>

//         <button onClick={this.cobaAlert}>Hit Me</button>
//       </div>
//     )
//   }
// }

export default Content