import Header from "../header/header";
import SideNav from "../sidenav/sidenav";
import { useEffect, useState } from "react";
import '../viewalltweets/viewalltweets.css'
function ViewMyTweets(){
    const [items,setItems]=useState([]);

    const Card = ({ userName,tweetString }) => (
        <div style={{backgroundColor:'lavenderblush',marginTop:'2rem',border: '3px solid black',borderRadius:20}}>
        <div style={{color:'black',fontFamily:'myFirstFont'}}>
           <b>{userName.toUpperCase()}</b>
        </div>
        <div style={{color:'blue', fontSize:10}}> 
           @{userName} 
        </div>
        <div style={{color:'black',fontStyle:'oblique',fontFamily: 'monospace',
    fontSize: 'xxx-large'}}>
            {tweetString}
          </div>
        </div>
        
      );
      
      const CardList = ({ friends }) => (
        <div>
          {friends.map(friend => <Card key={friend.id} {...friend} />)}
        </div>
      );

      let username=sessionStorage.getItem("username");
      username=username.split('@')[0]
    useEffect(()=>{
        
    fetch(`http://localhost:15930/api/tweets/viewmytweets?username=${username}`).then( (res)=>{return res.json();}).then((data) => {
        setItems(data);
       })
    },[])
    return(
    <div>
        <Header></Header>
        <div style={{display:'flex',alignItems:'stretch',width:'100%'}}>
        
        <SideNav></SideNav>
        <div className="view">
            <CardList friends={items} />
        </div>
        </div>
    </div>
        
    );
}
export default ViewMyTweets;