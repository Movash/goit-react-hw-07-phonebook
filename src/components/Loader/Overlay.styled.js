import { styled } from 'styled-components';

export const Overlay = styled('div')(() => {
  return {
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    background: 'rgba(136, 136, 204, 0.2)',
  };
});