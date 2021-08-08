import React, { ChangeEvent, KeyboardEvent, useState } from "react"
import { FilterType, TaskType } from "../App"

type PropsType = {
   id: string 
   title : string
   tasks: Array<TaskType>
   filter: string
   removeTask: (id:string,todoListId: string)=>void
   setFilters: (task: FilterType,todoListId: string)=>void
   addTask:(title: string,todoListId: string)=>void
   changeTaskChecked: (taskId: string,todoListId: string)=>void
   removeTodoList: (id: string)=>void
}

function TodoList(props: PropsType) {

      let [titleValue, setTitleValue] = useState<string>('')
      let [requerInput, setRequerInput] = useState<boolean | null>(null)


   const setTitleValueHandler =(event:ChangeEvent<HTMLInputElement>)=>{
      setTitleValue(event.currentTarget.value)
   }
   const addTaskOnKeyPressHandler =(event: KeyboardEvent<HTMLInputElement>)=>{
      setRequerInput(null)
      if (event.charCode === 13) {

         if (titleValue.trim() !== '') {
            setRequerInput(false)
            props.addTask(titleValue,props.id)
            setTitleValue('')
         } else {
            setRequerInput(true)
         }
      }
   }
   const addTaskHandler= ()=>{
      if (titleValue.trim() !== '') {
            setRequerInput(false)
            props.addTask(titleValue,props.id)
            setTitleValue('')
         } else {
            setRequerInput(true)
         }
   }
   const onAllClickHandler = ()=> props.setFilters('all',props.id)
   const onActiveClickHandler = ()=>props.setFilters('active',props.id)
   const onCompletedClickHandler = ()=>props.setFilters('completed',props.id)
   const removeTodoListHandler = ()=>props.removeTodoList(props.id)


   return (
      <div className='todo-list'>
         <h3>{props.title} <button onClick={removeTodoListHandler}>x</button></h3>
         
         <div>
            <input 
               className={requerInput ? 'requer' : ''}
               id='titleValue'
               type="text" value={titleValue} 
               onChange={setTitleValueHandler}
               onKeyPress={addTaskOnKeyPressHandler}
            />
            <button 
               onClick={addTaskHandler}
            >+</button>
            {requerInput ? <label style={{'display': 'block'}}  htmlFor='titleValue'>Title is Required</label> : null}
         </div>
         <ul>
            {props.tasks.map(task =>{
               const removeTaskHandler = () => props.removeTask(task.id ,props.id)
               const changeTaskCheckedHandler = (event: ChangeEvent<HTMLInputElement>)=>{
                     props.changeTaskChecked(task.id ,props.id)
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