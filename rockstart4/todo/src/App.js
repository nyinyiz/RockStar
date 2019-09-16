import React from 'react'
import Todo from './Todo'
import Header from './Header'

class App extends React.Component {

  input = React.createRef()
  autoId = 3
  state = {
    task: [
      { _id: 1, subject: "Milk", status: 0 },
      { _id: 2, subject: "Water", status: 1 },
      { _id: 3, subject: "Milo", status: 1 },

    ]
  }

  add = () => {
    this.setState({
      task: [
        ...this.state.task,
        { _id: ++this.autoId, subject: this.input.current.value, status: 0 }
      ]
    })

    this.input.current.value = ""
    this.input.current.focus()
  }

  remove = (id) => () => {
    this.setState({
      task: this.state.task.filter(taskData => taskData._id !== id)

    })
  }

  done = (id) => () => {
    this.setState({
      task: this.state.task.map(itemData => {
        if (itemData._id === id) itemData.status = 1
        return itemData
      })
    })
  }

  undo = (id) => () => {
    this.setState({
      task: this.state.task.map(itemData => {
        if (itemData._id === id) itemData.status = 0
        return itemData
      })
    })
  }

  render() {
    return (
      <>
        <Header 
          text="Todo"
          count={this.state.task.filter(itemData => itemData.status === 0).length} />
          
        <Todo
          value="Todo"
          done={this.done}
          undo={this.undo}
          items={this.state.task.filter(itemData => itemData.status === 0)}
          remove={this.remove}
        />

        <Header 
          text="Undo"
          count={this.state.task.filter(itemData => itemData.status === 1).length} />
        
        <Todo
          value="Done"
          done={this.done}
          undo={this.undo}
          items={this.state.task.filter(itemData => itemData.status === 1)}
          remove={this.remove}
        />

        <div>
          <input type="text" ref={this.input} />
          <button onClick={this.add}>+</button>
        </div>
      </>
    )
  }
}

export default App;
