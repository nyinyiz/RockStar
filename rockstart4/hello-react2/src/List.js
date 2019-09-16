import React from 'react'
// import Item from './Item.js'

// function Item(props) {
//   return(
//       <li>

//           <div>
//               <p>
//                   ({props.user.id}) {props.user.name}  
//                   {/* /# => valid url need in react  */}
//                   <a href='/#' onClick={props.remove(props.user.id)}>Remove</a>
//               </p>

//           </div>
//       </li>
//   )
// }

// const Item = (props) => (
//   <li>
//     <div>
//       <p>
//         ({props.user.id}) {props.user.name}
//         {/* /# => valid url need in react  */}
//         <a href='/#' onClick={props.remove(props.user.id)}>Remove</a>
//       </p>
//     </div>
//   </li>
// )

const Item = ({user, remove}) => (
  <li>
    <div>
      <p>
        ({user.id}) {user.name}
        {/* /# => valid url need in react  */}
        <a href='/#' onClick={remove(user.id)}>Remove</a>
      </p>
    </div>
  </li>
)

class List extends React.Component {

  constructor() {
    super()
  }

  render() {

    return (
      <div>
        <h3>User List</h3>
        <ul>
          {
            this.props.users.map(userData =>
              <Item
                key={userData.id}
                user={userData}
                remove={this.props.remove} />
            )
          }
        </ul>
      </div>
    )
  }
}

export default List