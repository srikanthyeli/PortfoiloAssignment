
import styled from 'styled-components'
import {Link} from "react-router-dom"
export const NavHeader=styled.div`
display:flex;
justify-content:space-between;
width:100vw;
height:5vh;

background-color:${props=>props.color};
`
export const NavContainer=styled.div`
display:flex;
width:100%;`
export const NavImage=styled.div`
display:flex;
align-item:center;
`

export const NavLink=styled(Link)`
text-decoration: none;
color : inherit;
`
export const Logo=styled.img`
height:35px;
margin:10px;
`

export const HeaderName=styled.h1`
font-size:24px;
font-weight:800;
text-shadow: 1px 2px rgba(0,0,0,0.25);
margin-left: 15px;
color:${props=>props.fontColor};
margin-bottom:10px;`

export const NavContent=styled.div`
display:flex;
align-items:center;`

export const NavItem=styled.p`
font-weight:700;
margin-right:30px;
font-size:16px;
color:${props=>props.fontColor}`

export const ThemeButton=styled.button`
outline:none;
background-color:${props=>props.bgcolor};
border:none;
cursor:pointer;`

export const ThemeImg=styled.img`
height:35px;
margin-right:10px;
`


