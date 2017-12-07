import React from 'react'

import List from './List'
import Input from './Input'

class ToDoApp extends React.Component{
  componentWillMount () {
    this.setState({
      list: ['thing1','thing2','thing2'],
      newToDo: 'test'
    })
  }
  onInputChange  = (event) => {
    this.setState({ newToDo:event.target.value })
  }
  onInputSubmit = (event) => {
    event.preventDefault()
    this.setState( state => ({
      list: [...state.list, state.newToDo, done:false],
      newToDo: ''
    }))
    console.log(this.state)
  }
  render () {
    return (
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <div className="panel panel-default">
            <div className="panel-body">
              <h1>My To Do App</h1>
              <hr/>
              <List 
                listItems={this.state.list}/>
              <hr/>
              <Input
                value={this.state.newToDo}
                onChange={this.onInputChange}
                onSubmit={this.onInputSubmit} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ToDoApp 