import React from "react";
import { Button } from 'reactstrap';
import _ from 'lodash';
import { Form, FormGroup, Input } from 'reactstrap';
// import { Footer } from '../components';

import './styles.scss';
import images from './images';

export default () => (
  <div className="aboutUs">
    <section className="section">
      <div className="section section__picture section--fullHeight">
        <div className="section--text">We believe in everyone's power to do good</div>
        <Button color="primary" size="lg">Add Ecosia to firefox</Button>
      </div>

    </section>
    <section className="section section--fullHeight">
      <div className="section--text">
        <h1>
          Ecosia is a social business founded in 2009 after a trip around the world
        </h1>
      </div>
      <div className="section--separator">&nbsp;</div>
      <div className="history">
        <div className="history__item">
          <div className="history__item--title">December 2009</div>
          <div>Ecosia is born</div>
          <div>Christian founded Ecosia.org after a trip around the world helped him understand the problems of deforestation.</div>
        </div>
        <div className="history__item">
          <div className="history__item--title">2009 - 2011</div>
          <div>People's choice</div>
          <div>Ecosia won several awards for its clever concept and speedy growth in Europe and beyond.</div>
        </div>
        <div className="history__item">
          <div className="history__item--title">April 2014</div>
          <div>First German B Corp</div>
          <div>Ecosia was the first German company to become a B Corporation thanks to its social business model.</div>
        </div>
        <div className="history__item">
          <div className="history__item--title">April 2018</div>
          <div>25 million trees</div>
          <div>A planting milestone! That same year, Ecosia also builds its own solar energy plant to power every search.</div>
        </div>
      </div>
    </section>
    <section className="section section--fullHeight">
      <div className="section--text">
        <h1>
          Meet the team
        </h1>
        <h3>
          Our international team is based in Berlin, Germany. Click on any of these fine folks to learn more.
        </h3>
      </div>
      <div className="grid-container">
        {getTeamMembers().map(member => (
          <div key={member.id}>
            <img className="grid-container__image" src={member.image} alt={member.name}></img>
            <div>{member.name}</div>
            <div>{member.position}</div>
          </div>
        ))}
      </div>
    </section>
    <section className="section section--background section--halfHeight">
      <div className="section--text">
        <h1>
          We're hiring!
        </h1>
        <h3>
          Want to help change the world? Let's team up. Apply to help us build great products and services that can make the world a more sustainable place. We can't wait to hear from you.
        </h3>
      </div>
      <div className="section--separator">&nbsp;</div>
      <Button color="primary" size="lg">See openings</Button>
    </section>
    <section className="section section--halfHeight">
      <div className="section--text">
        <h1>
          Contact us
        </h1>
        <h3>
          For questions about Ecosia check our FAQ first. If you don't see what you are looking for, drop us a line!
        </h3>
      </div>
      <div className="section--separator">&nbsp;</div>
      <div className="form-container">
        <Form>
          <FormGroup>
            <Input type="textarea" name="text" id="exampleText" placeholder="write your message here" />
          </FormGroup>
          <FormGroup>
            <Input type="email" name="email" id="exampleEmail" placeholder="email" />
          </FormGroup>
        </Form>
      </div>
      <Button color="primary" size="lg">Send</Button>
      <img className="savanah" src={images.SavanahImage} alt="nice view from the window" />
    </section>
    <section className="section section--halfHeight">
      <div className="footer">
        <div>
          <div><img src={images.BCorporationImage} alt="B Corporation"/></div>
        </div>
        <div>
          <div className="footer__title">Sitemap</div>
          <div><a href="http://localhost:3000/aboutUs">News</a></div>
          <div><a href="http://localhost:3000/aboutUs">How ecosia works</a></div>
          <div><a href="http://localhost:3000/aboutUs">About us</a></div>
          <div><a href="http://localhost:3000/aboutUs">Mobile app</a></div>
          <div><a href="http://localhost:3000/aboutUs">Privacy</a></div>
          <div><a href="http://localhost:3000/aboutUs">Settings</a></div>
        </div>
        <div>
          <div className="footer__title">Resources</div>
          <div><a href="http://localhost:3000/aboutUs">Faq</a></div>
          <div><a href="http://localhost:3000/aboutUs">Advertise on Ecosia</a></div>
          <div><a href="http://localhost:3000/aboutUs">Financial reports</a></div>
          <div><a href="http://localhost:3000/aboutUs">Blog</a></div>
          <div><a href="http://localhost:3000/aboutUs">Shop</a></div>
          <div><a href="http://localhost:3000/aboutUs">Press</a></div>
          <div><a href="http://localhost:3000/aboutUs">Jobs</a></div>
        </div>
        <div className="footer__shrink">
          <div className="footer__title">Imprint</div>
          <div>
            Ecosia GmbH
            Schinkestraße 9
            12047 Berlin, Germany
          </div>
          <div>&nbsp;</div>
          <div>
            Chairman Christian Kroll
            VAT ID: DE273999090
            Commercial Register:
            HRB 170873, Amtsgericht
            Charlottenburg
          </div>
        </div>
        <div>
          <div className="footer__title">Apps</div>
          <div><img src={images.AppStoreImage} alt="app store"/></div>
          <div>&nbsp;</div>
          <div><img src={images.PlayStoreImage} alt="play store"/></div>
        </div>
      </div>
      <div className="footer__line">&nbsp;</div>
      <div>&nbsp;</div>
      {/* <Footer/> */}
    </section>
  </div>
);

function getTeamMembers() {
  return _.range(1, 9).map(i => {
    return {
      id: i,
      image: 'https://info.ecosia.org/assets/images/about/headshots/alexis-5377ebda36.jpg',
      name: 'lorem ipsum',
      position: 'lorem ipsum x2',
      description: 'description'
    }
  })
}
