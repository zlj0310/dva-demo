import React from 'react';
import { Menu } from 'antd';
import { Link } from 'dva/router';
import styles from './MainLayout.css';

function HeaderPc({ location }) {
  return (
    <div className={styles.headerPc} >
      <Menu
        selectedKeys={[location.pathname]}
        mode="horizontal"
        theme="dark"
      >
        <Menu.Item key="/">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="/mobile">
          <Link to="/mobile">antd mobile</Link>
        </Menu.Item>
        <Menu.Item key="/demo">
          <Link to="/demo">Demo</Link>
        </Menu.Item>
        <Menu.Item key="/error">
          <Link to="/error">404</Link>
        </Menu.Item>
      </Menu>
    </div>

  );
}

export default HeaderPc;
