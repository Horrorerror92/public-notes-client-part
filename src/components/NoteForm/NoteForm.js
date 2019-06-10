/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import classNames from 'classnames';
import './NoteForm.scss';


const noteFormClass = classNames({
  'note-form': true,
});

const noteFormRow = classNames({
  'note-form__row': true,
});

const noteFormLabel = classNames({
  'note-form__label': true,
});

const noteFormTitleDescription = classNames({
  'note-form__description': true,
  'note-form_container-title': true,
});

const noteFormDescription = classNames({
  'note-form__description': true,
  'note-form_container-desc': true,
});

const noteFormButton = classNames({
  ' note-form__button': true,
});

const NoteForm = () => (

  <form className={noteFormClass}>
    <div className={noteFormRow}>
      <label htmlFor="noteTitle" className={noteFormLabel}> Title:</label>
      <input
        type="text"
        className={noteFormTitleDescription}
        id="note-form__title-description"
        placeholder="your title write here"
      />
    </div>
    <div className={noteFormRow}>
      <label htmlFor="noteDescription" className={noteFormLabel}> Description:</label>
      <textarea
        className={noteFormDescription}
        id="note-form__description"
        placeholder="your description write here"
      />
    </div>

    <button type="submit" className={noteFormButton}>Submit</button>

  </form>

);


export default NoteForm;
