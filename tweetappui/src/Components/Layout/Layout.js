import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Label} from 'reactstrap';


import './Layout.css';

function Layout() {
  
  const [items, setItems] = useState([]);
  const [username,setUserName]=useState('');
  const [password,setPassword]=useState('');
  const navigate=useNavigate();
  
  
  const handleUserChange=(e)=>{
    setUserName(e.target.value);
  }
  const handlePasswordChange=(e)=>{
    setPassword(e.target.value);
  }
  function handleSubmit() {
    //Service call to be made here
      if(username.includes('@')){
        fetch(`http://localhost:15930/api/tweets/login?username=${username}&&password=${password}`)
        .then(
           (res) => {
          return  res.json();
        })
          .then((data) => {
            sessionStorage.setItem("username", data.email);
            setItems(data);
           })
          navigate('/home');
      } else {
        window.alert('Please enter valid username');
      }
  }

 
  
  const handleRegistration=(e)=>{
    navigate('/register');
  }
    return(
    <div className="App">
      <div className='box'>
        <div className='header pad-top-2rem'>
          <h2>Welcome User :)</h2>
        </div>

        <Container>
          <form onSubmit={handleSubmit}>
          <Row className='pad-top-2rem'>
            <Col >
            <Label>UserName:</Label>  
            </Col>
            <Col >
              <input style={{
    color:'black'}} onChange={handleUserChange} value={username} placeholder="Please Enter UserName.." required/>
            </Col>
          </Row>
          <Row className='pad-top-2rem'>
            <Col >
            <Label>Password:</Label> 
            </Col>
            <Col >
              <input style={{
    color:'black'}} type={"password"}  value={password} onChange={handlePasswordChange}  placeholder="Please Enter Password.." required/>
            </Col>
          </Row>
          <Row className='pad-top-2rem'>
            <Col  className='col-sm-6'>
            Forgot Password?
            </Col>
            <Col className='col-sm-3'>
            <button type="submit" style={{backgroundColor: 'green',
    color:'whitesmoke'}}>Login</button>
            </Col>
            <Col className='col-sm-3'>
            <button style={{backgroundColor: 'green',
    color:'whitesmoke'}} onClick={handleRegistration}>Register</button>
            </Col>
            </Row>
            </form>
          
          </Container>
            
          
          
        
        
      </div>
    </div>
    );
}

export default Layout;