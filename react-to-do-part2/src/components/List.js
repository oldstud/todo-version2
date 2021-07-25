import React,{useEffect,useState} from 'react';
import ListItem from './ListItem';
import Input from "./Input"

function List(){
const [todos,setTodos] = useState([]);

useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
.then(response => response.json())
.then(todos =>
    setTodos(todos))
},[])

function addTodo(title) {
  setTodos(todos.concat([{
    title,
    completed:false
  }]))
  
}

function removeTodo(todo){
  setTodos(todos.filter((_,index)=>{
    return  index+1!==todo;
  }))
}

function editTodo(stroka) {
  console.log(stroka)
}


  return(
    <>

    <Input onCreate={addTodo}/>

      <ul className="todo-list">
      {todos.map((todo,index)=>{
          return <ListItem todo={todo} key={index} identificator={index+1} clickClose={removeTodo} clickEdit={editTodo} />
      })}
      </ul>
      </>
  )
}

export default List;