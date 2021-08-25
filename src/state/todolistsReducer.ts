import { uuid } from 'uuidv4';
import { FilterType } from './../App';
import { TodoListType } from "../App";

export type addTodolist = {
   type: 'ADD_TODOLIST'
   id: string
   title: string
}
export type removeTodolist = {
   type: 'REMOVE_TODOLIST'
   id: string
}
export type setTodolistFilter = {
   type: 'SET_TODOLIST_FILTER'
   id: string
   filter: FilterType
}
export type setNewTodolistTitle = {
   type: 'SET_NEW_TODOLIST_TITLE'
   id: string
   title: string
}

type ActionType = addTodolist| removeTodolist | setTodolistFilter | setNewTodolistTitle



export const TodoListsReducer = (state:Array<TodoListType> , action: ActionType)=>{
   switch (action.type) {
      case 'ADD_TODOLIST':
         return [...state , {id: uuid(), title: action.title, filter: 'all'}]
      case 'REMOVE_TODOLIST':
         return state.filter((todo)=>todo.id !== action.id)
      case 'SET_TODOLIST_FILTER':
        let todolist = state.find(todo => todo.id === action.id)
         if (todolist) {
            todolist.filter = action.filter
         }
      return [...state]
      case 'SET_NEW_TODOLIST_TITLE':
        let newtodolist = state.find(todo=> todo.id === action.id)
         if (newtodolist) {
            newtodolist.title = action.title
         }
      return [...state]
      default:
         throw new Error("Error type");
   }
}

export const addTodolist = (todoListId: string,title:string): addTodolist=>{
   return {
      type: 'ADD_TODOLIST',
      id: todoListId,
      title
   }
}
export const removeTodolist = (todoListId: string): removeTodolist=>{
   return {
      type: 'REMOVE_TODOLIST',
      id: todoListId
   }
}
export const setTodolistFilter = (todoListId: string, filter:FilterType): setTodolistFilter=>{
   return {
      type: 'SET_TODOLIST_FILTER',
      id: todoListId,
      filter
   }
}
export const setNewTodolistTitle = (todoListId: string, title:string): setNewTodolistTitle=>{
   return {
      type: 'SET_NEW_TODOLIST_TITLE',
      id: todoListId,
      title
   }
}


