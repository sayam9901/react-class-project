
import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from '../Commons/Spinner/spinner';
import "./loginForm.css";

let auth=true;
function Login({onLoginSuccessful}){

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showError, setShowError] = useState(false)

  function onEmailChange(e){
    setEmail(e.target.value)
  }
  function onPasswordChange(e){
   setPassword(e.target.value)
  }
  function onLogin(email,password){
    
    setIsLoading(true)
    

    //Authenticate by making an API call 

    setTimeout(()=>{
      if(auth){
       onLoginSuccessful();
      }else{
        setShowError(true)
      }
      setIsLoading(false)
    },4000);

  }
    return (
      <Form className='loginForm' >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={(e)=>onEmailChange(e)} value={email} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={(e)=>onPasswordChange(e)}  value={password} type="password" placeholder="Password" />
        </Form.Group>

        {(isLoading)?<Spinner/>:
        (<Button onClick={()=>onLogin(email,password)} variant="primary">
          Submit
        </Button>)
        }
       
        {showError&& <p style={{color:"red"}}>Invalid Credentials</p>}
       
      </Form>
    );  
}

export default Login;