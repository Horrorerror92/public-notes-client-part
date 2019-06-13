/* eslint-disable react/button-has-type */
/* eslint-disable no-use-before-define */
import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

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

const Header = ({ name }) => (
  <div className={headerClass}>
    <Link to="/">
      <h1 className={headerTitleClass}>
        Hello,
        {name}
        !
      </h1>
    </Link>
    <div className={headerButtonArea}>
      <Link to="/add">
        <button className={buttonHeader}>
          Add Note
        </button>
      </Link>
      <Link to="#">
        <button className={buttonHeader}>
          Registration
        </button>
      </Link>
    </div>
  </div>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
