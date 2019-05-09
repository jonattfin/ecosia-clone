import React, { useState } from 'react';
import {
  InputGroup, InputGroupText, InputGroupAddon, Input, Button,
  Card, CardImg, CardText, CardBody, CardTitle, Spinner
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons'

import './styles.scss';
import images from './images';
import Counter from './components/counter';
import { Footer } from '../components';

export default (props) => {
  const [query, setQuery] = useState(0);

  const { actions, model } = props;
  const { payload } = model;

  return (
    <div className="home">
      <section className="section">
        <img className="logo" src={images.LogoImage} alt="logo"></img>
        <div className="search">
          <InputGroup>
            <Input
              placeholder="Search the web to plant trees..."
              onChange={(ev) => setQuery(ev.target.value)}
              onKeyUp={(ev) => { if (ev.keyCode === 13) { actions.search(query); } }}
            />
            <InputGroupAddon addonType="append">
              <InputGroupText>
                {payload.searchInProgress && <Spinner size="sm" color="info" />}
                {!payload.searchInProgress && <FontAwesomeIcon icon={faSearch} color='goldenrod' onClick={() => actions.search(query)} ></FontAwesomeIcon>}
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </div>
        {payload.data.length > 0 && JSON.stringify(payload.data)}
        <Counter />
        <div className="caret">
          <a href="#womanWithCrops">
            <Button color="info" > <FontAwesomeIcon icon={faCaretDown} /> </Button>
          </a>
        </div>
        <img className="savanah" src={images.SavanahImage} alt="nice view from the window" />
      </section>
      <section id="womanWithCrops" className="section">
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
      <section className="section section-internet">
        <h2>We stand for a better internet</h2>
        <div className="internet">
          <div className="card">
            <Card>
              <CardImg top src={images.TransparencyImage} alt="Card image cap" />
              <CardBody>
                <CardTitle className="card--centered"><b>Completely transparent</b></CardTitle>
                <CardText>We publish our monthly financial reports, so you see exactly where the income from your searches goes.</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="card">
            <Card>
              <CardImg top src={images.CoNeutralImage} alt="Card image cap" />
              <CardBody>
                <CardTitle className="card--centered"><b>More than CO2 neutral</b></CardTitle>
                <CardText>Our servers run on 100% renewable energy, and every search request removes 1kg of CO<sub>2</sub> from the atmosphere.</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="card">
            <Card>
              <CardImg top src={images.PrivacyImage} alt="Card image cap" />
              <CardBody>
                <CardTitle className="card--centered"><b>Privacy friendly</b></CardTitle>
                <CardText>We don’t sell your data to advertisers, have no third party trackers and anonymize all searches within one week.</CardText>
              </CardBody>
            </Card>
          </div>
        </div>
        <div>
          <Button color="primary" size="lg">Add Ecosia to firefox</Button>
        </div>
        <div>
          Follow our journey
      </div>
        <Footer />
      </section>
    </div >
  )
}


