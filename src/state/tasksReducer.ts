
// import { uuid } from 'uuidv4';
// import { createSlice } from '@reduxjs/toolkit';

// // // export type addTask = {
// // //    type: 'ADD_TASK'
// // //    id: string
// // //    title: string
// // // }
// // // export type removeTask = {
// // //    type: 'REMOVE_TASK'
// // //    id: string
// // // }
// // // export type setNewTaskTitle = {
// // //    type: 'SET_NEW_TASK_TITLE'
// // //    id: string
// // //    title: string
// // // }

// // // type ActionType = addTask| removeTask | setNewTaskTitle

//   let todo_list_id1 = uuid()
//   let todo_list_id2 = uuid()
// const initialState = {
//     [todo_list_id1]: [
//       {id: uuid(), title: 'HTML&CSS',isDone: true},
//       {id: uuid(), title: 'JS',isDone: true},
//       {id: uuid(), title: 'ReactJS',isDone: false},
//       {id: uuid(), title: 'Rest API',isDone: false},
//       {id: uuid(), title: 'GraphQL',isDone: false},
//     ],
//     [todo_list_id2]: [
//       {id: uuid(), title: 'Read book',isDone: true},
//       {id: uuid(), title: 'eat',isDone: true},
//       {id: uuid(), title: 'coding',isDone: false},
//       {id: uuid(), title: 'sleep',isDone: false},
//       {id: uuid(), title: 'repeat',isDone: false},
//     ],
//   }

// export const taskSlice = createSlice({
//    name: 'tasks',
//    initialState,
//    reducers: {
//       getTasks :(state,action) =>{
         
//          console.log('addTask Action', action.payload.todoIndex);
//          console.log('addTask', state);
//             let filteredTasks = action.payload.todo
//                // if (state[action.payload.todo].filter === 'active'){
//                //    return filteredTasks.filter((task:any) => task.isDone === false)
//                // }else if (todoLists.filter === 'completed'){
//                //    return filteredTasks.filter((task:any)=>task.isDone === true)
//                // }
//          return action.payload.todo
//       },
//       addTask : (state,action)=>{
//          console.log('addTask', action);
//          console.log('addTask', state);
//          // let todoList = state.find((todo)=>todo.id === action.payload.todoListId)
//          debugger
//          const task = {
//             id: uuid(),
//             title :action.payload.title,
//             isDone: false
//          }
//          // todoList?.tasks.push(task)
//       },
//       removeTask : (state,action)=>{
//          console.log('removeTask');
//          //    return {
//          //       type: 'REMOVE_TASK',
//          //       id: todoListId
//          //    }
//          // }
//       },
//       setNewTaskTitle : (state,action)=>{
//          console.log('setNewTaskTitle');
//          //    return {
//          //       type: 'SET_NEW_TASK_TITLE',
//          //       id: todoListId,
//          //       title
//          //    }
//       },
//       changeTaskChecked : (state,action)=>{
//          console.log('changeTaskChecken');
         
//       }
// }})
// export const {getTasks,addTask,removeTask,setNewTaskTitle,changeTaskChecked} = taskSlice.actions
// export default taskSlice.reducer
// // // export const TaskReducer = (state:Array<TodoListType> , action: ActionType)=>{
// // //    switch (action.type) {
// // //       case 'ADD_TASK':
// // //          return state
// // //       case 'REMOVE_TASK':
// // //          return state.filter((task)=>task.id !== action.id)
      
// // //       case 'SET_NEW_TASK_TITLE':
// // //         let newtodolist = state.find(task=> task.id === action.id)
// // //          if (newtodolist) {
// // //             newtodolist.title = action.title
// // //          }
// // //       return [...state]
// // //       default:
// // //          throw new Error("Error type");
// // //    }
// // // }

// // // export const addTask = (todoListId: string,title: string): addTask=>{
// // //    return {
// // //       type: 'ADD_TASK',
// // //       id: todoListId,
// // //       title
// // //    }
// // // }
// // // export const removeTask = (taskId:string,todoListId: string): removeTask=>{
// // //    return {
// // //       type: 'REMOVE_TASK',
// // //       id: todoListId
// // //    }
// // // }
// // // export const setNewTaskTitle = (todoListId: string, title:string): setNewTaskTitle=>{
// // //    return {
// // //       type: 'SET_NEW_TASK_TITLE',
// // //       id: todoListId,
// // //       title
// // //    }
// // // }
// // // export const changeTaskChecked =(taskId: string, todoListId: string)=>{
    
// // //   }

export default {}