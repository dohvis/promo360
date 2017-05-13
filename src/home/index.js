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
    items: {
      parking: {
        title: "전자식 주차브레이크",
        msg: `
          크래쉬패드의 높이를 낮추고 수평적인 아키텍처를 적용한 인테리어는 탁 트인 개방감과 넓고 안정적인 공간감을 연출합니다.
          엄선된 고급 소재와 깊이 있는 컬러, 새로운 플로팅 타입 디스플레이와 스마트 멀티미디어 시스템까지
          정교하게 다듬어진 디테일들이 품격있고 섬세한 취향을 만족시켜 드릴 것입니다.
        `,
        backgroundImage: "../../images/1/25_parking.png",
        enterMouseTimeStamp: 0,
        leaveMouseTimeStamp: 0,
      },
      headup: {
        title: "헤드업 디스플레이",
        msg: `
          그렌저에게 안전이란 앞 차와 사고가 나기전에, 뒤 차와 충돌하기 전에, 차선을 벗어나기 전에 미리 사고를 예방하는 것입니다.
          이 모든 것을 헤드업 디스플레이를 통해 실현하였습니다.
        `,
        backgroundImage: "../../images/1/24_headup.png",
      },
      speaker: {
        title: "프리미엄 사운드 시스템",
        msg: `
          12 스피커에서 울려퍼지는 JBL 프리미엄 사운드와 그렌저IG의 콜라보로 더욱 행복한 드라이빙을 선사합니다.
        `,
        backgroundImage: "../../images/1/23_speaker.png",
        enterMouseTimeStamp: 0,
        leaveMouseTimeStamp: 0,
      },
      switch: {
        title: "동승석 워크인 스위치",
        msg: `
          스마트 멀티미디어 시스템과 고품격 사운드 시스템 등 고급 준대형 세단이 가져야 할 모든 편의사양들이 적용되었습니다.
          당신의 삶을 스마트하게 케어할 수 있도록 그랜저가 한 발 더 앞서갑니다.
        `,
        backgroundImage: "../../images/1/22_switch.png",
        enterMouseTimeStamp: 0,
        leaveMouseTimeStamp: 0,
      },
      smartphone: {
        title: "스마트폰 무선충전",
        msg: `
          스마트 멀티미디어 시스템과 고품격 사운드 시스템 등 고급 준대형 세단이 가져야 할 모든 편의사양들이 적용되었습니다.
          당신의 삶을 스마트하게 케어할 수 있도록 그랜저가 한 발 더 앞서갑니다.
        `,
        backgroundImage: "../../images/1/21_smartphone.png",
        enterMouseTimeStamp: 0,
        leaveMouseTimeStamp: 0,
      },
      display: {
        title: "디스플레이",
        msg: `
          주행중 운전자의 피로, 부주의 운전패턴을 단계별로 분석해 휴식을 권유하는 ‘부주의 운전경보 시스템(DDA)’
          운전 상태를 5단계 레벨로 표시하며, 운전자의
          피로나 부주의한 운전 패턴으로 판단되면 팝업 메시지와 경보음을 통해
          휴식을 유도합니다.
        `,
        backgroundImage: "../../images/1/19_tired.png",
        enterMouseTimeStamp: 0,
        leaveMouseTimeStamp: 0,
      },
      back_seat: {
        title: "뒷좌석",
        msg: `
          크래쉬패드의 높이를 낮추고 수평적인 아키텍처를 적용한 인테리어는 탁 트인 개방감과 넓고 안정적인 공간감을 연출합니다.
          엄선된 고급 소재와 깊이 있는 컬러, 새로운 플로팅 타입 디스플레이와 스마트 멀티미디어 시스템까지
          정교하게 다듬어진 디테일들이 품격있고 섬세한 취향을 만족시켜 드릴 것입니다.
        `,
        backgroundImage: "../../images/1/15_back_seat.png",
        enterMouseTimeStamp: 0,
        leaveMouseTimeStamp: 0,
      },
      driver_seat: {
        title: "운전석",
        msg: `
          크래쉬패드의 높이를 낮추고 수평적인 아키텍처를 적용한 인테리어는 탁 트인 개방감과 넓고 안정적인 공간감을 연출합니다.
          엄선된 고급 소재와 깊이 있는 컬러, 새로운 플로팅 타입 디스플레이와 스마트 멀티미디어 시스템까지
          정교하게 다듬어진 디테일들이 품격있고 섬세한 취향을 만족시켜 드릴 것입니다.
        `,
        backgroundImage: "../../images/1/15_driver_seat.png",
        enterMouseTimeStamp: 0,
        leaveMouseTimeStamp: 0,
      },
      navi: {
        title: "네비게이션",
        msg: `
          스마트 멀티미디어 시스템과 고품격 사운드 시스템 등 고급 준대형 세단이 가져야 할 모든 편의사양들이 적용되었습니다.
          당신의 삶을 스마트하게 케어할 수 있도록 그랜저가 한 발 더 앞서갑니다.
        `,
        backgroundImage: "../../images/1/16_display_2.png",
        enterMouseTimeStamp: 0,
        leaveMouseTimeStamp: 0,
      },
      gearbox: {
        title: "기어박스",
        msg: `
          유럽산 명품 8단 오토미션과 함께 부드러운 드라이빙을 즐겨보세요.
        `,
        backgroundImage: "../../images/1/24_headup.png",
        enterMouseTimeStamp: 0,
        leaveMouseTimeStamp: 0,
      },
      stearing: {
        title: "스티어링 휠",
        msg: `
          차선을 인식하고 차선이탈이 예상되면 조향을 보조하여 차선이탈 상황을
          방지해 줍니다. 차선 이탈경보 기능, 차선 유지보조 기능, 능동 조향보조
          기능 중 하나를 선택하여 사용할 수 있습니다.
        `,
        backgroundImage: "../../images/1/17_stearing.png",
        enterMouseTimeStamp: 0,
        leaveMouseTimeStamp: 0,
      },
    }
  };

  componentDidMount() {
    document.title = title;
    for(let target of document.querySelectorAll('.colider')) {
      target.addEventListener('click', (e) => {
        if (!e.detail.cursorEl)
          this.setState({ modal: true, modalId: e.target.id, });
      });
      target.addEventListener('mouseenter', (e) => {
        if (e.detail.cursorEl) {
          const item = this.state.items[e.target.id];
          item.enterMouseTimeStamp = performance.now();
          e.target.setAttribute('material', 'color', 'orange');
        }
      });
      target.addEventListener('mouseleave', (e) => {
        if (e.detail.cursorEl) {
          const item = this.state.items[e.target.id];
          item.leaveMouseTimeStamp = performance.now();
          this.sendMouseStayingPeriod(item);
          e.target.setAttribute('material', 'color', 'skyblue')
        }
      });
    }
  }

  sendMouseStayingPeriod(item) {
    console.log(item);
  }

  openModal(modalId) {
    // TODO: sendBtnClickEvent();
    console.log('click', modalId);
    const modalData = this.state.items;
    return (
      <div className={s.modalBackdrop}>
        <div className={s.modal}>
          <section className={s.wrapper}>
            <div className={s.photo} style={{ backgroundImage: `url(${modalData[modalId].backgroundImage})` }} >
              </div>
            <h4 className={s.title}>{modalData[modalId].title}</h4>
            <article className={s.description}>
              {modalData[modalId].msg}
            </article>
          </section>
          <button className={s.close_button} onClick={()=>this.closeModal({ modal: false })}>✕</button>
        </div>
      </div>
    );
  }

  closeModal() {
    this.setState({ modal: false });
  }

  render() {
    const ratio = "1.5";
    const opacity = "0.7";
    const { modal, modalId } = this.state;

    return (
      <Layout className={s.content}>
        {
          modal ? this.openModal(modalId) : null
        }
        <a-scene embedded vr-mode-ui="enabled: false">

          <a-box opacity={opacity} depth={ratio} height={ratio} width={ratio} position="2 -8 1" rotation="30 30 0" color="skyblue" id="parking" class="colider">
            <a-animation attribute="rotation" dur="2000" fill="backwards" repeat="indefinite" to="30 30 360"></a-animation>
          </a-box>

          <a-box opacity={opacity} depth={ratio} height={ratio} width={ratio} position="15 4 -5" rotation="30 30 0" color="skyblue" id="headup" class="colider">
            <a-animation attribute="rotation" dur="2000" fill="backwards" repeat="indefinite" to="30 30 360"></a-animation>
          </a-box>

          <a-box opacity={opacity} depth={ratio} height={ratio} width={ratio} position="-2 -3 -5" rotation="30 30 0" color="skyblue" id="speaker" class="colider">
            <a-animation attribute="rotation" dur="2000" fill="backwards" repeat="indefinite" to="30 30 360"></a-animation>
          </a-box>

          <a-box opacity={opacity} depth={ratio} height={ratio} width={ratio} position="-10 -5 10" rotation="30 30 0" color="skyblue" id="switch" class="colider">
            <a-animation attribute="rotation" dur="2000" fill="backwards" repeat="indefinite" to="30 30 360"></a-animation>
          </a-box>

          <a-box opacity={opacity} depth={ratio} height={ratio} width={ratio} position="0 -8 3" rotation="30 30 0" color="skyblue" id="smartphone" class="colider">
            <a-animation attribute="rotation" dur="2000" fill="backwards" repeat="indefinite" to="30 30 360"></a-animation>
          </a-box>

          <a-box opacity={opacity} depth={ratio} height={ratio} width={ratio} position="20 0 -1" rotation="30 30 0" color="skyblue" id="display" class="colider">
            <a-animation attribute="rotation" dur="2000" fill="backwards" repeat="indefinite" to="30 30 360"></a-animation>
          </a-box>

          <a-box opacity={opacity} depth={ratio} height={ratio} width={ratio} position="-8 -5 20" rotation="30 30 0" color="skyblue" id="back_seat" class="colider">
            <a-animation attribute="rotation" dur="2000" fill="backwards" repeat="indefinite" to="30 30 360"></a-animation>
          </a-box>

          <a-box opacity={opacity} depth={ratio} height={ratio} width={ratio} position="5 -8 9" rotation="30 30 0" color="skyblue" id="driver_seat" class="colider">
            <a-animation attribute="rotation" dur="2000" fill="backwards" repeat="indefinite" to="30 30 360"></a-animation>
          </a-box>

          <a-box opacity={opacity} depth={ratio} height={ratio} width={ratio} position="8 -1 -7" rotation="30 30 0" color="skyblue" id="navi" class="colider">
            <a-animation attribute="rotation" dur="2000" fill="backwards" repeat="indefinite" to="30 30 360"></a-animation>
          </a-box>

          <a-box opacity={opacity} depth={ratio} height={ratio} width={ratio} position="6 -14 -8" rotation="30 30 0" color="skyblue" id="gearbox" class="colider">
            <a-animation attribute="rotation" dur="2000" fill="backwards" repeat="indefinite" to="30 30 360"></a-animation>
          </a-box>

          <a-box opacity={opacity} depth={ratio} height={ratio} width={ratio} position="15 -1 4" rotation="30 30 0" color="skyblue" id="stearing" class="colider">
            <a-animation attribute="rotation" dur="2000" fill="backwards" repeat="indefinite" to="30 30 360"></a-animation>
          </a-box>

          <a-entity position="0 1.8 4">
            <a-entity camera look-controls mouse-cursor>
              <a-cursor fuse="false" material="color: yellow; opacity: 0.2"></a-cursor>
            </a-entity>
          </a-entity>

          <a-sky src={"../car.jpg"} rotation="0 -130 0"></a-sky>
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
