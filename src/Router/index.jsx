/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/prop-types */
import React from 'react';
import { Router } from '@reach/router';
import { Albums, Album, Bands, Band } from '../Views';

export const AppRouter = () => {
  return (
    <>
      <Router style={{ width: '100%' }}>
        <Bands default path="/bands" />
        <Band path="/band/:id" />
        <Albums path="/albums" />
        <Album path="/album/:id" />
      </Router>
    </>
  );
};
