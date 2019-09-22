import React from 'react'
import { 
  Card,
  ListItem,
  ListItemText,
  IconButton,
  Checkbox
} from '@material-ui/core'

import DeleteIcon from '@material-ui/icons/Delete'


const styles = {
  itemList : {
    width : 350
  },
  cardView: {
    margin : 4
  }
}
class Item extends React.Component {
    render() {
      return (
        <Card style={styles.cardView}>
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
            <IconButton onClick= {this.props.remove(this.props.items._id)} > {/*   */}
              <DeleteIcon />
            </IconButton>
          </ListItem>
        </Card>

      )
    }
  }

  export default Item