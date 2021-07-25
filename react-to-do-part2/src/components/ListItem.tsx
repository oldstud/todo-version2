import React,{useState} from "react"
import ExampleChildren from "./ExampleChildren";
    
const ListItem:React.FC<ListItemTypes> = ({todo,clickClose,identificator,clickEdit})=>{

const [isChecked, setIsChecked] = useState(false);

const handleChangeCheckBox= ()=>{
    setIsChecked(!isChecked)
}

    return(
     <ExampleChildren isChecked={isChecked} handleChangeCheckBox={handleChangeCheckBox} todo={todo} clickClose={clickClose} identificator={identificator} clickEdit={clickEdit}/>
    )
}

export default ListItem;

export type ListItemTypes = {
    identificator:number,
    todo:TodoType,
    clickClose:(item:number)=>void,
    clickEdit:(item:string)=>void,
};

export type CheckboxType ={
    isChecked:boolean,
    handleChangeCheckBox:()=>void,
};

type TodoType = {
    title:string,
    completed:boolean
};

