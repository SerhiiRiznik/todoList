// import { addTask } from './tasksReducer';
// import { uuid } from 'uuidv4';
// import { FilterType } from './../App';
// import { TodoListType } from "../App";

import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { uuid } from "uuidv4";

export type FilterType = 'all'|'active'|'completed'
export type TaskType = {
  id: string, 
  title: string,
  isDone: boolean
}
export type TodoListType ={
  id: string | number
  title: string
  filter: FilterType
  tasks: Array<TaskType>
}

  let todo_list_id1 = uuid()
  let todo_list_id2 = uuid()
const initialState= [
   {
      id: uuid(), 
      title: 'What to learn', 
      filter: 'all',
      tasks: [
         {id: uuid(), title: 'Read book',isDone: true},
         {id: uuid(), title: 'eat',isDone: true},
         {id: uuid(), title: 'coding',isDone: false},
         {id: uuid(), title: 'sleep',isDone: false},
         {id: uuid(), title: 'repeat',isDone: false},
      ]
   },
    {
       id: uuid(), 
       title: 'What to do', 
       filter: 'all',
       tasks:[
          {id: uuid(), title: 'HTML&CSS',isDone: true},
         {id: uuid(), title: 'JS',isDone: true},
         {id: uuid(), title: 'ReactJS',isDone: false},
         {id: uuid(), title: 'Rest API',isDone: false},
         {id: uuid(), title: 'GraphQL',isDone: false},
       ]
   }
]   as Array<TodoListType>

export const todoListsSlice = createSlice({
   name: 'tasks',
   initialState,
   reducers: {
      addTodolist : (state,action)=>{
         state.push({id: uuid(), title: action.payload.title, filter: 'all',tasks:[]})
         
      },
      removeTodolist : (state,action)=>{
         console.log('removeTodolist', action.payload);
         // debugger

         const id=action.payload.todoListId
         delete state[id]
         // let a = state.filter((todo:any)=>todo.id !== id)
         // state = a
         
         // const todo = state.find(e=>e.id == id)
         //    console.log(todo);
         //   state = state.filter((todo:any)=>todo.id !== id)
         // state.map((todo,indx)=>{
         //    if (todo.id === id) {
         //       // debugger
               
               
         //    }
         // })
            
      },
      setTodolistFilter : (state,action)=>{
         console.log('setTodolistFilter', action.payload);
         
         
         // let todolist = todoLists.find((todo:any) => todo.id === todoListId)
         let todoList = state[action.payload.todoListId]
            console.log(todoList);
         if (todoList) {
           todoList.filter = action.payload.filter
            // setTodoLists([...todoLists])
         }
      },
      setNewTodolistTitle : (state,action)=>{
         console.log('setNewTodolistTitle', action.payload);
         
      },
      addTask : (state,action)=>{
         state.map(todo=>{
            if (action.payload.todoListId === todo.id) {
               todo.tasks.push({
            id: uuid(),
            title :action.payload.title,
            isDone: false
         })
            }
            
         })
      },
      removeTask : (state,action)=>{
         state.map(todo=>{
            if (action.payload.todoListId === todo.id) {
               todo.tasks = todo.tasks.filter((t:any)=>t.id !== action.payload.taskId)
            }
         })
      },
      setNewTaskTitle : (state,action)=>{
         console.log('setNewTaskTitle');
         //    return {
         //       type: 'SET_NEW_TASK_TITLE',
         //       id: todoListId,
         //       title
         //    }
      },
      changeTaskChecked : (state,action)=>{
         console.log('changeTaskChecken');
         
      }
}})
export const {addTodolist,removeTodolist,setTodolistFilter,setNewTodolistTitle,addTask,removeTask,setNewTaskTitle,changeTaskChecked} = todoListsSlice.actions
export default todoListsSlice.reducer




// export type addTodolist = {
//    type: 'ADD_TODOLIST'
//    id: string
//    title: string
// }
// export type removeTodolist = {
//    type: 'REMOVE_TODOLIST'
//    id: string
// }
// export type setTodolistFilter = {
//    type: 'SET_TODOLIST_FILTER'
//    id: string
//    filter: FilterType
// }
// export type setNewTodolistTitle = {
//    type: 'SET_NEW_TODOLIST_TITLE'
//    id: string
//    title: string
// }

// type ActionType = addTodolist| removeTodolist | setTodolistFilter | setNewTodolistTitle

//   let todo_list_id1 = uuid()
//   let todo_list_id2 = uuid()
// const initialState:Array<TodoListType> = [
//     {id: todo_list_id1, title: 'What to learn', filter: 'all'},
//     {id: todo_list_id2, title: 'What to do', filter: 'all'}
//   ]

// const TodoListsReducer = (state=initialState , action: ActionType)=>{
//    switch (action.type) {
//       case 'ADD_TODOLIST':
//          return [...state , {id: uuid(), title: action.title, filter: 'all'}]
//       case 'REMOVE_TODOLIST':
//          return state.filter((todo)=>todo.id !== action.id)
//       case 'SET_TODOLIST_FILTER':
//         let todolist = state.find(todo => todo.id === action.id)
//          if (todolist) {
//             todolist.filter = action.filter
//          }
//       return [...state]
//       case 'SET_NEW_TODOLIST_TITLE':
//         let newtodolist = state.find(todo=> todo.id === action.id)
//          if (newtodolist) {
//             newtodolist.title = action.title
//          }
//       return [...state]
//       default:
//          return state
//    }
// }

// export const addTodolist = (todoListId: string,title:string): addTodolist=>{
//    return {
//       type: 'ADD_TODOLIST',
//       id: todoListId,
//       title
//    }
// }
// export const removeTodolist = (todoListId: string): removeTodolist=>{
//    return {
//       type: 'REMOVE_TODOLIST',
//       id: todoListId
//    }
// }
// export const setTodolistFilter = (todoListId: string, filter:FilterType): setTodolistFilter=>{
//    return {
//       type: 'SET_TODOLIST_FILTER',
//       id: todoListId,
//       filter
//    }
// }
// export const setNewTodolistTitle = (todoListId: string, title:string): setNewTodolistTitle=>{
//    return {
//       type: 'SET_NEW_TODOLIST_TITLE',
//       id: todoListId,
//       title
//    }
// }


// export default TodoListsReducer