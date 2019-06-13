
import React from 'react';
import './MainContent.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ContentAreaButton from '../ContentAreaButton/ContentAreaButton';

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

const MainContent = ({
  title, createdAt, contentText, author, _id,
}) => (
  <div className={mainContentClass}>
    <Link to={`/news/${_id}`}>
      <h2 className={mainContentTitle}>{title}</h2>
    </Link>
    <ContentAreaButton />
    <span className={mainContentDateClass}>{createdAt}</span>
    <p className={mainContentTextClass}>{contentText}</p>
    <span className={mainContentAuthorClass}>{author}</span>
  </div>
);


MainContent.propTypes = {
  title: PropTypes.string.isRequired,
  // createdAt: PropTypes.instanceOf(Date).isRequired, // mix type of prop`s
  createdAt: PropTypes.string.isRequired,
  contentText: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  _id: PropTypes.number.isRequired,
};

export default MainContent;
