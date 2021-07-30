import React, { ChangeEvent, KeyboardEvent } from "react"
import { filterType, TasksType } from "../App"

type PropsType = {
   title : string
   tasks: Array<TasksType>
   titleValue: string
   filter: string
   requerInput: boolean | null
   removeTask: (id:number  | string)=>void
   setFilters: (task: filterType)=>void
   addTask:()=>void
   setTitleValue:(value:string)=>void
   changeTaskChecked: (taskId: number|string)=>void
   setRequerInput: (req: boolean | null)=>void
}

function TodoList(props: PropsType) {

   const setTitleValueHandler =(event:ChangeEvent<HTMLInputElement>)=>{
      props.setTitleValue(event.currentTarget.value)
   }
   const addTaskOnKeyPressHandler =(event: KeyboardEvent<HTMLInputElement>)=>{
      props.setRequerInput(null)
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
            <input 
               // required={props.requerInput}
               id='titleValue'
               type="text" value={props.titleValue} 
               onChange={setTitleValueHandler}
               onKeyPress={addTaskOnKeyPressHandler}
            />
            <button 
               onClick={addTaskHandler}
            >+</button>
            {props.requerInput ? <label  htmlFor='titleValue'>Title is Required</label> : null}
         </div>
         <ul>
            {props.tasks.map(task =>{
               const removeTaskHandler = () => props.removeTask(task.id)
               const changeTaskCheckedHandler = (event: ChangeEvent<HTMLInputElement>)=>{
                     props.changeTaskChecked(task.id)
                  }
               return (
                  <li key={task.id} className={task.isDone ? 'is-done' : ''}>
                     <button onClick={removeTaskHandler}>X</button>
                     <input onChange={changeTaskCheckedHandler} type='checkbox' checked={task.isDone} /> 
                     <span>{task.title}</span>
                  </li>
               )
            })}
         </ul>
         <div>
            <button className={props.filter === 'all' ? 'active-filter' : ''}
            onClick={onAllClickHandler}>All</button>
            <button className={props.filter === 'active' ? 'active-filter' : ''}
            onClick={onActiveClickHandler}>Active</button>
            <button className={props.filter === 'completed' ? 'active-filter' : ''}
            onClick={onCompletedClickHandler}>Completed</button>
         </div>
      </div>
   )
}

export default TodoList