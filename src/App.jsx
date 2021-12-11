import React from 'react';
import Card from 'components/Card/Card';
import Input from 'components/Input/Input';
import { Wrapper } from './App.styles';

const App = () => {
  return (
    <Wrapper>
      <Input />
      <Card />
    </Wrapper>
  );
};

export default App;
