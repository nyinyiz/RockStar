import React from 'react'
import Item from './Item'

/* properties is read only type <= can't process to other */
class App extends React.PureComponent {

  render() {
    var data = [
      { name: "Nyi Nyi" },
      { name: "Mg Mg" },
      { name: "Zaw Zaw" },
    ]
    return (
      <div>
        <ul>
          {
            data.map(itemData => <Item name={itemData.name} />)
          }
        </ul>
      </div>

    )
  }
}

export default App // to export App.js file to render