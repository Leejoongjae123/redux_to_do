import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import {addToDos,removeToDos} from './components/store'
import {useState,useEffect} from 'react'

function App() {
  const [toDo,setToDo]=useState("")
  let dispatch=useDispatch()


  const list = useSelector((state)=>{
    return state
  })

  const onChangeText=(e)=>{
    setToDo(e.target.value)
  }
  
  
  
  return (
    <div className="App">
      <h3>Hello</h3>
      <p>Todo</p>
      <input type="text" onChange={onChangeText}/>
      <button onClick={()=>{dispatch(addToDos(toDo))}}>Send</button>
      <ul>
        {list.toDos.map((a,i)=>
          <>
          <li>
            {a}
            <button onClick={()=>{dispatch(removeToDos(i))}}>Delete</button>
          </li>
          
          </>
        )
        }
      </ul>
      
    </div>
  );
}

export default App;
