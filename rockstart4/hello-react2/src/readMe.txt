
class Item extends React.Component {
    render() {
        return (
            <li>
                <div>
                    <p>
                        ({props.user.id}) {props.user.name}  
                        {/* /# => valid url need in react  */}
                        <a href='/#' onClick={props.remove(props.user.id)}>Remove</a>
                    </p>
                </div>
            </li>
        )
    }
}

function Item(props) {
    return(
        <li>
            <div>
                <p>
                    ({props.user.id}) {props.user.name}  
                    {/* /# => valid url need in react  */}
                    <a href='/#' onClick={props.remove(props.user.id)}>Remove</a>
                </p>
            </div>
        </li>
    )
}

const Item = (props) => (
    <li>
        <div>
        <p>
            ({props.user.id}) {props.user.name}
            {/* /# => valid url need in react  */}
            <a href='/#' onClick={props.remove(props.user.id)}>Remove</a>
        </p>
        </div>
    </li>
)

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

