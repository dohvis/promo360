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
        title: "한국 전쟁기념관",
        msg: `전쟁기념관은 대한민국 서울특별시 용산구 이태원로 29 에 위치한 기념관으로, 대한민국을 지켜온 항쟁과 전쟁에 대한 기록을 모으고 보존하는 곳이다. 전쟁에 대한 교훈을 통해 전쟁을 예방하고, 평화적 통일을 목적으로 한다. 1990년 9월 28일에 기공식이 있었다. 처음 건립된 때는 1993년 12월이며, 개관한 때는 1994년 6월 10일이다.`,
        backgroundImage: "../../images/2/1.jpg",
        enterMouseTimeStamp: 0,
        leaveMouseTimeStamp: 0,
      },
      headup: {
        title: "경복궁",
        msg: `경복궁은 대한민국 서울 세종로에 있는 조선 왕조의 법궁이다. 1395년에 창건하였다. ‘경복’은 시경에 나오는 말로 왕과 그 자손, 온 백성들이 태평성대의 큰 복을 누리기를 축원한다는 의미이다. 풍수지리적으로도 백악산을 뒤로 하고 좌우에는 낙산과 인왕산으로 둘러싸여 있어 길지의 요건을 갖추고 있다. 1592년, 임진왜란으로 인해 불탄 이후 그 임무를 창덕궁에 넘겨주었다가 1865년에 흥선대원군의 명으로 중건되었다.`,
        backgroundImage: "../../images/2/2.jpg",
      },
      speaker: {
        title: "창덕궁",
        msg: `창덕궁은 대한민국 서울특별시에 있는 조선 시대 궁궐로 동쪽으로 창경궁과 맞닿아 있다. 경복궁의 동쪽에 있어서 조선 시대에는 창경궁과 더불어 동궐이라 불렀다. 창덕궁은 비교적 원형이 잘 보존되어 있는 중요한 고궁이며, 특히 창덕궁 후원은 한국의 유일한 궁궐후원이라는 점과 한국의 정원을 대표한다는 점에서 그 가치가 높다. 1997년에 유네스코가 지정한 세계문화유산으로 등록되었다.`,
        backgroundImage: "../../images/2/3.jpg",
        enterMouseTimeStamp: 0,
        leaveMouseTimeStamp: 0,
      },
      switch: {
        title: "국립 중앙 박물관",
        msg: `국립중앙박물관은고고학·미술사학·역사학 및 인류학 분야에 속하는 문화재와 자료를 수집·보존 및 전시하여 일반 공중의 관람에 제공하며, 이에 관한 연구·조사와 전통문화의 계몽·홍보·보급 및 교류에 관한 사무를 관장하는 대한민국 문화체육관광부의 소속기관이다. 1972년 7월 19일 발족하였으며, 서울특별시 용산구 서빙고로 137에 위치한다. 관장은 차관급 정무직공무원으로 보한다.`,
        backgroundImage: "../../images/2/4.jpg",
        enterMouseTimeStamp: 0,
        leaveMouseTimeStamp: 0,
      },
      smartphone: {
        title: "N 서울 타워",
        msg: `N서울타워는 대한민국 서울특별시 용산구 용산동 2가 남산 공원 정상 부근에 위치한 전파 송출 및 관광용 타워이다. 1969년에 착공하여 1975년 7월 30일 완공되었다. 높이는 236.7 미터, 해발 479.7 미터이다. 수도권의 지상파 방송사들이 이 타워를 이용하여 전파를 송출한다. 전망대에서 서울 시내 전역을 내려다 볼 수 있으며, 맑은 날씨에 찾는 관광지로 잘 알려져 있다.`,
        backgroundImage: "../../images/2/5.jpg",
        enterMouseTimeStamp: 0,
        leaveMouseTimeStamp: 0,
      },
      display: {
        title: "청계천",
        msg: `청계천은 대한민국 서울특별시 내부에 있는 지방하천으로, 한강 수계에 속하며 중랑천의 지류이다. 최장 발원지는 종로구 청운동에 위치한 ‘백운동 계곡’이며, 남으로 흐르다가 청계광장 부근의 지하에서 삼청동천을 합치며 몸집을 키운다. 이곳에서 방향을 동쪽으로 틀어 서울의 전통적인 도심지를 가로지르다가, 한양대학교 서울캠퍼스 옆에서 중랑천으로 흘러든다.`,
        backgroundImage: "../../images/2/6.jpg",
        enterMouseTimeStamp: 0,
        leaveMouseTimeStamp: 0,
      },
      back_seat: {
        title: "봉은사",
        msg: `봉은사는 대한민국 서울특별시 강남구 삼성동 수도산 기슭에 있는 사찰이다. 조계종 사찰이며, 신라 말기에 창건된 것으로 알려졌다.`,
        backgroundImage: "../../images/2/7.jpg",
        enterMouseTimeStamp: 0,
        leaveMouseTimeStamp: 0,
      },
      driver_seat: {
        title: "동대문 디자인 플라자",
        msg: `동대문 디자인 플라자는 대한민국 서울특별시 중구에 위치한 복합 문화 공간이다. 이라크 태생의 영국의 건축가 자하 하디드와 삼우종합건축사사무소가 디자인하였다.`,
        backgroundImage: "../../images/2/8.jpg",
        enterMouseTimeStamp: 0,
        leaveMouseTimeStamp: 0,
      },
      navi: {
        title: "명동 성당",
        msg: `한국 천주교 서울대교구 주교좌 명동대성당, 통칭 명동성당은 대한민국 서울특별시 중구 명동 2가에 있는 천주교 서울대교구의 대성당이다. 한반도에서 처음으로 지어진 대규모의 고딕 양식 기독교 교회당이자, 한국 최초의 본당이다. 1977년 11월 22일 대한민국의 사적 제258호로 지정되었다.`,
        backgroundImage: "../../images/2/9.jpg",
        enterMouseTimeStamp: 0,
        leaveMouseTimeStamp: 0,
      },
      gearbox: {
        title: "코엑스 아쿠아리움",
        msg: `코엑스 아쿠아리움은 대한민국 서울특별시 강남구 코엑스에 위치한 해양테마파크 수족관이다. 한국 최대의 수족관으로 650여종 4만마리 이상의 상어, 해수 및 담수어와 매너티, 점박이 물범 훔볼트펭권 등 해양포유류가 있다.`,
        backgroundImage: "../../images/2/10.jpg",
        enterMouseTimeStamp: 0,
        leaveMouseTimeStamp: 0,
      },
      stearing: {
        title: "광화문 광장",
        msg: `광화문광장(光化門廣場)은 대한민국 서울특별시 종로구에 위치한 광장이다. 2009년 8월 1일 12시 일반시민에게 개방되었다. 범위는 광화문에서 세종로 사거리 및 청계광장에 이르며, 폭 34m, 길이 740m의 상시 광장에, 평상시에는 차도이나 대규모 행사시에 광장으로 활용이 가능한 왕복 10차선 예비광장으로 구성되어 있다.`,
        backgroundImage: "../../images/2/11.jpg",
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

          <a-box opacity={opacity} depth={ratio} height={ratio} width={ratio} position="0 -10 -15" rotation="30 30 0" color="skyblue" id="parking" class="colider">
            <a-animation attribute="rotation" dur="2000" fill="backwards" repeat="indefinite" to="30 30 360"></a-animation>
          </a-box>

          <a-box opacity={opacity} depth={ratio} height={ratio} width={ratio} position="-15 -5 -10" rotation="30 30 0" color="skyblue" id="headup" class="colider">
            <a-animation attribute="rotation" dur="2000" fill="backwards" repeat="indefinite" to="30 30 360"></a-animation>
          </a-box>

          <a-box opacity={opacity} depth={ratio} height={ratio} width={ratio} position="14 -20 -7" rotation="30 30 0" color="skyblue" id="speaker" class="colider">
            <a-animation attribute="rotation" dur="2000" fill="backwards" repeat="indefinite" to="30 30 360"></a-animation>
          </a-box>

          <a-box opacity={opacity} depth={ratio} height={ratio} width={ratio} position="15 -7 18" rotation="30 30 0" color="skyblue" id="switch" class="colider">
            <a-animation attribute="rotation" dur="2000" fill="backwards" repeat="indefinite" to="30 30 360"></a-animation>
          </a-box>

          <a-box opacity={opacity} depth={ratio} height={ratio} width={ratio} position="-10 -10 8" rotation="30 30 0" color="skyblue" id="smartphone" class="colider">
            <a-animation attribute="rotation" dur="2000" fill="backwards" repeat="indefinite" to="30 30 360"></a-animation>
          </a-box>

          <a-box opacity={opacity} depth={ratio} height={ratio} width={ratio} position="15 -5 5" rotation="30 30 0" color="skyblue" id="display" class="colider">
            <a-animation attribute="rotation" dur="2000" fill="backwards" repeat="indefinite" to="30 30 360"></a-animation>
          </a-box>

          <a-box opacity={opacity} depth={ratio} height={ratio} width={ratio} position="-3 -8 15" rotation="30 30 0" color="skyblue" id="back_seat" class="colider">
            <a-animation attribute="rotation" dur="2000" fill="backwards" repeat="indefinite" to="30 30 360"></a-animation>
          </a-box>

          <a-box opacity={opacity} depth={ratio} height={ratio} width={ratio} position="8 -8 -10" rotation="30 30 0" color="skyblue" id="driver_seat" class="colider">
            <a-animation attribute="rotation" dur="2000" fill="backwards" repeat="indefinite" to="30 30 360"></a-animation>
          </a-box>

          <a-box opacity={opacity} depth={ratio} height={ratio} width={ratio} position="8 2 -13" rotation="30 30 0" color="skyblue" id="navi" class="colider">
            <a-animation attribute="rotation" dur="2000" fill="backwards" repeat="indefinite" to="30 30 360"></a-animation>
          </a-box>

          <a-box opacity={opacity} depth={ratio} height={ratio} width={ratio} position="5 -10 20" rotation="30 30 0" color="skyblue" id="gearbox" class="colider">
            <a-animation attribute="rotation" dur="2000" fill="backwards" repeat="indefinite" to="30 30 360"></a-animation>
          </a-box>

          <a-box opacity={opacity} depth={ratio} height={ratio} width={ratio} position="4 -5 -20" rotation="30 30 0" color="skyblue" id="stearing" class="colider">
            <a-animation attribute="rotation" dur="2000" fill="backwards" repeat="indefinite" to="30 30 360"></a-animation>
          </a-box>
          
          <a-entity position="0 1.8 4">
            <a-entity camera look-controls mouse-cursor>
              <a-cursor fuse="false" material="color: yellow; opacity: 0.2"></a-cursor>
            </a-entity>
          </a-entity>

          <a-sky src={"../01-6000.jpg"} rotation="0 -130 0"></a-sky>
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
