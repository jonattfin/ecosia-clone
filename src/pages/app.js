import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { Badge } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faBars } from '@fortawesome/free-solid-svg-icons'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// import logo from './logo.svg';
import './styles.scss';

const Home = lazy(() => import('./home'));

class CustomDropDown extends React.Component {
  state = { dropdownOpen: false }

  toggle = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  }

  render() {
    return (
      <Dropdown direction="left" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle>
          <FontAwesomeIcon icon={faBars} color="goldenrod" />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>How Ecosia works</DropdownItem>
          <DropdownItem>About us</DropdownItem>
          <DropdownItem>Mobile app</DropdownItem>
          <DropdownItem>Privacy</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Settings</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default () => (
  <Router>
    <div className="app">
      <div className="content">
        <div className="menu">
          <div>
            <FontAwesomeIcon icon={faBell} color="goldenrod" /> <Badge color="info">4</Badge>
          </div>
          <CustomDropDown />
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Suspense>
    </div>
  </Router>
)
