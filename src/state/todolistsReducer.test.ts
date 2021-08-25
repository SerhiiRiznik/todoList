import { FilterType, TodoListType } from './../App';
import { removeTodolist, TodoListsReducer, addTodolist, setTodolistFilter, setNewTodolistTitle } from './todolistsReducer';
import { uuid } from 'uuidv4';





test('TodoList should be remove', ()=>{
   let todolistID_1 = uuid()
   let todolistID_2 = uuid()

   const startState: Array<TodoListType> = [
    {id: todolistID_1, title: 'What to learn', filter: 'all'},
    {id: todolistID_2, title: 'What to do', filter: 'all'}
  ]

   const endState = TodoListsReducer(startState, removeTodolist(todolistID_2))


   expect(endState.length).toBe(1)
   expect(endState[0].id).toBe(todolistID_1)
})
test('New filter for Todolist should be changed', ()=>{
   let todolistID_1 = uuid()
   let todolistID_2 = uuid()

   let newFilter: FilterType = 'active'

   const startState: Array<TodoListType> = [
    {id: todolistID_1, title: 'What to learn', filter: 'all'},
    {id: todolistID_2, title: 'What to do', filter: 'all'}
  ]

   const endState = TodoListsReducer(startState, setTodolistFilter(todolistID_2,newFilter))


   expect(endState[0].filter).toBe('all')
   expect(endState[1].filter).toBe('active')
})
test('New title for Todolist should be changed', ()=>{
   let todolistID_1 = uuid()
   let todolistID_2 = uuid()

   let newTitle: string = 'New title'

   const startState: Array<TodoListType> = [
    {id: todolistID_1, title: 'What to learn', filter: 'all'},
    {id: todolistID_2, title: 'What to do', filter: 'all'}
  ]

   const endState = TodoListsReducer(startState, setNewTodolistTitle(todolistID_2,newTitle))


   expect(endState[0].title).toBe('What to learn')
   expect(endState[1].title).toBe(newTitle)
})
test('New todolist should be added', ()=>{
   let todolistID_1 = uuid()
   let todolistID_2 = uuid()
   let todolistID_3 = uuid()

   let newTodolist: TodoListType = {id: todolistID_3, title: 'What to repeat', filter: 'all'}

   const startState: Array<TodoListType> = [
    {id: todolistID_1, title: 'What to learn', filter: 'all'},
    {id: todolistID_2, title: 'What to do', filter: 'all'}
  ]

   const endState = TodoListsReducer(startState, addTodolist(todolistID_3,'What to repeat'))


   expect(endState[0].title).toBe('What to learn')
   expect(endState[2].title).toBe('What to repeat')
   expect(endState[2].filter).toBe('all')
})