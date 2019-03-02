import React from 'react';
import { InputGroup, InputGroupText, InputGroupAddon, Input, Button } from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faFilePdf, faFileExcel } from '@fortawesome/free-solid-svg-icons'

import Counter from './components/counter';

import styles from './index.module.scss';

import SavanahImage from './images/savanah.png'
import WomanWithCropsImage from './images/woman-with-crops.jpg'
import WorldMapImage from './images/world-map.png'
import LogoImage from './images/logo.png'

import TransparencyImage from './images/transparency.png'
import CoNeutralImage from './images/co2-neutral.png'
import PrivacyImage from './images/privacy-friendly.png'

export default () => (
  <div>
    <section>
      <img className={styles.logoImageContainer} src={LogoImage} alt="logo"></img>
      <InputGroup style={{ width: '40vw' }}>
        <Input placeholder="Search the web to plant trees..." />
        <InputGroupAddon addonType="append">
          <InputGroupText>
            <FontAwesomeIcon icon={faSearch} color='goldenrod'></FontAwesomeIcon>
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <Counter />
      <img src={SavanahImage} className={styles.savanaContainer} alt="nice view from the window" />
    </section>
    <section>
      <div className={styles.textContainer}>
        <img className={styles.womanWithCropsContainer} src={WomanWithCropsImage} alt="woman with crops" />
        <div className={styles.textWidth}>
          <h2>
            You search the web, we plant trees
          </h2>
          <h4>
            Ecosia is like any other search engine, with one major difference: we use our profits to plant trees.
          </h4>
          <div>
            <Button color="primary" size="lg">Add Ecosia to firefox</Button>
          </div>
        </div>

      </div>
      <div className={styles.textContainer}>
        <div className={styles.textWidth}>
          <h2>
            We plant trees where they’re needed most
          </h2>
          <h4>
            Our trees benefit people, the environment and local economies.
          </h4>
        </div>
        <img className={styles.worldMapImageContainer} src={WorldMapImage} alt="woman with crops" />
      </div>
    </section>
    <section className={styles.womenWithSeedsContainer}>
      <div className={styles.womanTextcontainer}>
        <h2>
          "We plant native acacia trees, because they make the soil more fertile. With our earnings we started a communal savings account for women to borrow and start their own businesses."
      </h2>
        <hr />
        <h4>
          Sara, 42
          Mechisho, Ethiopia
      </h4>
      </div>
      <div className={styles.specialSeparator}>&nbsp;</div>
    </section>
    <section>
      <h1>We stand for a better internet</h1>
      <div className={styles.betterInternet}>
        <div className={styles.cardContainer}>
          <Card>
            <CardImg top src={TransparencyImage} alt="Card image cap" />
            <CardBody>
              <CardTitle><b>Completely transparent</b></CardTitle>
              <CardText>We publish our monthly financial reports, so you see exactly where the income from your searches goes.</CardText>
            </CardBody>
          </Card>
        </div>
        <div className={styles.cardContainer}>
          <Card>
            <CardImg top src={CoNeutralImage} alt="Card image cap" />
            <CardBody>
              <CardTitle><b>More than CO2 neutral</b></CardTitle>
              <CardText>Our servers run on 100% renewable energy, and every search request removes 1kg of CO<sub>2</sub> from the atmosphere.</CardText>
            </CardBody>
          </Card>
        </div>
        <div className={styles.cardContainer}>
          <Card>
            <CardImg top src={PrivacyImage} alt="Card image cap" />
            <CardBody>
              <CardTitle><b>Privacy friendly</b></CardTitle>
              <CardText>We don’t sell your data to advertisers, have no third party trackers and anonymize all searches within one week.</CardText>
            </CardBody>
          </Card>
        </div>
      </div>
      <div>
        <Button color="primary" size="lg">Add Ecosia to firefox</Button>
      </div>
      {/* <div className={styles.footer}>
        Follow our journey <br />
        <FontAwesomeIcon icon={faFilePdf}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faFileExcel}></FontAwesomeIcon>
      </div> */}
    </section>
  </div >
)
