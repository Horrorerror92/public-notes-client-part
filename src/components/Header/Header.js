/* eslint-disable react/button-has-type */
/* eslint-disable no-use-before-define */
import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import classNames from 'classnames';

const Header = ({ name }) => (
  <div className={headerClass}>
    <h1 className={headerTitleClass}>
      Hello,
      {name}
      !
    </h1>
    <div className={headerButtonArea}>
      <button className={buttonHeader}>
        Add Note
      </button>
      <button className={buttonHeader}>
        Registration
      </button>
    </div>
  </div>
);

const headerClass = classNames({
  header: true,
});

const headerTitleClass = classNames({
  header__text: true,
  header__text_position: true,
});

const buttonHeader = classNames({
  button: true,
  button__header: true,
});

const headerButtonArea = classNames({
  'header__button-area': true,
});

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
