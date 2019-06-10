import React from 'react';
import './Footer.scss';
import classNames from 'classnames';

const footerClass = classNames({
  footer: true,
});

const footerTitleClass = classNames({
  footer__text: true,
  footer__text_position: true,
});

const Footer = () => (
  <div className={footerClass}>
    <h4 className={footerTitleClass}>
    made by Sergey Zh 2019
    </h4>
  </div>
);


export default Footer;
