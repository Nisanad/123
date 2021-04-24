import React, { useEffect, useState } from 'react';
import Login from './components/Login';
import './App.css';



document.body.style.background = "#e6f7ff"; //พื้นหลังทั้งเว็บ
function App() {
  const [session, setSession] = useState({
    isLoggedIn: false,
    cerrentUser: null,
    errorMessage: null,
  });
  /* useEffect(() => {
     const handleAuth = auth.onAuthStateChanged(user =>{
       if(user){
         setSession({
          isLoggedIn: true,
          cerrentUser: null,
          errorMessage: null,
         });
       }
     });
   
     return() => {
       handleAuth();
     }
   }, [])*/
  
   
  return (
  <div  >
    
        {session.isLoggedIn ? (
          <header >          
          </header>) :
          (<Login setSession={setSession} />)

        }
      </div>
  );

}

export default App;
