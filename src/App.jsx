import React from 'react';
import styles from './App.module.scss';
import Card from './components/Card';
import Input from './components/Input';

const App = () => {
  return (
    <div>
      <header className={styles.AppHeader}>
        <Input />
        <Card />
      </header>
    </div>
  );
};

export default App;
