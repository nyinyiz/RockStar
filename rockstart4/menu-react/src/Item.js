import React from 'react';
import ItemDetail from './ItemDetail';

class Item extends React.Component {

  constructor() {
    super()

    this.input = React.createRef()
    this.inputTwo = React.createRef()

    this.state = {
      data: [
        { des: "This is a long description" },
        { des: "This is a long description" },
        { des: "This is a long description" },
      ]
    }

    this.add = this.add.bind(this)
  }

  add() {
    var newItems = this.state.data
    newItems.push({ des: this.input.current.value })
    
    this.setState({
      data: newItems
    })

    this.inputTwo.current.value = this.input.current.value
    this.input.current.value = ""
    this.input.current.focus()

  }


  render() {

    return (
      <li>
        <h2>
          {this.props.name}
        </h2>
        <h3>{this.props.age}</h3>
        {
          this.state.data.map(data => <ItemDetail des={data.des} />)
        }

        <input type="text" ref={this.input}/>
        <input type="text" ref={this.inputTwo}/>

        <button onClick={this.add}>Add</button>

      </li>
    )
  }
}

export default Item;