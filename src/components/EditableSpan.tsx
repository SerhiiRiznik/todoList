import React, {KeyboardEvent, ChangeEvent, useState } from 'react';


type EditableSpan = {
   title: string
   changeTitle: (title: string)=>void
}


const EditableSpan:React.FC<EditableSpan>=(props)=> {

   let [editMode , setEditMode] = useState<boolean>(false)
   let [titleValue, setTitleValue] = useState<string>(props.title)

   const setTitleValueHandler =(event:ChangeEvent<HTMLInputElement>)=>{
      setTitleValue(event.currentTarget.value)
   }

   const activateEditMode = ()=> {
         setEditMode(true)
   }
   const activateViewMode = ()=> {
         props.changeTitle(titleValue)
         setEditMode(false)
   }
   const activateViewModeOnKeyPress = (event: KeyboardEvent<HTMLInputElement>)=> {

         if (event.charCode === 13) {
            props.changeTitle(titleValue)
            setEditMode(false)
         }  
        
   }

   return editMode ?  
    <input onKeyPress={activateViewModeOnKeyPress} autoFocus type="text" value={titleValue} onChange={setTitleValueHandler} onBlur={activateViewMode}/> 
    :<span onDoubleClick={activateEditMode}>{props.title}</span>
   
}
export default EditableSpan