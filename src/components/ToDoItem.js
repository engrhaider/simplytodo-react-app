import {React, Component} from 'react'

class ToDoItem extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <li identity={this.props.item.id}>
                <div className="form-check">
                    <label className="form-check-label">
                        <input className="checkbox" type="checkbox" name="todoitem[]" checked={this.props.item.completed} onChange={() => {this.props.handleChange(this.props.item.id)}} />{this.props.item.title} <i
                        className="input-helper"></i>
                    </label>
                </div>
                <i className="remove mdi mdi-close-circle-outline" onClick={() => {this.props.handleDelete(this.props.item.id)}}></i>
            </li>
        )
    }
}

export default ToDoItem