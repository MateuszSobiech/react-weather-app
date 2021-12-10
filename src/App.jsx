import React from 'react';
import Card from './components/Card';
import Input from './components/Input';
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
