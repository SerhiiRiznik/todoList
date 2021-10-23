import React from "react"
import { Button, Checkbox, IconButton } from "@material-ui/core"
import { Delete } from "@material-ui/icons"
import AddItemForm from "./AddItemForm"
import EditableSpan from "./EditableSpan"
import { useSelector } from "react-redux"
import { RootState } from "../state/store"
import { FilterType, TaskType } from "../state/todolistsReducer"

type PropsType = {
   id: any
   title : string
   filter: string
   tasks: any
   removeTask: (id:string,todoListId: string)=>void
   setFilters: (task: FilterType,todoListId: string|number)=>void
   addTask:(title: string,todoListId: string|number)=>void
   changeTaskChecked: (taskId: string,todoListId: string)=>void
   removeTodoList: (id: string|number)=>void
   changeTitle: (title:string,taskId: string,todoListId: string|number)=>void
   changeTodoTitle: (title: string,todoListId: string|number)=>void
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
         <h3>
            <EditableSpan title={props.title} changeTitle={changeTitleHandler}/> 
            <Button onClick={removeTodoListHandler}>
               <Delete />
            </Button>
         </h3>
         <div>
            <AddItemForm addItem={addTaskHandler} />
         </div>
         <div>
            {props.tasks.map((task:TaskType) =>{
               const removeTaskHandler = () => props.removeTask(task.id ,props.id)
               const changeTaskCheckedHandler = ()=>{
                     props.changeTaskChecked(task.id ,props.id)
                  }
               const changeTaskTitleHandler = (title: string)=>{
                  props.changeTitle(title, task.id, props.id)
                  }
               return (
                  <div key={task.id} className={task.isDone ? 'is-done' : ''}>
                     <IconButton onClick={removeTaskHandler}>
                        <Delete />
                     </IconButton>
                     <Checkbox color='primary' onChange={changeTaskCheckedHandler}  checked={task.isDone}/>
                     <EditableSpan title={task.title} changeTitle={changeTaskTitleHandler}/>
                  </div>
               )
            })}
         </div>
         <div>
            <Button 
            variant={props.filter === 'all' ? 'outlined' : 'text'}
            onClick={onAllClickHandler}
            color={'default'}
            >All</Button>
            <Button 
            variant={props.filter === 'active' ? 'outlined' : 'text'}
            onClick={onActiveClickHandler} color={'default'}>Active</Button>
            <Button 
            variant={props.filter === 'completed' ? 'outlined' : 'text'}
            onClick={onCompletedClickHandler} color={'default'}>Completed</Button>
         </div>
      </div>
   )
}

export default TodoList

