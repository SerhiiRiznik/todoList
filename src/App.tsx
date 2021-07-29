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

    setTasks([newTask,...tasks])
    setTitleValue('')

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
      />
    </div>
  )
}

export default App;
