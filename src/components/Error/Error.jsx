import React from 'react';
import { useSelector } from 'react-redux';
import { selectorContacts } from 'redux/selectors';

const Error = () => {
  const { error } = useSelector(selectorContacts);

  return (
    error && <h1>{error}</h1>
  );
};

export default Error;
