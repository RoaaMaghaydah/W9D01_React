import React from 'react';
import List from './components/List';
import ListItem from './components/ListItem';
// jsx
const App = () => {
  const todos = [{ todo: "wake up", id: 1 }, { todo: "breakfast", id: 2 }, { todo: "study", id: 3 }];

  return <><h1>hello world</h1>
    <List todoArr={todos} />
  </>;
};

export default App