import React from 'react';
import { StatusBar } from 'react-native';

import Home from './src/pages';

const touchFaceId = () => {
  return (
    <>
      <StatusBar backgroundColor="#6633cc" />
      <Home />
    </>
  );
}

export default touchFaceId;