import React, {Component} from 'react'
import ToDoItem from './ToDoItem'
import toDoItems from '../toDoItems.json'

class MainContent extends Component {
    constructor() {
        super();
        this.state = {
            todos: toDoItems,
            newItem: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.addNewItem = this.addNewItem.bind(this);
        this.handleNewItemChange = this.handleNewItemChange.bind(this);
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedToDos = prevState.todos.map(item => {
                if (item.id == id)
                    item.completed = !item.completed;
                return item;
            })
            return {
                todos: updatedToDos,
                newItem: prevState.newItem
            }
        })
    }

    handleDelete(id) {
        this.setState(prevState => {
            const updatedToDos = prevState.todos.filter(item => {
                if (item.id != id)
                    return item;
            })
            return {
                todos: updatedToDos
            }
        })
    }

    addNewItem() {
        // construct new item object
        const newItem = {id: Math.floor((Math.random() * 1000) + 1), title: this.state.newItem, completed: false};
        // update state
        this.state.todos.push(newItem);
        this.setState({'todos': this.state.todos});
        // reset input state
        this.setState({newItem: ""})
    }

    handleNewItemChange(e) {
        this.setState({newItem: e.target.value})
    }

    render() {
        const toDoData = this.state.todos.map(item => <ToDoItem item={item} key={item.id}
                                                                handleChange={this.handleChange}
                                                                handleDelete={this.handleDelete}></ToDoItem>);

        return (
            <div className="mainContent">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    this.addNewItem()
                }}>
                    <div className="add-items d-flex">
                        <input type="text" className="form-control todo-list-input"
                               placeholder="What do you need to do today?" onChange={(e) => {
                            this.handleNewItemChange(e)
                        }} value={this.state.newItem} required="required"/>
                        <button type="submit" className="add btn btn-primary font-weight-bold todo-list-add-btn">Add
                        </button>
                    </div>
                </form>
                <div className="list-wrapper">
                    <ul className="d-flex flex-column-reverse todo-list">
                        {toDoData}
                    </ul>
                </div>
            </div>
        )
    }
}

export default MainContent