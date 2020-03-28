import React, { useState, useEffect } from 'react';
import Todo from './Todo';

const Todos = () => {
  const [todo, setTodo] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => res.json())
      .then(setTodo);
  }, []);

  return !todo ? <div>Loading...</div> : <Todo todo={todo} />;
};

export default Todos;
