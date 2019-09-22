import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  ListItemIcon,
  Icon
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import ItemListIcon from '@material-ui/icons/List'
import ProfileIcon from '@material-ui/icons/AccountBox'
import LogoutIcon from '@material-ui/icons/PowerSettingsNew'
import BackIcon from '@material-ui/icons/ArrowBack'

const styles = {
  drawer: {
    width: 300,
  },
  header: {
    height: 200,
    background: '#2799b7'
  },
  appBar: {
    background: '#2799b7'
  },
  titleText : {
    color : '#4d7309'
  }
}

class App extends React.Component {
  state = {
    drawer: false,
    back : false
  }

  toggleDrawer = () => {
    this.setState({
      drawer: !this.state.drawer
    })
  }

  // toggleBack = () => {
  //   this.setState({
  //     drawer: !this.state.back
  //   })
  // }

  render() {
    return (
      <Router>
        <>
          <AppBar position="static" style={styles.appBar}>
            <Toolbar>
              {this.state.back
                ?   <IconButton color="inherit" onClick={this.toggleDrawer}>
                      <BackIcon />
                    </IconButton>
                :   <IconButton color="inherit" onClick={this.toggleDrawer}>
                      <MenuIcon />
                    </IconButton>
              } 


              <Typography variant="h6">
                Menu React
                </Typography>
            </Toolbar>
          </AppBar>
          <Drawer open={this.state.drawer} onClose={this.toggleDrawer}>
            <header style={styles.header} >
            </header>
            <List style={styles.drawer}>

              <Link to="/">
                <ListItem onClick={this.toggleDrawer}>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>
              </Link>

              <Link to="/items">
                <ListItem onClick={this.toggleDrawer}>
                  <ListItemIcon>
                    <ItemListIcon />
                  </ListItemIcon>
                  <ListItemText primary="Item List" />
                </ListItem>
              </Link>

              <Link to="/profile">
                <ListItem onClick={this.toggleDrawer}>
                  <ListItemIcon>
                    <ProfileIcon />
                  </ListItemIcon>
                  <ListItemText primary="Profile" />
                </ListItem>
              </Link>

              <Link to="/logout">
                <ListItem onClick={this.toggleDrawer}>
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItem>
              </Link>

            </List>
          </Drawer>

          <div>
            <Route exact path="/" component={Home} />
            <Route path="/items" component={Items} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/profile/:name/:age" component={ProfileDetail} />
            <Route path="/logout" component={Logout} />
          </div>

        </>

      </Router>

    )
  }
}

const Home = (props) => {
  return (
    <div>
      <h1>Home View</h1>
    </div>
  )

}

const Items = (props) => {
  return (
    <div>
      <h1>Items View</h1>
    </div>
  )

}

const Profile = (props) => {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        <li>
          <Link to="/profile/nyi/23">Go to Nyi</Link>
        </li>
        <li>
          <Link to="/profile/zaw/23" >Go to Zaw</Link>
        </li>
      </ul>
    </div>
  )
}

const Logout = (props) => {
  return (
    <div>
      <h1>Htwet tp lay </h1>
    </div>
  )
}

const ProfileDetail = (props) => {
  return (
    <>
      <h5>
        Hello
      </h5>
      <h1 style={styles.titleText}>
        Your name : {props.match.params.name}
      </h1>
      <h5>
        Sorr deee plll ha ha ha
      </h5>
      <h1 style={styles.titleText}>
        Your age : {props.match.params.age}
      </h1>
    </>
  )
}



export default App;
