import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Row, Col } from 'antd';
import { page1_1 } from './data';

export default function Page1_1() {
  const children = page1_1.map((card, i) => (
    <Col
      className="feature"
      key={i}
      md={8}
      xs={24}
    >
      <img src={card.img} alt="" width="100" height="100" style={{
        borderRadius: 50
      }}/>
      <h5>{card.title}</h5>
      <div className="detail">{card.description}</div>
    </Col>
  ));
  return (<OverPack component="section" className="page-wrapper features page3 text-center">
    <QueueAnim
      type="bottom"
      className="page container row text-center"
      leaveReverse
      key="page3"
      component={Row}
    >
      {children}
    </QueueAnim>
  </OverPack>);
}