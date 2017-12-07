import React from 'react'
import './hello.less'


// class Hello extends React.Component{
//   render(){
//     return (
//       <div className="hello-component">Hello</div>
//     )
//   }
// }

let Hello = React.createClass({
  render() {
    return (
      <div
        className="hello-component">
        Hello panda xixi wode
      </div>
    )
  }
})

export default Hello