import React from 'react';
import classNames from 'classnames';
import './NotFound.scss';

const NotFoundClass = classNames({
  'not-found': true,
});
const NotFoundTitleClass = classNames({
  'not-found__title': true,
});

const NotFound = () => (
  <div className={NotFoundClass}>
    <h4 className={NotFoundTitleClass}> Sorry, your page not found:(</h4>
  </div>
);

export default NotFound;
