/* eslint-disable import/no-cycle */
import React from 'react';
import classNames from 'classnames';
import Router from '../Router/Router';
import './Main.scss';

const mainClass = classNames({
  main: true,
  main_position: true,
});

const mainOverflowClass = classNames({
  main__overflow: true,
});

const Main = () => (
  <div className={mainClass}>
    <div className={mainOverflowClass}>
      <Router />
    </div>
  </div>
);


export default Main;
