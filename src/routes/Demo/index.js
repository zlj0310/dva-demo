/* eslint-disable import/first,no-undef */
import React from 'react';
import { connect } from 'dva';
import styles from './index.css';
import MainLayout from '../../components/MainLayout/MainLayout';
import { Carousel } from 'antd';

function Demo({ location, decoInfoData }) {
  return (
    <MainLayout location={location}>
      <div className={styles.img}>
        <img className={styles.img} src={decoInfoData.logo} alt="carousel" />
        <Carousel autoplay>
          { decoInfoData.turnPlay && decoInfoData.turnPlay.length > 0 &&
            decoInfoData.turnPlay.map((item,i) => {
              return (<div className="carousel" key={i}>
                <img className="carousel-img" src={item.picUrl} alt="carousel" />
              </div>)
            })
          }
        </Carousel>
      </div>
    </MainLayout>
  );
}

function mapStateToProps(store) { // 1关键的 mapStateToProps
  const { decoInfoData } = store.demo; // 2.从 model/demo.js 拿取需要的数据
  return { decoInfoData }; // 3.将数据作为属性返回
}

export default connect(mapStateToProps)(Demo);
