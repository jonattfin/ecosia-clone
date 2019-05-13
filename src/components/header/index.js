import React from 'react'
import {
  Button,
  Position,
  Popover,
  Menu,
  MenuItem,
  Tag,
} from "@blueprintjs/core";

import styles from './styles.module.scss';

export default ({ model = {} }) => (
  <div className={styles.header}>
    <Tag className={styles.tree} icon={'tree'} round>
      {model.numberOfSearches}
    </Tag>
    <Popover content={createMenu()} position={Position.BOTTOM_LEFT}>
      <Button icon="menu" />
    </Popover>
  </div>
);

function createMenu() {
  const pages = [
    { url: '/aboutUs', text: 'About us', icon: 'map' },
    { url: '/howItWorks', text: 'How Ecosia works', icon: "th", },
    { url: '/mobileApp', text: 'Mobile app', icon: 'zoom-to-fit' },
    { url: '/settings', text: 'Settings', icon: 'cog' },
  ];

  return (
    <Menu>
      {pages.map(({ icon, text }, index) => <MenuItem key={`menuItem_${index}`} icon={icon} text={text} />)}
    </Menu>
  );
}

// class CustomDropDown extends React.Component {
//   state = { dropdownOpen: false }

//   toggle = () => {
//     this.setState({ dropdownOpen: !this.state.dropdownOpen });
//   }

//   onClick = (url, history) => () => {
//     history.push(url);
//   }

//   render() {
//     return (
//       <div></div>
//       <Dropdown direction="left" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
//         <DropdownToggle>
//           <FontAwesomeIcon icon={faBars} color="goldenrod" />
//         </DropdownToggle>
//         <DropdownMenu>
//           {pages.map((page, index) => (
//             <Route key={`route_${index}`} render={({ history }) => (
//               <DropdownItem onClick={this.onClick(page.url, history)}>{page.description}</DropdownItem>
//             )} />
//           ))}
//         </DropdownMenu>
//       </Dropdown>
//     );
//   }
// }