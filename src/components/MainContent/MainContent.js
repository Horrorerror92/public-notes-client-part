/* eslint-disable no-use-before-define */
import React from 'react';
import './MainContent.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const MainContent = ({
  title, date, contentText, author,
}) => (
  <div className={mainContentClass}>
    <h2 className={mainContentTitle}>{title}</h2>
    <span className={mainContentDateClass}>{date}</span>
    <p className={mainContentTextClass}>{contentText}</p>
    <span className={mainContentAuthorClass}>{author}</span>
  </div>
);

const mainContentClass = classNames({
  'main-content': true,
});

const mainContentTitle = classNames({
  'main-content__title': true,
});

const mainContentDateClass = classNames({
  'main-content__date': true,
});

const mainContentTextClass = classNames({
  'main-content__content-text': true,
});
const mainContentAuthorClass = classNames({
  'main-content__author': true,
});

MainContent.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  contentText: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default MainContent;
