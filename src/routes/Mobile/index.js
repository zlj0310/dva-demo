/* eslint-disable import/first */
import React from 'react';
import { connect } from 'dva';
import styles from './index.less';
import MainLayout from '../../components/MainLayout/MainLayout';


function IndexPage({ location }) {
  return (
    <MainLayout location={location}>
      <div>

      </div>
    </MainLayout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
