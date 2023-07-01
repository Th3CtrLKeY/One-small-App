import React from "react";
import { Button } from 'react-bootstrap';

const Todo = ({ todo, index, markTodo, removeTodo }) => {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : "", color: todo.isDone ? "gray" : "black" }}>{todo.text}</span>
      <div>
        <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
      </div>
    </div>
  );
};

export default Todo;
