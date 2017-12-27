import React from 'react'
import { Icon } from 'antd'
import styles from './index.less'
import MainLayout from '../../components/MainLayout/MainLayout';


function Error({ location }) {
  return (
    <MainLayout location={location}>
      <div className={styles.error}>
        <Icon type="frown-o" />
        <h1>404 Not Found</h1>
      </div>
    </MainLayout>
  );
}

export default Error
