import React from 'react'
import './CSS/index.css'
import Todo from './todo';
import { Done } from './done';
import { InProgress } from './in-progress';

function TodoIndex() {
  return (
    <div className='container-fluid'>
        <h1 id='todo_headline'>
            React Beautiful Todo App
        </h1>
        <div className='todo_container'>
          <Todo />

          <InProgress />

          <Done />
        </div>
    </div>
  )
}

export default TodoIndex;