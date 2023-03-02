import { Col,Container, Row } from "reactstrap";
import './header.css';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";


function Header(){
    const navigate=useNavigate();
    function Logoutclickhandler(e){
        navigate('/');
    }
    return(
        <div >
         <Container style={{maxWidth:'1590px'}}>
        <Row style={{backgroundColor:'rgb(33,37,41)',fontSize:'4rem'}}>
            <Col className="container-fluid col-md-10" style={{ color:'white' }}>
            <label>TweetApp</label>
            </Col>
            <Col className="col-md-2" style={{fontSize:45,paddingTop:10}} >
            <div ><button onClick={Logoutclickhandler}><FaUser/>Logout</button></div>
            </Col>
        </Row>

        </Container>
        </div>
    );
}
export default Header;
