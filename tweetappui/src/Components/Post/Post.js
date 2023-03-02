import Header from '../header/header';
import SideNav from '../sidenav/sidenav';
import './Post.css';
import swal from 'sweetalert';
import { useState } from 'react';

function Post(){
    const[tweet,setTweet]=useState('');
    const handleTweet=(e)=>{
        setTweet(e.target.value);
    }
    const clickHandler=()=>{
        if(tweet==="" || tweet===null){
            swal("Can't Tweet","Please write something to Tweet","error");
        }
        else{
            const username=sessionStorage.getItem("username");
            fetch(`http://localhost:15930/api/tweets/add?tweetDto=${tweet}&&username=${username}`)
           
        swal("Tweeted","Successfully Tweeted","success");
        setTweet('');
        }
    }
    return(
    <div>
        <Header></Header>
        <div style={{display:'flex',alignItems:'stretch',width:'100%'}}>
        
        <SideNav></SideNav>
        <div className='App'>
            <textarea placeholder="Tweet here.." value={tweet} onChange={handleTweet}
            className='box1'></textarea>
            {/* <div className='box' style={{alignItems:'left',justifyContent:'left'}} >
                <textarea style={{alignItems:'left'}}></textarea>
            </div> */}
            <div style={{paddingTop:5}}>
                    <button onClick={clickHandler}
                    style={{backgroundColor:'black' ,color:'whitesmoke'}}>Tweet</button>
            </div>
        </div>
       
        </div>
        
    </div>
        
    );
}
export default Post;