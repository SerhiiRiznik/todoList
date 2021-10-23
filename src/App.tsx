import React, { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import { uuid } from 'uuidv4'
import AddItemForm from './components/AddItemForm'
import { AppBar, Button, Container, Grid, IconButton, MenuItem, Paper, Toolbar, Typography } from '@material-ui/core'
import { connect, useDispatch, useSelector } from 'react-redux'
import { addTask, addTodolist, FilterType, removeTask, removeTodolist, setTodolistFilter, TaskType } from './state/todolistsReducer'
import { RootState } from './state/store'


export type TasksType = {
  [key: string] : Array<TaskType>
}



function App({todoLists,tasks}:any) {
  const dispatch = useDispatch()
  
  
  const setFilters =(filter:FilterType, todoListId: string|number)=> dispatch(setTodolistFilter({filter,todoListId}))
  const removeTasks =(taskId:string, todoListId: string|number)=> dispatch(removeTask({taskId,todoListId}))
  const addTasks =(title: string, todoListId: string|number)=> dispatch(addTask({title,todoListId}))
  
  const removeTodoLists = (todoListId: string|number) => {
        // console.log('removeTodoList',todoListId);
      dispatch(removeTodolist({todoListId}))
      // setTodoLists(todoLists.filter(todo=>todo.id !== todoListId))

      // delete tasks[todoListId]
    // setTasks({...tasks})
  }
  const changeTaskChecked =(taskId: string, todoListId: string|number)=>{
        console.log('changeTaskChecked',taskId,todoListId);

    // let todolistTasks = tasks[todoListId]
    // let task = todolistTasks.find((t:any) => t.id === taskId)
    // if (task) {
    //   task.isDone = !task.isDone
    //   // setTasks({...tasks})
    // }
  }
  const changeTitle = (title:string,taskId: string, todoListId: string|number)=>{
    console.log('changeTitle',title,taskId,todoListId);

    // let todolistTasks = tasks[todoListId]
    //   let task = todolistTasks.find((t:any) => t.id === taskId)
    //   if (task) {
    //     task.title = title
        // setTasks({...tasks})
      // }
  }
  const changeTodoTitle = (title:string,todoListId: string|number)=>{
        console.log('ChangeTodoTitle',title,todoListId);

    // let newtodolist = todoLists.find((todo:any)=> todo.id === todoListId)
      
    //   if (newtodolist) {
    //     newtodolist.title = title
        // setTodoLists([...todoLists])
      // }
  }


  const addItemForm = (title: string)=>{

    dispatch(addTodolist({title}))

    // let newTodo_list_id = uuid()
    // let newItem:TodoListType = {id: newTodo_list_id, title, filter: 'all'}
    
    // dispatch(addTodolist({title}))
    // setTodoLists([...todoLists,newItem])
    // setTasks({[newTodo_list_id]: [], ...tasks})



  }

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuItem />
          </IconButton>
          <Typography variant="h6" >
            News
          </Typography>
          <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
      <Container fixed>
        <Grid container style={{padding: '20px'}}>
          <AddItemForm addItem={addItemForm}/>
        </Grid>
        <Grid container spacing={3}>
          {todoLists.map((todo:any, todoIndex:any) => {
            return (
              <Grid key={todoIndex} item>
                <Paper style={{padding: '10px'}}>
                  <TodoList 
                    
                    id={todo.id}
                    title={todo.title}
                    changeTodoTitle={changeTodoTitle}
                    filter={todo.filter}
                    tasks={todo.tasks}
                    removeTask={removeTasks}
                    setFilters={setFilters}
                    addTask={addTasks}
                    removeTodoList={removeTodoLists}
                    changeTaskChecked={changeTaskChecked}
                    changeTitle={changeTitle}
                  />
                </Paper>
              </Grid>
            )
          })}
        </Grid>
        
      </Container>
    </div>
  )
}

const mapStateToProps = (state:RootState)=>{
  return {
    todoLists: state.todoLists,
  }
}
const ConnectedApp = connect(mapStateToProps,null)(App)

export default ConnectedApp;
