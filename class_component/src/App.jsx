// import React from "react";

// class App extends React.Component{
//   render(){
//     return(
//       <h1>class_component</h1>
//     )
//   }
// }
// export default 


// state

// import React from "react";

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state={
//       color:'Red',
//       size:'60px'
      
//     }
//   }
//   render(){
//     return(
//       <div>
//       <h1>class_component</h1>
//       <p>color:{this.state.color}</p>
//       <p>size:{this.state.size}</p>
//       </div>
      
//     )
//   }
// }
// export default App

// prose
import React from "react";

class App extends React.Component{
  constructor(props){
    super()
    this.state={
      color:'Red',
      size:'60px',
      name:props.name
    }
  }
  render(){
    return(
      <div>
      <h1>class_component</h1>
      <p>color:{this.state.color}</p>
      <p>size:{this.state.size}</p>
      <p>name:{this.state.name}</p>
      </div>
      
    )
  }
}
export default App