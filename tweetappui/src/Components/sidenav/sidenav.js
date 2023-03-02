import { Sidenav, Nav, Toggle } from 'rsuite';
import { useState } from 'react';
import TwitterIcon from '@rsuite/icons/legacy/Twitter';
import GroupIcon from '@rsuite/icons/legacy/Group';
import EyeIcon from '@rsuite/icons/legacy/Eye';
import {useNavigate} from 'react-router-dom';
import './sidenav.css';

 function SideNav () {
  const navigate=useNavigate();
  const [expanded, setExpanded] = useState(true);
  const [activeKey, setActiveKey] = useState('1');
  const navigatetoPost=(e)=>{
    navigate('/post');
  }
  const navigatetomytweets=(e)=>{
    navigate('/mytweets');
  }
  const navigatetoalltweets=(e)=>{
    navigate('/alltweets');
  }
  return (
    <div style={{ width: 240 ,height:600}}>
      <Toggle
        onChange={setExpanded}
        checked={expanded}
        checkedChildren="Expand"
        unCheckedChildren="Collapse"
      />
      <hr />
      <Sidenav expanded={expanded} defaultOpenKeys={['3', '4']} style={{height:590}}>
        <Sidenav.Body>
          <Nav activeKey={activeKey} onSelect={setActiveKey}>
            <Nav.Item   onSelect={navigatetoPost} eventKey="1" icon={<TwitterIcon />}>
              Post a Tweet
            </Nav.Item>
            <Nav.Item onSelect={navigatetomytweets} eventKey="2" icon={<EyeIcon />}>
              View My Tweets
            </Nav.Item>
            <Nav.Item onSelect={navigatetoalltweets} eventKey="3" icon={<GroupIcon />}>
              View All Tweets
            </Nav.Item>
          
          </Nav>
        </Sidenav.Body>
        <Sidenav.Toggle expanded={expanded} onToggle={expanded => setExpanded(expanded)} />
      </Sidenav>
    </div>
  );
};

export default SideNav;