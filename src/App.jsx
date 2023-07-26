import './App.css'
import { useState } from 'react';

import AddUser from './Components/Users/AddUser'
import UsersList from './Components/Users/UsersList';

function App() {
  
  const[usersList,setusersList]=useState([]);

  const addUserHandler=(uname,uage)=>{
    setusersList(
      [...usersList,{name: uname , age: uage ,id: Math.random().toString()} ]
    )
    //Alternative Approach setusersList((prevUserlist) => {
    //   return [...prevUserlist ,{name: uname , age: uage ,id: Math.random().toString()}]; 
    // });
  };

  return (
   <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
   </div>
  )
}

export default App;
