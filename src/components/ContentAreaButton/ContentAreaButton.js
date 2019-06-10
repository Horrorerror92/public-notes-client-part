/* eslint-disable react/button-has-type */
import React from 'react';
import './ContentAreaButton.scss';
import classNames from 'classnames';

const ContentAreaButtonClass = classNames({
  'content-area-button': true,
});

const ButtonNoteControl = classNames({
  'button__note-control': true,
});

const ContentAreaButton = () => (
  <div className={ContentAreaButtonClass}>
    <button className={ButtonNoteControl}>Update</button>
    <button className={ButtonNoteControl}>Remove</button>
  </div>
);


export default ContentAreaButton;
