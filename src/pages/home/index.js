import React from 'react';
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import Counter from './components/counter';

import "./style.scss";
import ImageSectionA from './629dc59.png'

export default () => (
  <div>
    <section>
      <InputGroup style={{ width: '40vw' }}>
        <Input placeholder="Search the web to plant trees..." />
        <InputGroupAddon addonType="append">
          <InputGroupText>
            <FontAwesomeIcon icon={faSearch} color='goldenrod'></FontAwesomeIcon>
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <Counter />
      <img src={ImageSectionA} className="image-wrapper" alt="nice view from the window" />
    </section>
    <section>
      b
    </section>
    <section>
      c
    </section>
  </div >
)
