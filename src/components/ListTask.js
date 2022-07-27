import React, { Component } from "react";
import ItemTask from "./ItemTask";
export default class ListTask extends Component {
  render() {
    const { listTask } = this.props
    return (

      <div>
        <div >
          <table className="table table-success">
            <thead>
              <tr>
                <th scope="col">NO.</th>
                <th scope="col">Task</th>
                <th scope="col">State</th>
                <th scope="col">Edit/Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                listTask.map(value =>
                  <ItemTask
                    key={value.id}
                    task={value} 
                    handleDelete={this.props.handleDelete}/>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}