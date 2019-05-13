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

import styles from './styles.module.scss';

const menu = createMenu();

export default ({ model = {} }) => (
  <div className={styles.header}>
    <Tag className={styles.tree} icon={'tree'} round>
      {model.payload.numberOfSearches}
    </Tag>
    <Popover content={menu} position={Position.BOTTOM_LEFT}>
      <Button icon="menu" />
    </Popover>
  </div>
);

function createMenu() {
  const pages = [
    { url: '/aboutUs', text: 'About us', icon: 'map' },
    { url: '/howItWorks', text: 'How Ecosia works', icon: "th", },
    { url: '/mobile', text: 'Mobile app', icon: 'zoom-to-fit' },
    { url: '/settings', text: 'Settings', icon: 'cog' },
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
