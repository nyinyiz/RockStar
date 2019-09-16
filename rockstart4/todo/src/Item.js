import React from 'react'

class Item extends React.Component {
    render() {
      return (
        <li>
          {
            this.props.items.status
              ? <input type="checkbox" checked
                onChange={this.props.undo(this.props.items._id)}
              />
              : <input type="checkbox"
                onChange={this.props.done(this.props.items._id)}
              />
          }
          {this.props.items.subject}
          <a href="/#" onClick={this.props.remove(this.props.items._id)}>&nbsp;x</a>
        </li>
      )
    }
  }

  export default Item