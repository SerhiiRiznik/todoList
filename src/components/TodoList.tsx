import React, { useState } from "react"
import { filterType, TasksType } from "../App"

type PropsType = {
   title : string
   tasks: Array<TasksType>
   removeTask: (id:number)=>void
   setFilters: (task: filterType)=>void
}

function TodoList(props: PropsType) {





   return (
      <div className='todo-list'>
         <h3>{props.title}</h3>
         <div>
            <input type="text" />
            <button>+</button>
         </div>
         <ul>
            {props.tasks.map(task =>{
               return (
               <li key={task.id}>
                  <button onClick={()=>props.removeTask(task.id)}>X</button>
                  <input type='checkbox' checked={task.isDone} /> 
                  <span>{task.title}</span>
               </li>
               )
            })}
         </ul>
         <div>
            <button onClick={()=>props.setFilters('all')}>All</button>
            <button onClick={()=>props.setFilters('active')}>Active</button>
            <button onClick={()=>props.setFilters('complited')}>Completed</button>
         </div>
      </div>
   )
}

export default TodoList