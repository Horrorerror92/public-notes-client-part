/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import React from 'react';
import './ContentAreaButton.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const ContentAreaButtonClass = classNames({
  'content-area-button': true,
});

const ButtonNoteControl = classNames({
  'button__note-control': true,
});

const ContentAreaButton = () => (
  <div className={ContentAreaButtonClass}>
    {/* temporarily */}
    <button className={ButtonNoteControl}><Link to="#">Edit</Link></button>
    <button className={ButtonNoteControl}><Link to="#">Remove</Link></button>
  </div>
);


export default ContentAreaButton;
