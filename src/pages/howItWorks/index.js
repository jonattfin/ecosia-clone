import React from 'react';
import { Button, Intent } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

import styles from './styles.module.scss';
import images from './images';

export default () => {
  return (
    <div className={styles.how_it_works}>
      <div className={styles.first_screen}>
        <div className={styles.title}>Plant trees while you search the web</div>
        <div className={styles.separator}>&nbsp;</div>
        <div className={styles.sub_title}>We use the profit we make from your searches to plant trees where they are needed most. <br />Get the free browser extension and plant trees with every search.</div>
        <div className={styles.separator}>&nbsp;</div>
        <div>
          <Button icon={IconNames.ADD} intent={Intent.PRIMARY} large text={'Add Ecosia to Firefox'} />
        </div>
      </div>
      <div className={styles.brands}>
        {getBrands().map((brand, index) => (<img key={`brand_image_${index}`} className={styles.image} src={brand} alt='tdlr'></img>))}
      </div>
      <div className={styles.how_it_works_screen}>
        <div className={styles.header}>
          <div className={styles.title}>How it works</div>
        </div>
        <div className={styles.images}>
          {getImages().map((item, index) => (
            <div key={`image_${index}`}>
              <img className={styles.image} src={item.image} alt='tdlr'></img>
              <div className={styles.text}>{item.text}</div>
            </div>
          ))}
        </div>

      </div>
      <div className={styles.graphics}>
        <div className={styles.header}>
          <div className={styles.title}>Over 57 million trees planted</div>
        </div>
        <div className={styles.images}>
          {getImages().map((item, index) => (
            <div key={`image_${index}`}>
              <img className={styles.image} src={item.image} alt='tdlr'></img>
              <div className={styles.text}>{item.text}</div>
            </div>
          ))}
        </div>

      </div>
    </div >
  );
}

function getBrands() {
  const { upWorthyImage, scientificImage, guardianImage, salonImage, forbesImage } = images;
  return [upWorthyImage, scientificImage, guardianImage, salonImage, forbesImage];
}

function getImages() {
  const { ecosiaImage, adsImage, incomeImage } = images;
  return [
    { image: ecosiaImage, text: 'You search the web with Ecosia.' },
    { image: adsImage, text: 'Search ads generate income for Ecosia.' },
    { image: incomeImage, text: 'Ecosia uses this income to plant trees.' },
  ];
}
