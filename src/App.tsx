import React, { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import { uuid } from 'uuidv4'

export type TasksType = {
  id: number | string
  title: string
  isDone: boolean
}
export type filterType = 'all'|'active'|'completed'


function App() {

  let [tasks, setTasks] = useState<Array<TasksType>>([
    {id: uuid(), title: 'HTML&CSS',isDone: true},
    {id: uuid(), title: 'JS',isDone: true},
    {id: uuid(), title: 'ReactJS',isDone: false},
    {id: uuid(), title: 'Rest API',isDone: false},
    {id: uuid(), title: 'GraphQL',isDone: false},
  ])
  let [titleValue, setTitleValue] = useState<string>('')
  let [filter, setFilter] = useState<filterType>('all')
  let [requerInput, setRequerInput] = useState<boolean | null>(null)


  let filterTasks = tasks
  if (filter === 'active'){
    filterTasks = tasks.filter(task=>task.isDone === false)
  }else if (filter === 'completed'){
    filterTasks = tasks.filter(task=>task.isDone === true)
  }
  const setFilters =(filter:filterType)=>{
    setFilter(filter)
  }

  const removeTask =(id:number | string)=>{
    let filterTasks = tasks.filter(t=>t.id !== id)
      setTasks(filterTasks)
  }
  const addTask =()=>{
    let newTask={id: uuid(), title: titleValue,isDone: false}
      setRequerInput(false)
      if (titleValue.trim() !== '') {
        setTasks([newTask,...tasks])
        setTitleValue('')
      } else {
        setRequerInput(true)
      }
    

  }
  const changeTaskChecked =(taskId: string | number)=>{
      const changeTasks = tasks.map(task =>{
        if (task.id === taskId) 
          return {...task, isDone: !task.isDone}
        return task
        
        
      })
      setTasks(changeTasks)
      
  }


  return (
    <div className="App">
      <TodoList title='What to Learn' 
      tasks={filterTasks} 
      titleValue={titleValue}
      setTitleValue={setTitleValue}
      removeTask={removeTask}
      setFilters={setFilters}
      addTask={addTask}
      filter={filter}
      requerInput={requerInput}
      changeTaskChecked={changeTaskChecked}
      setRequerInput={setRequerInput}
      />
    </div>
  )
}

export default App;
