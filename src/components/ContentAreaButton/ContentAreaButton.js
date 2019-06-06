/* eslint-disable react/button-has-type */
/* eslint-disable no-use-before-define */
import React from 'react';
import './ContentAreaButton.scss';
import classNames from 'classnames';

const ContentAreaButton = () => (
  <div className={ContentAreaButtonClass}>
    <button className={ButtonNoteControl}>Update</button>
    <button className={ButtonNoteControl}>Remove</button>
  </div>
);

const ContentAreaButtonClass = classNames({
  'content-area-button': true,
});

const ButtonNoteControl = classNames({
  'button__note-control': true,
});

export default ContentAreaButton;
