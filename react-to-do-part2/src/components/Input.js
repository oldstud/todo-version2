import React,{useState} from 'react'

function Input(props) {
    const {onCreate} = props;
    
    const [value,setValue]=useState('');

    function submitHandler(event) {
        if(value.trim()){
            onCreate(value);    
        }
 
    }

    return(
        <>
        <input type="text" value={value} onChange={event=>setValue(event.target.value)}/>
        <button onClick = {submitHandler}>Add Todo</button>

        </>
    )
}

export default Input;