/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import { title, html } from './index.md';
import 'aframe';
import 'aframe-mouse-cursor-component';
import carImage from '../../public/car.jpg';

class HomePage extends React.Component {
  static propTypes = {
    articles: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }).isRequired).isRequired,
  };

  state = {
    modal: false,
  }

  componentDidMount() {
    document.title = title;
    for(let target of document.querySelectorAll('.colider')) {
      target.addEventListener('click', (e) => {
        if (!e.detail.cursorEl)
          this.setState({ modal: true });
      });
      target.addEventListener('mouseenter', (e) => {
        if (e.detail.cursorEl)
          e.target.setAttribute('material', 'color', 'orange');
      });
      target.addEventListener('mouseleave', (e) => {
        if (e.detail.cursorEl)
          e.target.setAttribute('material', 'color', 'skyblue')
      });
    }
  }

  render() {
    const { modal } = this.state;
    return (
      <Layout className={s.content}>
        {
          modal ?
            <div style={{position: 'fixed', top: 0, left: 0, zIndex: 9, width: '100%', height: '100%', background: 'rgba(0,0,0,0.4)'}}>
              <div style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: '80%', backgroundColor: 'white'}}>
                <button onClick={()=>this.setState({ modal: false })}>닫기</button>
              </div>
            </div> : null
        }
        <a-scene embedded vr-mode-ui="enabled: false">
          <a-assets>
            <video id="video" src="../videoplayback.mp4"
                   autoplay loop crossorigin></video>
          </a-assets>

          <a-videosphere src="#video" rotation="0 180 0"></a-videosphere>
        </a-scene>

        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <p>
          <br /><br />
        </p>
      </Layout>
    );
  }

}

export default HomePage;
