import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';

export type TasksType = {
  id: number
  title: string
  isDone: boolean
}

export type filterType = 'all'|'active'|'complited'
function App() {

  let [tasks, setTasks] = useState ([
    {id: 1, title: 'HTML&CSS',isDone: true},
    {id: 2, title: 'JS',isDone: true},
    {id: 3, title: 'ReactJS',isDone: false},
    {id: 4, title: 'Rest API',isDone: false},
    {id: 5, title: 'GraphQL',isDone: false},
  ])

let [filter, setFilter] = useState<filterType>('all')
  let filterTasks = tasks
if (filter === 'active'){
    filterTasks = tasks.filter(task=>task.isDone === false)
  }else if (filter === 'complited'){
    filterTasks = tasks.filter(task=>task.isDone === true)
  }
  


  
  function setFilters(filter:filterType){
    setFilter(filter)
  }

  function removeTask (id:number){
    let filterTasks = tasks.filter(t=>t.id !== id)
      setTasks(filterTasks)
  }


  return (
    <div className="App">
      <TodoList title='What to Learn' 
      tasks={filterTasks} 
      removeTask={removeTask}
      setFilters={setFilters}
      />
    </div>
  );
}

export default App;
