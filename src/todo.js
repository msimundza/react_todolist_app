import React, { Component } from 'react'
import TaskList from './taskList';

class Todo extends Component {
  state = { 
    items: []
  }
  
  constructor(props, context) {
    super(props, context)
    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this);    
  }

  addItem(e) {
    let itemsArray = this.state.items

    if (this._inputElement.value !== '') {
      itemsArray.unshift(
        {
          value: this._inputElement.value,
          key: Date.now()
        }
      )
    }

    this.setState({
      items: itemsArray
    })
    
    this._inputElement.value = ''
    e.preventDefault()
  }

  deleteItem(key) {
    let filteredItems = this.state.items.filter((item) => {
      return item.key !== key
    })

    this.setState({
      items: filteredItems
    })
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input placeholder="Enter Task" ref={(el) => this._inputElement = el}/>
            <button type="submit">Add</button>      
          </form>
        </div>
        <TaskList tasks={this.state.items} delete={this.deleteItem}/>
      </div>
    )
  }
}

export default Todo