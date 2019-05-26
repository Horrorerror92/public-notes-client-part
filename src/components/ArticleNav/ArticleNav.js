/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-use-before-define */
import React from 'react';
import './ArticleNav.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const ArticleNav = ({ title }) => (
  <div className={ArticleNavClass}>
    <ul className={ArticleNavListClass}>
      <li className={ArticleNavItemClass}><a className={ArticleNavLinkClass}>{title}</a></li>
      <li className={ArticleNavItemClass}><a className={ArticleNavLinkClass}>{title}</a></li>
      <li className={ArticleNavItemClass}><a className={ArticleNavLinkClass}>{title}</a></li>
    </ul>
  </div>
);

const ArticleNavClass = classNames({
  'article-nav': true,
});

const ArticleNavListClass = classNames({
  'article-nav__list': true,
});

const ArticleNavItemClass = classNames({
  'article-nav__item': true,
});

const ArticleNavLinkClass = classNames({
  'article-nav__link': true,
});

ArticleNav.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ArticleNav;
