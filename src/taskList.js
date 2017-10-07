import React, { Component } from 'react'
import FlipMove from 'react-flip-move'
import './TodoList.css'

class TaskList extends Component {
  constructor (props, context) {
    super(props, context)

    this.delete = this.delete.bind(this)
  }

  delete (key) {
    this.props.delete(key)
  }
  render () {
    var listItems = this.props.tasks.map((item) => {
      return <li key={item.key} onClick={(e) => this.delete(item.key, e)}>{item.value}</li>
    })
    return (
      <ul className='theList'>
        <FlipMove duration={250} easing='ease-out'>
          {listItems}
        </FlipMove>
      </ul>
    )
  }
}

export default TaskList
