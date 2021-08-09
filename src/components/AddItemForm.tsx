<<<<<<< HEAD
=======
import { IconButton, TextField } from "@material-ui/core";
import { AddBox } from "@material-ui/icons";
>>>>>>> master
import React, { KeyboardEvent,ChangeEvent, useState } from "react";



type  PropsTypes ={
   addItem: (title:string)=>void
}

const AddItemForm:React.FC<PropsTypes> = (props)=> {

      let [titleValue, setTitleValue] = useState<string>('')
<<<<<<< HEAD
      let [requerInput, setRequerInput] = useState<boolean | null>(null)
=======
      let [requerInput, setRequerInput] = useState<string>('')
>>>>>>> master

   const setTitleValueHandler =(event:ChangeEvent<HTMLInputElement>)=>{
      setTitleValue(event.currentTarget.value)
   }
   const addItemOnKeyPressHandler =(event: KeyboardEvent<HTMLInputElement>)=>{
<<<<<<< HEAD
      setRequerInput(null)
      if (event.charCode === 13) {

         if (titleValue.trim() !== '') {
            setRequerInput(false)   
            props.addItem(titleValue)
            setTitleValue('')
         } else {
            setRequerInput(true)
=======
      setRequerInput('')
      if (event.charCode === 13) {

         if (titleValue.trim() !== '') {
            setRequerInput('')   
            props.addItem(titleValue)
            setTitleValue('')
         } else {
            setRequerInput('Title is Required')
>>>>>>> master
         }
      }
   }
   const addItemFormHandler= ()=>{
      if (titleValue.trim() !== '') {
<<<<<<< HEAD
         setRequerInput(false)
         props.addItem(titleValue)
         setTitleValue('')
         } else {
         setRequerInput(true)
=======
         setRequerInput('')
         props.addItem(titleValue)
         setTitleValue('')
         } else {
         setRequerInput('Title is Required')
>>>>>>> master
         }
   }

   return (
<<<<<<< HEAD
      <div>
         <input 
               className={requerInput ? 'requer' : ''}
               type="text" value={titleValue} 
               onChange={setTitleValueHandler}
               onKeyPress={addItemOnKeyPressHandler}
            />
            <button 
               onClick={addItemFormHandler}
            >+</button>
            {requerInput ? <label style={{'display': 'block'}}  htmlFor='titleValue'>Title is Required</label> : null}
      </div>
   )
};
=======
      <>
         <TextField 
            variant='outlined'
            type="text" value={titleValue} 
            onChange={setTitleValueHandler}
            onKeyPress={addItemOnKeyPressHandler}
            error={!!requerInput}
            label='Title'
            helperText={requerInput}
            />
         <IconButton  color='primary'  onClick={addItemFormHandler}>
            <AddBox />
         </IconButton>
      </>
   )
}
>>>>>>> master




export default AddItemForm
