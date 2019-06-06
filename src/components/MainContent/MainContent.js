/* eslint-disable no-use-before-define */
import React from 'react';
import './MainContent.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ContentAreaButton from '../ContentAreaButton/ContentAreaButton';

const MainContent = ({
  title, createdAt, contentText, author, _id,
}) => (
  <div className={mainContentClass}>
    <a href={`/news/${_id}`}>
      <h2 className={mainContentTitle}>{title}</h2>
    </a>
    <ContentAreaButton />
    <span className={mainContentDateClass}>{createdAt}</span>
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
  createdAt: PropTypes.instanceOf(Date).isRequired, // mix type of prop`s
  contentText: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  _id: PropTypes.number.isRequired,
};

export default MainContent;
