
import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { uuid } from "uuidv4";
import { api } from "../api/api";

export type FilterType = 'all'|'active'|'completed'
export type TaskType = {
   userId: number,
  id: string, 
  title: string,
  completed: boolean
}
export type Todo = {
   id: string
  title: string
  filter: FilterType
  tasks: TaskType[]
}
export type TodoListType ={
  todos :Todo[]
  fetchingTodo: boolean
}

  export const fetchTodo = createAsyncThunk(
      'todos/fetch',
      async (param:{page:number},thunkApi)=>{
         const {page} = param
         try {
            const response = await api.getTodos(page)
            return response.data
         } catch (error) {
            console.log(error);
         }
         
      }
   )


export const todoListsSlice = createSlice({
   name: 'todo',
   initialState: {
      todos:[],
      fetchingTodo:false,
   } as TodoListType,
   reducers: {
      addTodolist : (state,action)=>{
         state.todos.unshift({id: uuid(), title: action.payload.title, filter: 'all',tasks:[]})  
      },
      removeTodolist : (state,action)=>{
         const {todoListId} = action.payload
         
        state.todos = state.todos.filter(todo=> todo.id !== todoListId)
      },
      setTodolistFilter : (state,action)=>{
         const {filter,todoIndex} = action.payload
         state.todos[todoIndex].filter = filter
      },
      setNewTodolistTitle : (state,action)=>{         
         const {title, todoIndex} = action.payload
         state.todos[todoIndex].title =title
         
      },
      addTask : (state,action)=>{
         const {title, todoIndex} = action.payload
         state.todos.map((todo,index)=>{
            if (todoIndex === index) {
               todo.tasks.unshift({
                  "userId": 1,
                  id: uuid(),
                  title :title,
                  completed: false
               })
            }
         })
      },
      removeTask : (state,action)=>{
         const {taskId, todoIndex} = action.payload   
        state.todos[todoIndex].tasks = state.todos[todoIndex].tasks.filter(task=>task.id !== taskId)
      },
      setNewTaskTitle : (state,action)=>{
         console.log('setNewTaskTitle');
         const {title,taskId,todoIndex} = action.payload
            state.todos[todoIndex].tasks.map(task=>{
               (task.id === taskId) && (task.title = title)
            })
      },
      changeTaskChecked : (state,action)=>{
         const {taskId, todoIndex} = action.payload
         state.todos[todoIndex].tasks.map(task=>{
            (task.id === taskId) && (task.completed = !task.completed)
         })
         
      }
   },
   extraReducers: {
      [fetchTodo.fulfilled.type] : (state, action)=>{
         console.log(action);
         state.todos.unshift({id: uuid(), title: 'from JSON placeholder', filter: 'all',tasks:action.payload })
         state.fetchingTodo = false
         
      },
      [fetchTodo.rejected.type] : (state, action)=>{
         state.fetchingTodo = false
         console.log(action);
      },
      [fetchTodo.pending.type] : (state, action)=>{
         state.fetchingTodo = true
         console.log(action);
      },
   }
   // (builder)=>{
   //    builder.addCase(fetchTodo.pending,(state,action)=>{
   //       console.log('fetchTodo.pending');
         
   //    }),
   //    builder.addCase(fetchTodo.fulfilled,(state,action)=>{
   //       // @ts-ignore
   //       console.log('fetchTodo.fulfilled');
   //       // state.push({id: uuid(), title: 'from JSON placeholder', filter: 'all',tasks:action.payload })
   //    }),
   //    builder.addCase(fetchTodo.rejected,(state,action)=>{

   //       console.log('fetchTodo.rejected');
         
   //    })
   // }
})



export const {addTodolist,removeTodolist,setTodolistFilter,setNewTodolistTitle,addTask,removeTask,setNewTaskTitle,changeTaskChecked} = todoListsSlice.actions
export default todoListsSlice.reducer
