import React from 'react'
import List from './List.js'

class App extends React.Component {

  autoId = 4
  inputBox = React.createRef()
  state = {
    user:[
      {id : 1, name : "Nyi Nyi"},
      {id : 2, name : "Zaw Zaw"},
      {id : 3, name : "Mg Mg"},
      {id : 4, name : "U U"},
      ]
  }

  add = () => {
    let newUsers = this.state.user
    newUsers.push({ id : ++this.autoId, name : this.inputBox.current.value })
    this.setState({users : newUsers})

    this.inputBox.current.value = ""
    this.inputBox.current.focus()

  }

  remove = (id) => () => {
    this.setState({
      user : this.state.user.filter(userData=> (userData.id !== id))
    })
  }

  

  render() {
    return(
      <div>
        <List users={this.state.user} remove={this.remove}/>
        <input type="text" ref={this.inputBox}/>
        <button onClick={this.add}>Insert</button>
      </div>
    )
  }
}

export default App