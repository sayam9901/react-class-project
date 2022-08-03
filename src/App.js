import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import UsersComponent from './Components/Users/users';
import LoginForm from './Components/LoginForm/loginForm';

  function App() {
     
    const [isLoggedIn, setIsLoggedIn] = useState(true)

   function onLoginSuccessful(){
      setIsLoggedIn(true);
    }

    return(
        <div className="App">
         {(isLoggedIn)?<UsersComponent/>:<LoginForm onLoginSuccessful={onLoginSuccessful} />}
        </div>
      );
    
    
  }



export default App;
