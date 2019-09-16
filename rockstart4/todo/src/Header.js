import React from 'react'

const styles = {
    header: {
        margin: 0,
        padding: 16,
        background: '#2b7547',
        color: 'white'
    }
}

class Header extends React.Component {
    render() {
        return(
            <h4 style={styles.header}>
                {this.props.text}  ({this.props.count})
            </h4>
        )
    }
}

export default Header