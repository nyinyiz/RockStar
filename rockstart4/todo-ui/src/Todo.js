import React from 'react'
import Item from './Item'
import List from '@material-ui/core/List'

class Todo extends React.Component {
    render() {
      return (
        <List>
          {this.props.items.map(itemData => {
            return (
              <Item
                key={itemData._id}
                items={itemData}
                remove={this.props.remove}
                done={this.props.done}
                undo={this.props.undo}
                handleOpen={this.handleClickOpen}
                handleClose={this.handleClose}
              />
            )
          })}
        </List>
      )
    }
  }

  export default Todo