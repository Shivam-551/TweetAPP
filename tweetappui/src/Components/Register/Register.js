import { Col, Container, Row } from "reactstrap";
import { useState } from "react";
import './Register.css'
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';

function Register(){
    const navigate=useNavigate();

    const [firstname,setFirstname]=useState('');
    const [lastname,setLastname]=useState('');
    const [email,setEmail]=useState('');
    const [contact,setContact]=useState('');
    const [password,setPassword]=useState('');
    const [confirmpassword,setConfirm]=useState('');
    const handleFirstnameChange=(e)=>{
        setFirstname(e.target.value);
      }
      const handleLastnameChange=(e)=>{
        setLastname(e.target.value);
      }
      const handleEmailChange=(e)=>{
        setEmail(e.target.value);
      }
      const handleContactChange=(e)=>{
        setContact(e.target.value);
      }
      const handlePasswordChange=(e)=>{
        setPassword(e.target.value);
      }
      const handleConfirmChange=(e)=>{
        setConfirm(e.target.value);
      }
      const registerSubmit=()=>{
        swal("Registration Successfull","You are registered successfully","success");
        navigate('/');
      }
    return (
    <div className="App">
        <div className='box2'>
            <Container>
                <form onSubmit={registerSubmit}>
                <Row className="pad-top-left-2rem">
                    <Col>
                    <label>FirstName:</label>
                    </Col>
                    <Col>
                    <input type="text" onChange={handleFirstnameChange} value={firstname}></input>
                    </Col>
                    
                    <Col>
                    <label>SecondName:</label>
                    </Col>
                    <Col>
                    <input type="text" onChange={handleLastnameChange} value={lastname}></input>
                    </Col>
                    
                </Row>
                <Row className="pad-top-left-2rem">
                    <Col>
                    <label>Email:</label>
                    </Col>
                    <Col>
                    <input type="text" onChange={handleEmailChange} value={email}></input>
                    </Col>
                    <Col>
                    <label>Contact Number:</label>
                    </Col>
                    <Col>
                    <input type="text" onChange={handleContactChange} value={contact}></input>
                    </Col>
                </Row>
                <Row className="pad-top-left-2rem">
                    <Col>
                    <label>Password:</label>
                    </Col>
                    <Col>
                    <input type="text" onChange={handlePasswordChange} value={password}></input>
                    </Col>
                    <Col>
                    <label>Confirm Password:</label>
                    </Col>
                    <Col>
                    <input type="text" onChange={handleConfirmChange} value={confirmpassword}></input>
                    </Col>
                </Row>
                <div>
                <button type="submit" style={{backgroundColor:'green',marginTop:'40px'}}>
                    Register
                </button>

                </div>
                </form>
            </Container>
            
        
        </div>
    </div>
    )
}
export default Register;
