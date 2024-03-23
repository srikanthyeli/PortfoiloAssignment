
import Header from "../Header"
import Footer from "../Footer"
import PortfolioContext from "../../context/PortfolioContext"
import {AboutContainer,ContentContainer,AboutContentContainer,MailContainer,MailImage,Heading,Para} from "./styledComponents"

const About=()=>{
    return(
        <PortfolioContext.Consumer>
            {value=>{
                const {isDarkTheme}=value
                const textColor=isDarkTheme?'rgba(255, 255, 255, 1)':'#000000'
                const ParaColor=isDarkTheme?'rgba(255, 255, 255, 1)':'#000000'
                const themeColor=isDarkTheme?'#000000' : 'rgba(255, 255, 255, 1)'
                const backgroundTheme=!isDarkTheme?"https://res.cloudinary.com/dgw2vopar/image/upload/f_auto,q_auto/ofl2ny28kvhfn9v8f4hj":"https://res.cloudinary.com/dgw2vopar/image/upload/f_auto,q_auto/rqasagtrix73whtvhxgl"
                return(
                   
                    <AboutContainer theme={themeColor}>
                        <Header/>
                        <AboutContentContainer bgtheme={backgroundTheme}>
                            <Footer/>
                            <ContentContainer>
                                <Heading color={textColor}> This is it. ;)         <hr width="70%"/></Heading>
                                <Para paraColor={ParaColor}>Anish Kr. Sinha is an Indian UI/UX Designer & Front End Developer with a passion for designing beautiful and fuctional user experiences. Typically, he’s Driven & permanently Curious. He’s obsessed with designing things and even more obsessed with designing cool & clean stuff for the web and mobile. He has been in the business of creating since he hung his first painting on the wall when he was 11. <br/><br/>
                                    He holds a bachelor degree in Computer Applications. During his graduation, he has been actively involved in the web design community for the last 3 years. he has designed websites for small businesses, events, nonprofits and more. Currently he’s based in Bihar, India. Where he’s working as an independent creative. <br/> <br/>
                                    His interests, however, extend beyond the web and he loves helping people with branding and print design. He even loves designing 3D floor plan<br/><br/>
                                    When he’s not designing, he’s probably hanging out with his girlfriend, watching series, sketching or messing around on something inspired by YouTube tutorials.</Para>
                                    <hr width="50%"/>
                            </ContentContainer>
                            <MailContainer>
                                <MailImage src={!isDarkTheme ? "https://res.cloudinary.com/dgw2vopar/image/upload/f_auto,q_auto/orwr3ei6lyo59a2hb3jj" : "https://res.cloudinary.com/dgw2vopar/image/upload/f_auto,q_auto/npi3xgqtozayxrhtx7ja"} alt="Mail"/>
                            </MailContainer>
                        </AboutContentContainer>

                    </AboutContainer>

             
                    
                )
            }}
        </PortfolioContext.Consumer>
    )
}

export default About