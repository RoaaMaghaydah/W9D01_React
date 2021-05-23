import React from 'react';
import List from './components/List';

// jsx
const App = () => {
  const todos = [{todo: "wake up", id: 1}, {todo: "breakfast", id: 2}, {todo: "study", id: 3}];
  const listRander = todos.map((elem, i) => {
    return <List key={i} todosName={elem} />;
  });
  return <><h1>hello world</h1>
  {listRander}
  </>;
};

export default App