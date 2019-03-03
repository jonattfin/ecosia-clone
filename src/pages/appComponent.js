import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { Badge } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTree, faBars } from '@fortawesome/free-solid-svg-icons'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// import logo from './logo.svg';
import './styles.scss';

const Home = lazy(() => import('./home'));
const AboutUs = lazy(() => import('./aboutUs'));

const pages = [{
  url: '/aboutUs', description: 'About us'
}, {
  url: '/howItWorks', description: 'How Ecosia works'
}, {
  url: '/mobileApp', description: 'Mobile app'
}];

class CustomDropDown extends React.Component {
  state = { dropdownOpen: false }

  toggle = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  }

  onClick = (url, history) => () => {
    history.push(url);
  }

  render() {
    return (
      <Dropdown direction="left" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle>
          <FontAwesomeIcon icon={faBars} color="goldenrod" />
        </DropdownToggle>
        <DropdownMenu>
          {pages.map((page, index) => (
            <Route key={`route_${index}`} render={({ history }) => (
              <DropdownItem onClick={this.onClick(page.url, history)}>{page.description}</DropdownItem>
            )} />
          ))}
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default (props) => (
  <Router>
    <div className="app">
      <div className="content">
        <div className="menu">
          <div>
            <FontAwesomeIcon icon={faTree} color="green" /> <Badge color="info">{props.model.numberOfSearches}</Badge>
          </div>
          <CustomDropDown />
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutUs" component={AboutUs} />
        </Switch>
      </Suspense>
    </div>
  </Router>
)
