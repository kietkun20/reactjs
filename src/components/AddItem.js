import React, { Component } from "react";
export default class AddItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: "",
      task: "",
      state: 0
    }
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);
    this.setState({
      [name]: value
    })
  }

  handleSubmit = () => {
    console.log("Hugo tán gái dở quá");
    this.props.handleAdd({
      id: this.state.id * 1,
      task: this.state.task,
      state: this.state.state * 1
    })

    this.setState({
      id: "",
      task: "",
      state: 0
    })
  }

  render() {
    console.log(this.state);
    const { id, task, state } = this.state
    return (
      <div>
        <div className="text-end">
          <div>
            <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addTask">
              Add Task
            </button>
            <div className="modal fade" id="addTask" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                  </div>
                  <div className="modal-body text-start">
                    <form>
                      {/* From */}
                      <div className="mb-3">
                        <label className="form-label">No.</label>
                        <input
                          type="number"
                          className="form-control"
                          value={id}
                          name="id"
                          onChange={this.handleChange}
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Task</label>
                        <input
                          type="text"
                          className="form-control"
                          value={task}
                          name="task"
                          onChange={this.handleChange}
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">State</label>
                        <select
                          className="form-select"
                          value={state}
                          name="state"
                          onChange={this.handleChange}>
                          <option value={0}>0</option>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={this.handleSubmit}
                      data-bs-dismiss="modal">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}