import React, { useState } from 'react';
import { InputGroup, Button } from "@blueprintjs/core";

import { Footer } from '../../components'

import styles from './styles.module.scss';
import images from './images';
import { Counter } from './components';


export default (props) => {
  const [query, setQuery] = useState(0);

  const { actions, model } = props;
  const { payload } = model;

  return (
    <div className={styles.home}>
      <section className={styles.screen}>
        <div>
          <img className={styles.logo} src={images.logoImage} alt="logo" />
        </div>
        <div className={styles.counter}>
          <InputGroup className={styles.searchBox} placeholder="Search the web to plant trees..." large />
          <div>&nbsp;</div>
          <div className={styles.counter__wrapper}>
            <Counter />
            <div>&nbsp;</div>
            <Button icon={'arrow-down'} intent="primary" large />
          </div>
        </div>
        <div>
        </div>
        <div>
          <img className={styles.savanah} src={images.savanahImage} alt="savanah" />
        </div>
      </section>
      <section className={styles.footer}>
        <Footer />
      </section>
    </div >
  )
}


