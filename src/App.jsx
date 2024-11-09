
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import './App.css'
import { auth } from './firebase/firebase.init';
import { useState } from 'react';

function App() {
  const [user,setuser] = useState(null);
  const googleprovider = new GoogleAuthProvider();

 
  const signinhandle = () =>{
   signInWithPopup(auth,googleprovider)
   .then(result =>{
    console.log(result.user);
    setuser(result.user);
   })
   .catch(error =>console.log("the is a error",error));
  }
  

  return (
    <>
     
      <h1>our dimple project </h1>
      <button onClick={signinhandle}>SignIn</button>
      {
        user && <div>
          <h3>{user.displayName}</h3>
          <p>{user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      }
     
    </>
  )
}

export default App
