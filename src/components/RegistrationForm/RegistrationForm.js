import React from 'react';
import './RegistrationForm.scss';
import classNames from 'classnames';

const registrationFormClass = classNames({
  'registration-form': true,
});

const RegistrationForm = () => (
  <h4 className={registrationFormClass}> Registration Page in dev </h4>
);

export default RegistrationForm;
