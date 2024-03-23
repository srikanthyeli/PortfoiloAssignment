import styled from "styled-components"

export  const AppContainer=styled.div`

dispaly:flex;
margin-bottom:20px;
width:100vw;
height:100vh;
background-color:${props=>props.color};
overflow:hidden;
`

export const HomeContainer=styled.div`
display:flex;
justify-content:space-between;
height:100vh;
background-color:${props=>props.bgColor};
`

export const ImageContainer=styled.div`
display:flex;
flex-direction:column;
justify-content:center;`

export const ResponsiveContainer=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
width:70%;
margin-left:40px;
`
export const HelloImg=styled.img`
height:72px;
width:197px;
`
export const HomeHead=styled.h1`
color:${props=>props.textColor};
margin-top:3px;
font-weight:600;

`

export const HomeSpan=styled.span`
color : #737373;
border-bottom: 3px black solid ;
font-weight: 700;
`
export const HiImg=styled.img`

`
export const Para=styled.p`
color:${props=>props.paraColor};

`

export const ButtonContainer=styled.div`
margin-top: 40px;
width: 16vw;
display: flex;
justify-content: space-between;
`

export const DemoButton=styled.button`
cursor: pointer;
    padding: 10px;
    color : white;
    border-radius: 5px;
    box-shadow: 5px 5px 15px 0px #737373;
    border-style: solid;
    border-color: white;
    border-width: 3px;
    background-image: linear-gradient(to right,#DF580C , #FD993D);
`
export const DemoGetInTouch=styled.button`
cursor: pointer;
    padding: 10px;
    color : white;
    border-radius: 5px;
    box-shadow: 5px 5px 15px 0px #737373;
    border-style: solid;
    border-color: white;
    border-width: 3px;
    background-image: linear-gradient(to right,#434343 , #817E7E);
`
export const HomeImageContainer=styled.div`
align-self:flex-end;
`

export const MailImage=styled.img`
height: 350px;
margin-left: 5px;
`

export const ImageProfile=styled.img`
width:40vw;
height:60vh;
`



