
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

import {
  Button
} from 'reactstrap';

import './styles.scss';

export default () => (
  <div>
    {getIcons().map((icon, index) => (
      <Button key={`button_${index}`} className="button" color="info"><FontAwesomeIcon icon={icon}></FontAwesomeIcon></Button>
    ))}
  </div>
)

function getIcons() {
  return [faFacebook, faTwitter, faYoutube, faInstagram, faLinkedin];
}
