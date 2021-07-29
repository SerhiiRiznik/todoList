import React, { ChangeEvent, KeyboardEvent } from "react"
import { filterType, TasksType } from "../App"

type PropsType = {
   title : string
   tasks: Array<TasksType>
   titleValue: string
   removeTask: (id:number  | string)=>void
   setFilters: (task: filterType)=>void
   addTask:()=>void
   setTitleValue:(value:string)=>void
}

function TodoList(props: PropsType) {

   const setTitleValueHandler =(event:ChangeEvent<HTMLInputElement>)=>{
      props.setTitleValue(event.currentTarget.value)
   }
   const addTaskOnKeyPressHandler =(event: KeyboardEvent<HTMLInputElement>)=>{
      if (event.charCode === 13) props.addTask()
   }
   const addTaskHandler= ()=>props.addTask()
   const onAllClickHandler = ()=> props.setFilters('all')
   const onActiveClickHandler = ()=>props.setFilters('active')
   const onCompletedClickHandler = ()=>props.setFilters('completed')



   return (
      <div className='todo-list'>
         <h3>{props.title}</h3>
         <div>
            <input type="text" value={props.titleValue} 
               onChange={setTitleValueHandler}
               onKeyPress={addTaskOnKeyPressHandler}
            />
            <button 
               onClick={addTaskHandler}
            >+</button>
         </div>
         <ul>
            {props.tasks.map(task =>{
               const removeTaskHandler = () => props.removeTask(task.id)
               return (
                  <li key={task.id}>
                     <button onClick={removeTaskHandler}>X</button>
                     <input type='checkbox' checked={task.isDone} /> 
                     <span>{task.title}</span>
                  </li>
               )
            })}
         </ul>
         <div>
            <button onClick={onAllClickHandler}>All</button>
            <button onClick={onActiveClickHandler}>Active</button>
            <button onClick={onCompletedClickHandler  }>Completed</button>
         </div>
      </div>
   )
}

export default TodoList