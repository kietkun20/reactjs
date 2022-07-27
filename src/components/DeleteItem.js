import React, { Component } from "react";

export default class DeleteItem extends Component {

    
    handleDelete = () => {
        this.props.handleDelete(this.props.idItem)
    }
    
    render() {
        return (
            <div>
                <button
                    type="button"
                    className="btn btn-danger ms-2"
                    data-bs-toggle="modal"
                    data-bs-target={"#deleteItem" + this.props.idItem}>
                    <i className="fa-solid fa-trash"></i>
                </button>
                <div
                    className="modal fade"
                    id={"deleteItem" + this.props.idItem}
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{"Delete " + this.props.idItem}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                Are you sure to delete this Task?
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal">
                                    Close
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger "
                                    data-bs-dismiss="modal"
                                    onClick={this.handleDelete}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}