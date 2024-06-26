import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { useState } from 'react'
import SideBarData from './SideBarData'
import SubMenu from './Submenu'
import { useEffect, useRef } from "react";
import FCALogo from "../FCALogo.png";
import Image from 'react-bootstrap/Image'
const imagesList = [
  {
    id: 1,
    src: FCALogo,
    alt: "Image 1" ,
  },
]

const Nav = styled.div`
background: #FFFFFF;
height: 60px;
display: flex;
border-bottom: 1px solid #ececed;

`; 

const NavIcon = styled(Link)`
margin-left: 1rem;
font-size: 1rem;
height: 80px;
display: left;
justify-content:flex-start;
align-items: center;

`;

const Font = styled.text`
margin-left: 1rem;
height: 80px;
font-size: 1;
text-align: center;
justify-content: center


`;

const SidebarNav = styled.nav`
background: #31435c;
width: 250px;
height: 800px;
display: flex;
justify-content: flex-end;
position: fixed;
top: 0;
left: ${({sidebar}) => (sidebar ? '0': '-100%')};
transition : 350ms;
z-index: 10;
overflow-y: auto;

`;

const SidebarWrap = styled.div`
width: 100%;
 
`;


const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return(

    <>
  
  <Nav>

               
   <NavIcon to='#'>
    <FaIcons.FaBars onClick={showSidebar} />
   </NavIcon>
  
   {imagesList.map((image) => (
        <img key={image.id} src={image.src} alt={image.alt} style={{height:60, width:150}} />
      ))}

       <text>Recruitment Dashboard</text>
  </Nav>  
 
  <SidebarNav sidebar = {sidebar}>
 
  <SidebarWrap>
    <NavIcon to='#'>
      <AiIcons.AiOutlineClose onClick={showSidebar}/>
    </NavIcon>
    {SideBarData.map((item, index) => {
      return <SubMenu item={item} key = {index} />
    })}
  </SidebarWrap>
  </SidebarNav>


    
  
</>

);
};

export default Sidebar;




