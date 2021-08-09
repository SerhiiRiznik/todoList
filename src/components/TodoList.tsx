import React, { ChangeEvent } from "react"
import { FilterType, TaskType } from "../App"
import AddItemForm from "./AddItemForm"
import EditableSpan from "./EditableSpan"

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
   changeTitle: (title:string,taskId: string,todoListId: string)=>void
   changeTodoTitle: (title: string,todoListId: string)=>void
}

function TodoList(props: PropsType) {

   const addTaskHandler= (title:string)=>{
         props.addTask(title,props.id)
        
   }
   const onAllClickHandler = ()=> props.setFilters('all',props.id)
   const onActiveClickHandler = ()=>props.setFilters('active',props.id)
   const onCompletedClickHandler = ()=>props.setFilters('completed',props.id)
   const removeTodoListHandler = ()=>props.removeTodoList(props.id)
   const changeTitleHandler = (title: string)=>props.changeTodoTitle(title,props.id)


   return (
      <div className='todo-list'>
         <h3><EditableSpan title={props.title} changeTitle={changeTitleHandler}/> <button onClick={removeTodoListHandler}>x</button></h3>
         
         
         <div>
            <AddItemForm addItem={addTaskHandler} />
         </div>
         <ul>
            {props.tasks.map(task =>{
               const removeTaskHandler = () => props.removeTask(task.id ,props.id)
               const changeTaskCheckedHandler = ()=>{
                     props.changeTaskChecked(task.id ,props.id)
                  }
               const changeTaskTitleHandler = (title: string)=>{
                  
                  props.changeTitle(title, task.id, props.id)
                     // props.changeTaskChecked(task.id ,props.id)
                  }
               return (
                  <li key={task.id} className={task.isDone ? 'is-done' : ''}>
                     <button onClick={removeTaskHandler}>X</button>
                     <input onChange={changeTaskCheckedHandler} type='checkbox' checked={task.isDone} /> 
                     <EditableSpan title={task.title} changeTitle={changeTaskTitleHandler}/>
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