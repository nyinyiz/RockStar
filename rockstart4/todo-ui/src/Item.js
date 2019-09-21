import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'

const styles = {
  itemList : {
    width : 350
  }
}
class Item extends React.Component {
    render() {
      return (
        <ListItem style={styles.itemList}>
          {
            this.props.items.status
              ? <Checkbox type="checkbox" checked
                onChange={this.props.undo(this.props.items._id)}
              />
              : <Checkbox type="checkbox"
                onChange={this.props.done(this.props.items._id)}
              />
          }
          <ListItemText primary={this.props.items.subject} />
          {/* <a href="/#" onClick={this.props.remove(this.props.items._id)}>&nbsp;x</a> */}
          <IconButton onClick={this.props.remove(this.props.items._id)} >
            <DeleteIcon />
          </IconButton>
        </ListItem>
      )
    }
  }

  export default Item