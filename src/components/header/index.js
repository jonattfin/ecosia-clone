import React from 'react'
import {
  Button,
  Position,
  Popover,
  Menu,
  MenuItem,
  Tag,
} from "@blueprintjs/core";
import {
  Route,
} from 'react-router-dom'

import images from './images';
import styles from './styles.module.scss';

const menu = createMenu();

export default ({ model = ({ payload: {} }), }) => {
  let showTrees = typeof window !== undefined && window.location.pathname === '/';

  return (
    <div className={styles.header}>
      {showTrees && (
        <Tag className={styles.tree} icon={'tree'} round>
          {model.payload.numberOfSearches}
        </Tag>
      )}
      <Popover content={menu} position={Position.BOTTOM_LEFT}>
        <Button icon="menu" />
      </Popover>
    </div>
  );
};

function createMenu() {
  const pages = [
    { url: '/', text: 'Home', icon: "home", },
    { url: '/how-it-works', text: 'How Ecosia works', icon: "build", },
    { url: '/aboutUs', text: 'About us', icon: 'help' },
    { url: '/mobile', text: 'Mobile app', icon: 'mobile-phone' },
    { url: '/privacy', text: 'Privacy', icon: 'shield' },
  ];

  const onClick = (history, url) => () => history.push(url);

  return (
    <Menu>
      <Route render={({ history }) => (
        <React.Fragment>
          {pages.map(({ icon, text, url }, index) => <MenuItem key={`menuItem_${index}`} icon={icon} text={text} onClick={onClick(history, url)} />)}
        </React.Fragment>
      )}>
      </Route>
    </Menu>
  );
}
