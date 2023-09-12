//create state that is acessible to all
import react, {useState} from 'react';
import NoteContext from "./noteContext"
//arrow function

const NoteState =(props)=>{
//     const s1={
//         "name":"Anjali",
//         "class":"3b"

//     }
    //create method to update this state
   
    return (
        <NoteContext.Provider value={{}}>
           {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;