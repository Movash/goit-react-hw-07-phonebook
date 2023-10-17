import React from 'react';
import { useSelector } from 'react-redux';
import { selectorAppState } from 'redux/appState/selectors';

const Error = () => {
  const { error } = useSelector(selectorAppState);

  return error && <h1>{error}</h1>;
};

export default Error;
