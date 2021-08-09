import React, { KeyboardEvent,ChangeEvent, useState } from "react";



type  PropsTypes ={
   addItem: (title:string)=>void
}

const AddItemForm:React.FC<PropsTypes> = (props)=> {

      let [titleValue, setTitleValue] = useState<string>('')
      let [requerInput, setRequerInput] = useState<boolean | null>(null)

   const setTitleValueHandler =(event:ChangeEvent<HTMLInputElement>)=>{
      setTitleValue(event.currentTarget.value)
   }
   const addItemOnKeyPressHandler =(event: KeyboardEvent<HTMLInputElement>)=>{
      setRequerInput(null)
      if (event.charCode === 13) {

         if (titleValue.trim() !== '') {
            setRequerInput(false)   
            props.addItem(titleValue)
            setTitleValue('')
         } else {
            setRequerInput(true)
         }
      }
   }
   const addItemFormHandler= ()=>{
      if (titleValue.trim() !== '') {
         setRequerInput(false)
         props.addItem(titleValue)
         setTitleValue('')
         } else {
         setRequerInput(true)
         }
   }

   return (
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




export default AddItemForm
