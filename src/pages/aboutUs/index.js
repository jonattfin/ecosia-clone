import React, { useState } from "react";
import { Button, Intent, InputGroup, FormGroup, ControlGroup, HTMLSelect } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import _ from 'lodash';

import { Footer, Links } from '../../components'

import styles from './styles.module.scss';
import images from './images';

export default () => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className={styles.aboutUs}>
      <section className={styles.first_screen}>
        <div className={styles.title}>We believe in everyone's power to do good</div>
        <div>
          <Button icon={IconNames.ADD} intent={Intent.PRIMARY} large text={'Add Ecosia to Firefox'} />
        </div>
        <div></div>
      </section>
      <section className={styles.second_screen}>
        <div className={styles.title}>Ecosia is a social business founded in 2009 after a trip around the world</div>
        <div className={styles.column}>
          {getTimePeriods().map((period, index) => (
            <div key={`period_${index}`} className={styles.column__item}>
              <div className={styles.time}>{period.time}</div>
              <div className={styles.subtitle}>{period.title}</div>
              <hr className={styles.line} />
              <div>{period.content}</div>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.meet_the_team_screen}>
        <div className={styles.title}>Meet the team</div>
        <div className={styles.subtitle}>Our international team is based in Berlin, Germany. Click on any of these fine folks to learn more.</div>
        <div className={styles.member}>
          {getTeamMembers().map((member, index) => (
            <div key={`member_${index}`} className={styles.member__item}>
              <div>
                <img className={styles.member__image} src={member.image} alt={member.name} />
              </div>
              <div className={styles.member__name}>{member.name}</div>
              <div >{member.position}</div>
            </div>
          ))}
        </div>
        <div></div>
      </section>
      <section className={styles.hiring_screen}>
        <div className={styles.title}>We're hiring!</div>
        <div className={styles.subtitle}>Want to help change the world? Let's team up. Apply to help us build great products and services that can make the world a more sustainable place. We can't wait to hear from you.</div>
        <div>
          <Button intent={Intent.PRIMARY} large text={'See openings'} />
        </div>
      </section>
      <section className={styles.contact_us_screen}>
        <div className={styles.title}>Contact us</div>
        <div className={styles.subtitle}>For questions about Ecosia check our FAQ first. <br />If you don't see what you are looking for, drop us a line!</div>
        <div >
          <FormGroup className={styles.formGroup}>
            <InputGroup
              className={styles.formItem}
              placeholder="Message"
              large
              onChange={(ev) => { setMessage(ev.target.value); }}
            />
            <InputGroup
              className={styles.formItem}
              placeholder="E-mail"
              large
              onChange={(ev) => { setEmail(ev.target.value); }}
            />
            <ControlGroup>
              <HTMLSelect options={getFilterOptions()} />
            </ControlGroup>
            <div className={styles.formItem}>
              For more info on how we handle your data, see our privacy policy.
          </div>
            <Button
              className={styles.formItem}
              intent={Intent.PRIMARY}
              large
              text={'Send'.toUpperCase()}
              onClick={() => alert(`message: ${message}, email: ${email}`)} />
          </FormGroup>
        </div>
        <div>
          <img className={styles.savanah_image} src={images.savanahImage} alt={'savanah'} />
        </div>
      </section>
      <Links />
      <section>
        <Footer />
      </section>
      <section className={styles.responsibility}>
        Ecosia GmbH does not assume responsibility for the content of sites to which it links and the way in which search results are displayed. To learn more please read our privacy policy and our terms of service.
      </section>
    </div>
  );
};

function getTimePeriods() {
  return [
    {
      time: 'December 2009',
      title: 'Ecosia is born',
      content: 'Christian founded Ecosia.org after a trip around the world helped him understand the problems of deforestation.'
    },
    {
      time: '2009 - 2011',
      title: 'People\'s choice',
      content: 'Ecosia won several awards for its clever concept and speedy growth in Europe and beyond.'
    },
    {
      time: 'April 2014',
      title: 'First German B Corp',
      content: 'Ecosia was the first German company to become a B Corporation thanks to its social business model.'
    },
    {
      time: 'April 2018',
      title: '25 million trees',
      content: 'A planting milestone! That same year, Ecosia also builds its own solar energy plant to power every search.'
    },
  ]
}

function getTeamMembers() {
  return _.range(1, 9).map(i => {
    return {
      image: 'https://info.ecosia.org/assets/images/about/headshots/alexis-5377ebda36.jpg',
      name: 'Alexis Baginer',
      position: 'Happiness officer',
      description: 'description'
    }
  })
}

function getFilterOptions() {
  return ["Subject", "Technical problem", "General inquiry", "Press inquiry"];
}
