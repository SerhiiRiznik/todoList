import React, { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import { uuid } from 'uuidv4'
import AddItemForm from './components/AddItemForm'
import { AppBar, Button, Container, Grid, IconButton, MenuItem, Paper, Toolbar, Typography } from '@material-ui/core'

export type TaskType = {
  id: string, 
  title: string,
  isDone: boolean
}
export type TasksType = {
  [key: string] : Array<TaskType>
}
export type FilterType = 'all'|'active'|'completed'

export type TodoListType ={
  id: string
  title: string
  filter: FilterType
}

function App() {
  let todo_list_id1 = uuid()
  let todo_list_id2 = uuid()
  let [todoLists , setTodoLists] = useState<Array<TodoListType>>([
    {id: todo_list_id1, title: 'What to learn', filter: 'all'},
    {id: todo_list_id2, title: 'What to do', filter: 'all'}
  ])


  let [tasks, setTasks] = useState<TasksType>({
    [todo_list_id1]: [
      {id: uuid(), title: 'HTML&CSS',isDone: true},
      {id: uuid(), title: 'JS',isDone: true},
      {id: uuid(), title: 'ReactJS',isDone: false},
      {id: uuid(), title: 'Rest API',isDone: false},
      {id: uuid(), title: 'GraphQL',isDone: false},
    ],
    [todo_list_id2]: [
      {id: uuid(), title: 'Read book',isDone: true},
      {id: uuid(), title: 'eat',isDone: true},
      {id: uuid(), title: 'coding',isDone: false},
      {id: uuid(), title: 'sleep',isDone: false},
      {id: uuid(), title: 'repeat',isDone: false},
    ],
  })
  
  

  const setFilters =(filter:FilterType, todoListId: string)=>{
    let todolist = todoLists.find(todo => todo.id === todoListId)

    if (todolist) {
      todolist.filter = filter
      setTodoLists([...todoLists])
    }
    
  }
  const removeTask =(id:string, todoListId: string)=>{
    let todolistTasks = tasks[todoListId]
    
    tasks[todoListId] = todolistTasks.filter(t=>t.id !== id)
      setTasks({...tasks})
  }
  const addTask =(title: string, todoListId: string)=>{
    let newTask={id: uuid(), title,isDone: false}
    let todolistTasks = tasks[todoListId]
      tasks[todoListId] = [newTask, ...todolistTasks]
      setTasks({...tasks})
  }
  const removeTodoList = (todoListId: string) => {

      setTodoLists(todoLists.filter(todo=>todo.id !== todoListId))

      delete tasks[todoListId]
    setTasks({...tasks})
  }
  const changeTaskChecked =(taskId: string, todoListId: string)=>{
    let todolistTasks = tasks[todoListId]
    let task = todolistTasks.find(t => t.id === taskId)
    if (task) {
      task.isDone = !task.isDone
      setTasks({...tasks})
    }
  }
  const changeTitle = (title:string,taskId: string, todoListId: string)=>{

    let todolistTasks = tasks[todoListId]
      let task = todolistTasks.find(t => t.id === taskId)
      if (task) {
        task.title = title
        setTasks({...tasks})
      }
  }
  const changeTodoTitle = (title:string,todoListId: string)=>{
    
    let newtodolist = todoLists.find(todo=> todo.id === todoListId)
      
      if (newtodolist) {
        newtodolist.title = title
        setTodoLists([...todoLists])
      }
  }
  const addItemForm = (title: string)=>{
    let newTodo_list_id = uuid()
    let newItem:TodoListType = {id: newTodo_list_id, title, filter: 'all'}

    setTodoLists([...todoLists,newItem])
    setTasks({[newTodo_list_id]: [], ...tasks})
  }

  const getTasks = (todoLists: TodoListType): TaskType[] =>{
      let filteredTasks = tasks[todoLists.id]
          if (todoLists.filter === 'active'){
            return filteredTasks.filter(task => task.isDone === false)
          }else if (todoLists.filter === 'completed'){
            return filteredTasks.filter(task=>task.isDone === true)
          }
    return filteredTasks
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
          {todoLists.map((todo, todoIndex) => {
            let tasks = getTasks(todo)
            return (
              <Grid key={todoIndex} item>
                <Paper style={{padding: '10px'}}>
                  <TodoList 
                    
                    id={todo.id}
                    title={todo.title}
                    changeTodoTitle={changeTodoTitle}
                    filter={todo.filter}
                    tasks={tasks}
                    removeTask={removeTask}
                    setFilters={setFilters}
                    addTask={addTask}
                    removeTodoList={removeTodoList}
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

export default App;
