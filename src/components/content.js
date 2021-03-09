import React, {Component} from 'react';

import '../App.css';

function Content(){

    function getBatch(){
        return 19+2;
    }

    const title = "Bootcamp Dumbways with Functional Components"

    return(
        <div className="App-header">
            <p>Welcome to Dumbways.id</p>
            <p>Welcome {title} Batch {getBatch()}</p>
        </div>
    )
}

// class Content extends Component{

//     getBatch(){
//         return 20+1;
//     }

//   render(){
//       const title = "Bootcamp Dumbways";
//     return(
//       <div className="App-header">
//         <p>This Is Content</p>
//         <p>Welcom {title} Batch {this.getBatch()}</p>
//       </div>
//     )
//   }
// }

export default Content