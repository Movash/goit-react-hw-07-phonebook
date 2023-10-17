import React from 'react';
import { Hourglass } from 'react-loader-spinner';
import { LoaderCont } from './Loader.styled';
import { Overlay } from './Overlay.styled';
import { useSelector } from 'react-redux';
import { selectorAppState } from 'redux/appState/selectors';

const Loader = () => {
  const { isLoading } = useSelector(selectorAppState);

  return (
    isLoading && (
      <Overlay>
        <LoaderCont>
          <Hourglass colors={['#918fcb', 'yellow']} />
        </LoaderCont>
      </Overlay>
    )
  );
};

export default Loader;
