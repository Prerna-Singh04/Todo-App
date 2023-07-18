import React from 'react';
import './CSS/in-progress.css'

export const InProgress = () => {
  function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
  return (
    <div className='col-12 col-sm-8 col-md-6 col-lg-3 mx-auto todo_in_progress' onDropCapture={drop} onDragEnd={allowDrop}>
      <h2 className='todo_in_progress_head'>InProgress</h2>
      <div className='todo_in_progress_list_element'>

      </div>
    </div>
  )
}
