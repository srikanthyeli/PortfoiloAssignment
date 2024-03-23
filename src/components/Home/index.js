import {Component} from "react"
import Header from "../Header"
import Footer from "../Footer";

import PortfolioContext from "../../context/PortfolioContext";

import { AppContainer,ImageContainer,HomeImageContainer,HomeContainer,HiImg,ResponsiveContainer,HomeHead,HelloImg,HomeSpan,Para,ButtonContainer,DemoButton,MailImage,ImageProfile, DemoGetInTouch } from "./styledComponents";


class Home extends Component{
    render(){
        return(
            <PortfolioContext.Consumer>
                {value=>{
                    const {isDarkTheme}=value
                    const themeColor=isDarkTheme?'rgba(21, 21, 21, 1)' : 'rgba(255, 255, 255, 1)'
                const textColor = isDarkTheme ? '#ffffff' : 'rgba(21, 21, 21, 1)'
                
                    return(
                        <AppContainer color={themeColor}>
                            <Header/>
                            <HomeContainer bgColor={themeColor}>
                                <Footer/>
                                <ResponsiveContainer>
                                    <HelloImg src="https://res.cloudinary.com/dgw2vopar/image/upload/f_auto,q_auto/ar8xt4t1qr3b6v2wmdtf" alt="hello"/>

                                    <HomeHead textColor={textColor}>I'm <HomeSpan>Srikanth</HomeSpan><HiImg src="https://res.cloudinary.com/dgw2vopar/image/upload/f_auto,q_auto/r8dkcgvvu2mwaby1rw8d" alt="hi"/></HomeHead>
                                    <Para paraColor={textColor}> I'm working as aUI/UX Designer, Front-End Developer & Thinker.<br/>
                                        Based in India.</Para>
                                <ButtonContainer>
                                    <DemoButton>DownLoad CV</DemoButton>
                                    <DemoGetInTouch>Get in Touch</DemoGetInTouch>
                                </ButtonContainer>
                                </ResponsiveContainer>
                                <ImageContainer>
                                <ImageProfile src="https://res.cloudinary.com/dgw2vopar/image/upload/f_auto,q_auto/gp19gesias6xgauo2kec" alt="profile"/>
                                </ImageContainer>
                               
                                <HomeImageContainer>
                                <MailImage src={!isDarkTheme ? "https://res.cloudinary.com/dgw2vopar/image/upload/f_auto,q_auto/orwr3ei6lyo59a2hb3jj" : "https://res.cloudinary.com/dgw2vopar/image/upload/f_auto,q_auto/npi3xgqtozayxrhtx7ja"} alt="Mail"/>
                            </HomeImageContainer>
                            </HomeContainer>
                        </AppContainer>
                    )
                }}
            </PortfolioContext.Consumer>
        )
    }
}



export default Home