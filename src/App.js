import React ,{useState} from "react";
import './App.css';




function App() {
  var array=[];
  const [newItem,setnewItem]=useState("");
  const [list,setlist]=useState([]);
  
  //  state={
  //         newItem:"",
  //         list:[]
  // }


const updateInput=(e)=>{
setnewItem(e.target.value);
console.log(newItem);
};

const addItem=()=>{
 
  array.push(newItem);
  //setlist(array);
  // this.setState({
  //     list:array,
  //     newItem :""
  // });
  
};

 
    return(
    <div className="App">
    
    <h1>To Do List{array.length} </h1>
    <form>
        <input 
          type='text'
          className='input'
          value={newItem}
          onChange={(e) => (setnewItem(e.target.value))}
      
        />
        <button className="button" onClick={addItem}>Add</button>
      </form>
      <ul>
      {array.forEach(item=>{
        <li>{item}</li>
      })}
       </ul>
    </div>
)

}



export default App;
