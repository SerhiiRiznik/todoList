import { IconButton, TextField } from "@material-ui/core";
import { AddBox } from "@material-ui/icons";
import React, { KeyboardEvent,ChangeEvent, useState } from "react";



type  PropsTypes ={
   addItem: (title:string)=>void
}

const AddItemForm:React.FC<PropsTypes> = (props)=> {

      let [titleValue, setTitleValue] = useState<string>('')
      let [requerInput, setRequerInput] = useState<string>('')

   const setTitleValueHandler =(event:ChangeEvent<HTMLInputElement>)=>{
      setTitleValue(event.currentTarget.value)
   }
   const addItemOnKeyPressHandler =(event: KeyboardEvent<HTMLInputElement>)=>{
      setRequerInput('')
      if (event.charCode === 13) {

         if (titleValue.trim() !== '') {
            setRequerInput('')   
            props.addItem(titleValue)
            setTitleValue('')
         } else {
            setRequerInput('Title is Required')
         }
      }
   }
   const addItemFormHandler= ()=>{
      if (titleValue.trim() !== '') {
         setRequerInput('')
         props.addItem(titleValue)
         setTitleValue('')
         } else {
         setRequerInput('Title is Required')
         }
   }

   return (
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




export default AddItemForm
