import React, { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import AddItemForm from './components/AddItemForm'
import { AppBar, Button, CircularProgress, Container, Grid, IconButton, MenuItem, Paper, Toolbar, Typography } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, addTodolist, changeTaskChecked, fetchTodo, FilterType,
   removeTask, removeTodolist, setNewTaskTitle, setNewTodolistTitle, setTodolistFilter, Todo } from './state/todolistsReducer'
import { RootState } from './state/store'



function App (): JSX.Element {
  const dispatch = useDispatch()
  const {todos, fetchingTodo} = useSelector((state:RootState)=>state.todoLists)
  const [page, setPage] = useState<number>(1)
  
  
  const setFilters =(filter:FilterType, todoIndex: number)=> dispatch(setTodolistFilter({filter,todoIndex}))
  const removeTasks =(taskId:string, todoIndex: number)=> dispatch(removeTask({taskId,todoIndex}))
  const addTasks =(title: string, todoIndex: number)=> dispatch(addTask({title,todoIndex}))
  const changeTasksChecked =(taskId: string, todoIndex: number)=> dispatch(changeTaskChecked({taskId, todoIndex}))
  const changeTaskTitle = (title:string,taskId: string, todoIndex: number)=>dispatch(setNewTaskTitle({title,taskId,todoIndex}))
  const removeTodoLists = (todoListId: string) => dispatch(removeTodolist({todoListId}))
  const changeTodoTitle = (title:string,todoIndex: number)=> dispatch(setNewTodolistTitle({title,todoIndex}))
  const addItemForm = (title: string)=> dispatch(addTodolist({title}))
 
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuItem />
          </IconButton>
          <Button disabled={fetchingTodo} color="inherit" onClick={()=>{
            dispatch(fetchTodo({page}))
            setPage(page + 1)
          }}>add random todo</Button>
          {
            fetchingTodo ? <CircularProgress color='secondary' /> : null
          }
      </Toolbar>
    </AppBar>
      <Container fixed>
        <Grid container style={{padding: '20px',flexWrap:'nowrap'}}>
          <AddItemForm addItem={addItemForm}/>
        </Grid>
        <Grid container spacing={3} >
          {
            (todos.length > 0) ? todos.map((todo:Todo, todoIndex:number) => {
              return (
                <Grid key={todoIndex} item style={{width:'100%'}}>
                  <Paper style={{padding: '10px'}}>
                    <TodoList 
                      todoId={todo.id}
                      todoIndex={todoIndex}
                      title={todo.title}
                      changeTodoTitle={changeTodoTitle}
                      filter={todo.filter}
                      removeTask={removeTasks}
                      setFilters={setFilters}
                      addTask={addTasks}
                      removeTodoList={removeTodoLists}
                      changeTaskChecked={changeTasksChecked}
                      changeTitle={changeTaskTitle}
                      
                    />
                  </Paper>
                </Grid>
              )
            }) : <Typography variant='h5'>No todos</Typography>
          }
        </Grid>
      </Container>
    </div>
  )
}

export default App
