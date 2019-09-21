import React from 'react'

import {
    Toolbar,
    AppBar,
    Badge,
    Typography,
    Button,
    Menu,
    MenuItem
} from '@material-ui/core'

import DoneAllIcon from '@material-ui/icons/DoneAll'
import MoreVertIcon from '@material-ui/icons/MoreVert'

const styles = {

    title: {
        flexGrow :1,
        marginLeft : 20

    }

}

class Header extends React.Component {

    state = {
        anchorEl: null
    }

    showMenu = (event) => {
        this.setState({
            anchorEl: event.currentTarget
        }
        )
    }

    hideMenu = () => {
        this.setState(
            {
                anchorEl : null
            }
        )
    }

    render() {
        return(
            <AppBar position="static">
                <Toolbar>
                    <Badge badgeContent={this.props.count} color='secondary'>
                        <DoneAllIcon />
                    </Badge>
                    <Typography variant="h6" style={styles.title}>
                        Todo List
                    </Typography>
                    <Button color="inherit" onClick={this.showMenu}>
                        <MoreVertIcon />
                    </Button>
                    <Menu 
                        anchorEl={this.state.anchorEl}
                        open={Boolean(this.state.anchorEl)}
                        onClose={this.hideMenu}>
                            <MenuItem onClick={() => {
                                this.hideMenu()
                                this.props.clear()
                            }}>
                                Clear All Done
                            </MenuItem>
                            <MenuItem 
                                onClick={() => {
                                    this.hideMenu()
                                    this.props.selectAll()
                                }}>
                                Select All Task
                            </MenuItem>
                            <MenuItem 
                                onClick={() => {
                                    this.hideMenu()
                                    this.props.unSelectAll()
                                }}>
                                UnSelect All Task
                            </MenuItem>
                    </Menu>

                </Toolbar>
            </AppBar>
        )
    }
}

export default Header