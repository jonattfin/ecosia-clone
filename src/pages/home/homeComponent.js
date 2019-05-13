import React, { useState } from 'react';
import { InputGroup, Button, Spinner, Intent } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

import { Footer } from '../../components'

import { Counter } from './components';
import images from './images';
import styles from './styles.module.scss';

export default (props) => {
  const [query, setQuery] = useState('');

  const { actions, model } = props;
  const { payload } = model;
  const { data, searchInProgress } = payload;

  return (
    <div className={styles.home}>
      <section className={styles.screen}>
        <div>
          <img className={styles.logo} src={images.logoImage} alt="logo" />
        </div>
        <div className={styles.counter}>
          <InputGroup
            className={styles.searchBox}
            placeholder="Search the web to plant trees..."
            large
            leftIcon={IconNames.SEARCH}
            onChange={(ev) => { setQuery(ev.target.value); }}
            onKeyDown={(ev) => { if (ev.keyCode === 13) { actions.search(query); } }}
          />
          <div>&nbsp;</div>
          {searchInProgress && <Spinner intent={Intent.PRIMARY} size={Spinner.SIZE_SMALL} />}
          <div className={styles.counter__wrapper}>
            {data}
            <Counter />
            <div>&nbsp;</div>
            <Button icon={IconNames.ARROW_DOWN} intent={Intent.PRIMARY} large />
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
