import {ListItemTypes,CheckboxType} from "./ListItem";

const ExampleChildren:React.FC<ListItemTypes&CheckboxType> =(props)=>{
const {todo,clickClose,identificator,clickEdit,handleChangeCheckBox,isChecked}=props;

    return(
        <li>
            <b>{identificator}</b>
            <input type="checkbox" onChange={()=>handleChangeCheckBox()}/>
            <span className={isChecked ? "cb-checked" : ""}>
             {todo.title} 
             </span>
             <button className="close-symbol" onClick={()=>clickEdit("stro4ka")}>edit</button>
             <button className="close-symbol" onClick={()=>clickClose(identificator)}>×</button>
             </li>
    )
}

export default ExampleChildren;

