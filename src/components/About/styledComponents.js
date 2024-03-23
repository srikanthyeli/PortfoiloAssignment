import styled from "styled-components";

export const AboutContainer=styled.div`
dispaly:flex;
background-color:${props=>props.theme};
width:100vw;
height:100vh;
`

export const AboutContentContainer=styled.div`
display:flex;
justify-content:space-between;
background-size:cover;
height:100vh;
background-image:url(${props=>props.bgtheme})
`

export const ContentContainer=styled.div`
display:flex;
flex-direction:column;
width:50%;
height:50%;
align-self:center;
margin-left:40px;
`


export const Heading=styled.h1`
color:${props=>props.color};
font-size:24px;`

export const Para=styled.p`
color:${props=>props.paraColor};
`

export const MailContainer=styled.div`
align-self:flex-end;`

export const MailImage=styled.img`
height: 350px;
margin-left: 5px;`

