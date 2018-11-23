import React, { Component } from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';
import SliderComponent from '../containers/Slider';
import Profile from '../containers/Profile';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'slider'
    }
  }

  componentDidMount() {
    this.props.fetchProfile();
  }

  render() {
  
    return (
      <div className="App">
        <header className="App-header">
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a onClick={ () => {this.setState({ currentTab: 'slider' })}}>GitHub Profile</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav pullRight>
              <NavItem eventKey={1} onClick={ () => {this.setState({ currentTab: 'slider' })}}>Slider</NavItem>
              <NavItem eventKey={2} onClick={ () => {this.setState({ currentTab: 'profile' })}}>Profile</NavItem>
            </Nav>
          </Navbar>
            {this.state.currentTab==='slider' ? <SliderComponent /> : false}
            {this.state.currentTab==='profile' ? <Profile /> : false}
        </header>
      </div>
    );
  }
}

export default App;
