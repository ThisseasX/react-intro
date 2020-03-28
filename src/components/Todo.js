import React from 'react';

const Todo = ({ todo }) => (
  <table>
    <thead>
      <tr>
        {Object.keys(todo).map(key => (
          <th key={key}>{key}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      <tr>
        {Object.values(todo).map((value, index) => (
          <td key={index}>{value}</td>
        ))}
      </tr>
    </tbody>
  </table>
);

export default Todo;
