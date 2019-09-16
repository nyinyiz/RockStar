import React from 'react'

class Item extends React.Component {

    render() {
        return(
            <li>

                <div>
                    <p>
                        ({this.props.user.id}) {this.props.user.name}  
                        {/* /# => valid url need in react  */}
                        <a href='/#' onClick={this.props.remove(this.props.user.id)}>Remove</a>
                    </p>
                    
                </div>
                
            </li>
        )
    }
}

export default Item