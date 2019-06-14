import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ContentAreaButton from '../ContentAreaButton/ContentAreaButton';
import './ViewNote.scss';

const viewContentClass = classNames({
  'view-content': true,
});

const viewContentTitle = classNames({
  'view-content__title': true,
});

const viewContentDateClass = classNames({
  'view-content__date': true,
});

const viewContentTextClass = classNames({
  'view-content__content-text': true,
});
const viewContentAuthorClass = classNames({
  'view-content__author': true,
});
const viewContentBackLinkClass = classNames({
  'view-content__back-link': true,
});

const ViewNote = ({
  title, createdAt, contentText, author,
}) => (
  <div className={viewContentClass}>
    <NavLink className={viewContentBackLinkClass} to="/">
      <h4> Back </h4>
    </NavLink>
    <h2 className={viewContentTitle}>{title}</h2>
    <ContentAreaButton />
    <span className={viewContentDateClass}>{createdAt}</span>
    <p className={viewContentTextClass}>{contentText}</p>
    <span className={viewContentAuthorClass}>{author}</span>
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
