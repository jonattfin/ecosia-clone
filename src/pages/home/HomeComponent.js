import React from 'react';
import {
  InputGroup, InputGroupText, InputGroupAddon, Input, Button,
  Card, CardImg, CardText, CardBody, CardTitle
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './styles.scss';
import images from './images';
import Counter from './components/counter';

export default (props) => (
  <div className="home">
    <section className="section">
      <img className="logo" src={images.LogoImage} alt="logo"></img>
      <div className="search">
        <InputGroup>
          <Input placeholder="Search the web to plant trees..." />
          <InputGroupAddon addonType="append">
            <InputGroupText>
              <FontAwesomeIcon icon={faSearch} color='goldenrod' onClick={() => props.actions.search('ducky duck')} ></FontAwesomeIcon>
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>

      <Counter />

      <img className="savanah" src={images.SavanahImage} alt="nice view from the window" />
    </section>
    <section className="section">
      <div className="text">
        <img className="womanWithCrops" src={images.WomanWithCropsImage} alt="woman with crops" />
        <div className="text--max-width">
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
      <div className="text">
        <div className="text--max-width">
          <h2>
            We plant trees where they’re needed most
          </h2>
          <h4>
            Our trees benefit people, the environment and local economies.
          </h4>
        </div>
        <img className="worldMap" src={images.WorldMapImage} alt="woman with crops" />
      </div>
    </section>
    <section className="sectionWithSeeds">
      <div className={"text--max-width"}>
        <h2>
          "We plant native acacia trees, because they make the soil more fertile. With our earnings we started a communal savings account for women to borrow and start their own businesses."
      </h2>
        <hr />
        <h4>
          Sara, 42
          Mechisho, Ethiopia
      </h4>
      </div>
      <div className="separator">&nbsp;</div>
    </section>
    <section className="section">
      <h1>We stand for a better internet</h1>
      <div className="internet">
        <div className="card">
          <Card>
            <CardImg top src={images.TransparencyImage} alt="Card image cap" />
            <CardBody>
              <CardTitle><b>Completely transparent</b></CardTitle>
              <CardText>We publish our monthly financial reports, so you see exactly where the income from your searches goes.</CardText>
            </CardBody>
          </Card>
        </div>
        <div className="card">
          <Card>
            <CardImg top src={images.CoNeutralImage} alt="Card image cap" />
            <CardBody>
              <CardTitle><b>More than CO2 neutral</b></CardTitle>
              <CardText>Our servers run on 100% renewable energy, and every search request removes 1kg of CO<sub>2</sub> from the atmosphere.</CardText>
            </CardBody>
          </Card>
        </div>
        <div className="card">
          <Card>
            <CardImg top src={images.PrivacyImage} alt="Card image cap" />
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
    </section>
  </div >
)
