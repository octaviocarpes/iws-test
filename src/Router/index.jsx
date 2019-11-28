/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/prop-types */
import React from 'react';
import { Router } from '@reach/router';
import { Albums, Bands } from '../Views';
import Navbar from '../Components/Navbar';

const Wrapper = props => {
  return (
    <>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>{props.children}</div>
        <Navbar location={props.location.pathname} />
      </div>
    </>
  );
};

export const AppRouter = () => {
  return (
    <>
      <Router style={{ width: '100%' }}>
        <Wrapper path="/">
          <Bands default path="app/bands" />
          <Albums path="app/albums" />
        </Wrapper>
      </Router>
    </>
  );
};
