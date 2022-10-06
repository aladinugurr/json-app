import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import ListItem from './ListItem';

function App() {
  const [method,setMethod] = useState('users')
  const [isChecked,setIsChecked] = useState(false);
  const [isLoading,setIsLoading] = useState(true) 
  const API_URL = `https://jsonplaceholder.typicode.com/${method}`
 const [items,setItems] = useState([]);

 //fetch data
 const getData = async () =>{
  const response = await fetch(API_URL)
  const listItems = await response.json();
  
  setIsLoading(false)
 setItems(listItems) 
}
useEffect(()=>{ 
 
getData()

},[items])
const clickHandler = (e) =>{

setMethod(e.target.innerText)

}
  return (
    <div className="App">{  console.log(items)}
    <div className='buttons'>
    <button  style={ method === "Users" ? {background:"#000",color:'#fff'} : null}  onClick={clickHandler} >Users</button>
     <button style={ method === "Posts" ? {background:"#000",color:'#fff'} : null} onClick={clickHandler} >Posts</button>
     <button style={ method === "Comments" ? {background:"#000",color:'#fff'} : null} onClick={clickHandler} >Comments</button>
    </div>
     
     <div className="container">

      {
      isLoading ? <h3>Loading...</h3> :
      items.map((item,index)=>{
      return   <ListItem item={item} key={index} />
          
      })}
     </div>
    </div>
  );
}

export default App;
