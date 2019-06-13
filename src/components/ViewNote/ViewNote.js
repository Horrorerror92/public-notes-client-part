import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ContentAreaButton from '../ContentAreaButton/ContentAreaButton';
import './ViewNote.scss';

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

const ViewNote = ({
  title, createdAt, contentText, author,
}) => (
  <div className={mainContentClass}>
    <h2 className={mainContentTitle}>{title}</h2>
    <ContentAreaButton />
    <span className={mainContentDateClass}>{createdAt}</span>
    <p className={mainContentTextClass}>{contentText}</p>
    <span className={mainContentAuthorClass}>{author}</span>
  </div>
);

ViewNote.propTypes = {
  title: PropTypes.string.isRequired,
  // createdAt: PropTypes.instanceOf(Date).isRequired, // mix type of prop`s
  createdAt: PropTypes.string.isRequired,
  contentText: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};


export default ViewNote;
