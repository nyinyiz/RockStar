import React from 'react'
import Todo from './Todo'
import Header from './Header'
import { 
  Paper,
  InputBase,
  Button,
  Divider,
  Card,
 } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'


const styles = {
  body : {
    width : 400,
    margin : 32
  },

  paper : {
    display : 'flex',
    width : 300,
    margin : 16
  },
  
  input : {
    flexGrow :1,
    marginLeft : 10
  },

  saveButton : {
    background : '#9e9e9e',
    padding : 16
  }

}


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

  clear = () => {
    this.setState({
      task: this.state.task.filter(taskData => taskData.status === 0)
    })
  }

  selectAll = () => {
    this.setState({
      task: this.state.task.map(itemData => {
        itemData.status = 1
        return itemData
      })
    })
  }


  unSelectAll = () => {
    this.setState({
      task: this.state.task.map(itemData => {
        itemData.status = 0
        return itemData
      })
    })
  }

  render() {
    return (
      <>
      <center>
      <Card style={styles.body}>
        <Header
          text="Todo"
          count={this.state.task.filter(itemData => itemData.status === 0).length} 
          clear={this.clear}
          selectAll={this.selectAll}
          unSelectAll={this.unSelectAll}/>

        <Todo
          value="Todo"
          done={this.done}
          undo={this.undo}
          items={this.state.task.filter(itemData => itemData.status === 0)}
          remove={this.remove}
        />

        <Divider />

        <Todo
          value="Done"
          done={this.done}
          undo={this.undo}
          items={this.state.task.filter(itemData => itemData.status === 1)}
          remove={this.remove}
        />

        <Paper style={styles.paper}>
          <InputBase
            inputRef={this.input}
            placeholder="Enter task"
            style={styles.input} />

            <Button onClick={this.add} style={styles.saveButton}>
              <AddIcon />
            </Button>
          
        </Paper>

      </Card>
      </center>
        
      </>
      
    )
  }
}

export default App;
