import React, { Component } from 'react';
import './App.scss';
import AddItem from './components/AddItem';
import ListTask from './components/ListTask';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import'../node_modules/@fortawesome/fontawesome-free/js/all'

class App extends Component {
  constructor(props) {
      super(props)

      this.state = {
        listTask: []
      }
  }
  componentDidMount(){
    const data = [
      {id: 1, task: "Task 1", state: 0},
      {id: 2, task: "Task 2", state: 1},
      {id: 3, task: "Task 3", state: 2},
      {id: 4, task: "Task 4", state: 0},
      {id: 5, task: "Task 5", state: 1},
    ]

    this.setState({
      listTask: data
    })
  }

  handleAdd =(obj) => {
    const listTask = [...this.state.listTask, obj];
    this.setState({
      listTask: listTask
    })
  }

  handleDelete = (id) =>{
    const listTask = [...this.state.listTask];
    const listTaskNew = listTask.filter(i => i.id !== id );
    this.setState({
      listTask: listTaskNew
    })
  }

  render() {
    const { listTask } = this.state
    return (
      <div className='container'>
        <div style={{margin:'30px 0'}}></div>
        <AddItem handleAdd={this.handleAdd} />
        <div style={{margin:'30px 0'}}></div>
        <ListTask  
        listTask={listTask}
        handleDelete={this.handleDelete}/>
      </div>
    )
  }
}

export default App