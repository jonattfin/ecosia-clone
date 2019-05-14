import React, { useState } from 'react';
import { Button, Intent, InputGroup, ControlGroup } from "@blueprintjs/core";

import { Links, Footer } from "../../components";

import styles from './styles.module.scss';
import images from './images';

export default () => {
  const [setPhone] = useState('');

  return (
    <div className={styles.mobile}>
      <section className={styles.first_screen}>
        <div className={styles.title}>
          Ecosia for Mobile
      </div>
        <div className={styles.subtitle}>
          Plant trees while searching the web with your mobile phone or tablet.
      </div>
        <div className={styles.phone}>
          <ControlGroup>
            <InputGroup
              placeholder="123 456 7890"
              large
              onChange={(ev) => { setPhone(ev.target.value); }}
            />
            <div className={styles.separator}>&nbsp;</div>
            <Button intent={Intent.PRIMARY} large text={'Send app link'} />
          </ControlGroup>
        </div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div >
          <img className={styles.logo} src={images.appStoreImage} alt={"app store"} />
          <img className={styles.logo} src={images.playStoreImage} alt={"play store"} />
        </div>
      </section>
      <Links />
      <Footer />
    </div>
  );
}
