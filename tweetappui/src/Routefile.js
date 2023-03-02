import App from './App';
import{ Route, Routes} from 'react-router-dom';
import Home from './Components/Home/Home';
import Post from './Components/Post/Post';
import ViewMyTweets from './Components/viewmytweets/viewmytweets';
import ViewAllTweets from './Components/viewalltweets/viewalltweets';
import Register from './Components/Register/Register';

function RoutesFile(){return(

        <Routes>
            <Route exact path="/" element={<App/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/post" element={<Post/>}></Route>
            <Route path="/mytweets" element={<ViewMyTweets/>}></Route>
            <Route path="/alltweets" element={<ViewAllTweets/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
        </Routes>
    
)};


export default RoutesFile;