import React from "react"
import { Button, Checkbox, IconButton, Typography } from "@material-ui/core"
import { Delete } from "@material-ui/icons"
import AddItemForm from "./AddItemForm"
import EditableSpan from "./EditableSpan"
import { useSelector } from "react-redux"
import { RootState } from "../state/store"
import { FilterType, TaskType } from "../state/todolistsReducer"
import { createSelector } from "reselect"

type PropsType = {
   todoId: string
   todoIndex: number
   title : string
   filter: string
   removeTask: (taskId:string,todoIndex: number)=>void
   setFilters: (task: FilterType,todoIndex: number)=>void
   addTask:(title: string,todoIndex: number)=>void
   changeTaskChecked: (taskId: string,todoIndex: number)=>void
   removeTodoList: (todoListId: string)=>void
   changeTitle: (title:string,taskId: string,todoIndex: number)=>void
   changeTodoTitle: (title: string,todoIndex: number)=>void
}

function TodoList(props: PropsType) {

   const addTaskHandler= (title:string)=> props.addTask(title,props.todoIndex)  
   const onAllClickHandler = ()=> props.setFilters('all',props.todoIndex)
   const onActiveClickHandler = ()=>props.setFilters('active',props.todoIndex)
   const onCompletedClickHandler = ()=>props.setFilters('completed',props.todoIndex)
   const removeTodoListHandler = ()=>props.removeTodoList(props.todoId)
   const changeTitleHandler = (title: string)=>props.changeTodoTitle(title,props.todoIndex)



   
   const filteredTasks = createSelector(
     (state:RootState) => state.todoLists.todos[props.todoIndex].tasks,
      (state:RootState) => state.todoLists.todos[props.todoIndex].filter,
      (tasks:TaskType[], filter:FilterType)=>{

         switch (filter) {
            case 'completed':
               return tasks.filter(task=>task.completed === true)
            case 'active':
               return tasks.filter(task=>task.completed === false)
            default:
              return tasks
         }
      }
   )

   const tasks = useSelector(filteredTasks)
   

   return (
      <div className='todo-list'>
         <h3 style={{display:'flex',justifyContent: 'space-between'}}>
            <EditableSpan title={props.title} changeTitle={changeTitleHandler}/> 
            <Button onClick={removeTodoListHandler}>
               <Delete />
            </Button>
         </h3>
         <div style={{display:'flex'}}>
            <AddItemForm addItem={addTaskHandler} />
         </div>
         <div>
            {
               tasks.length > 0 ?
               tasks.map((task:TaskType) =>{
                  const removeTaskHandler = () => props.removeTask(task.id ,props.todoIndex)
                  const changeTaskCheckedHandler = ()=>{
                        props.changeTaskChecked(task.id ,props.todoIndex)
                     }
                  const changeTaskTitleHandler = (title: string)=>{
                     props.changeTitle(title, task.id, props.todoIndex)
                     }
                  return (
                     <div key={task.id} className={task.completed ? 'is-done' : ''} style={{display:'flex',justifyContent: 'space-between'}}>
                        
                        <div >
                           <Checkbox color='primary' onChange={changeTaskCheckedHandler}  checked={task.completed}/>
                           <EditableSpan title={task.title} changeTitle={changeTaskTitleHandler}/>
                        </div>
                        <IconButton onClick={removeTaskHandler}>
                           <Delete />
                        </IconButton>
                     </div>
                  )
               }) : <Typography variant='h5'>No tasks</Typography>
            }
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

