import React, { Component } from "react";
import DeleteItem from "./DeleteItem";
import EditItem from "./EditItem";
export default class ItemTask extends Component {
  render() {
    const { task } = this.props
    return (
      <tr>
        <th scope="row">{task.id}</th>
        <td>{task.task}</td>
        <td>{task.state}</td>
        <td>
          <div className="d-flex">
            <EditItem />
            <DeleteItem 
              id={task.id}
              handleDelete={task.handleDelete}
            />
          </div>
        </td>
      </tr>
    )
  }
}