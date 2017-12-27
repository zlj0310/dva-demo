/* eslint-disable import/first,no-unused-vars */
import React from 'react';
import styles from './MainLayout.css';
import NavBar from 'antd-mobile/lib/nav-bar';
import Icon from 'antd-mobile/lib/icon';
import 'antd-mobile/lib/nav-bar/style';
import 'antd-mobile/lib/icon/style';

function HeaderMobile({ location }) {
  return (
    <div className={styles.headerMobile}>
      <NavBar
        mode="dark"
        icon={<Icon type="left" />}
        onLeftClick={() => console.log('onLeftClick')}
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          <Icon key="1" type="ellipsis" />,
        ]}
      >NavBar</NavBar>
    </div>
  );
}

export default HeaderMobile;
