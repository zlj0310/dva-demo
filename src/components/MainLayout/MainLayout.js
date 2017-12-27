import React from 'react';
import styles from './MainLayout.css';
import HeaderPc from './headerPc';
import HeaderFb from './headerFb';
import HeaderMobile from './headerMobile';

function MainLayout({ children, location }) {
  return (
    <div className={styles.normal}>
      <HeaderPc location={location}/>
      <HeaderFb location={location} />
      <HeaderMobile location={location} />
      <div className={styles.content}>
        <div className={styles.main}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
