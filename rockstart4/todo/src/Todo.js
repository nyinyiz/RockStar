import React from 'react'
import Item from './Item'
class Todo extends React.Component {
    render() {
      return (
        <ul>
          {this.props.items.map(itemData => {
            return (
              <Item
                key={itemData._id}
                items={itemData}
                remove={this.props.remove}
                done={this.props.done}
                undo={this.props.undo}
              />
            )
          })}
        </ul>
      )
    }
  }

  export default Todo