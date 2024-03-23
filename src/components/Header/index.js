

import PortfolioContext from "../../context/PortfolioContext"




import {NavHeader,NavLink,NavImage,Logo, NavContent, ThemeButton,NavItem,HeaderName,ThemeImg} from "./styledComponents"

const Header=props=>{
    return(
        <PortfolioContext.Consumer>
            {value=>{
                const {isDarkTheme,toggleTheme}=value 
                const themeColor=isDarkTheme?'rgba(21, 21, 21, 1)' : '#ffffff'
                const textColor = isDarkTheme ? '#ffffff' : 'rgba(21, 21, 21, 1)'
                const buttonIcon=!isDarkTheme?("https://res.cloudinary.com/dgw2vopar/image/upload/f_auto,q_auto/gb4652uktc2avfcthzch") : ("https://res.cloudinary.com/dexswe6e0/image/upload/v1711134725/Group_21_zvrowr.png")
                const logoImage=!isDarkTheme?("https://res.cloudinary.com/dgw2vopar/image/upload/f_auto,q_auto/at5oi9hgkiyyxsrsnpwe") : ("https://res.cloudinary.com/dgw2vopar/image/upload/f_auto,q_auto/ygfjlcccq5f0tyjvi76r")
                const onClickTheme = () => {
                    toggleTheme()
                }
                return(
                    <NavHeader color={themeColor}>
                        <NavImage >
                                <Logo src={logoImage} alt="logo"/>
                                <HeaderName fontColor={textColor}>Srikanth</HeaderName>
                        </NavImage>
                        <NavContent>
                            <NavLink to="/">
                            <NavItem fontColor={textColor}>Home</NavItem>
                            </NavLink>
                            <NavLink to="/about">
                            <NavItem fontColor={textColor}>About</NavItem>
                            </NavLink>
                            
                            <NavItem fontColor={textColor}>Resume</NavItem>
                            <NavItem fontColor={textColor}>Skills</NavItem>
                            <NavItem fontColor={textColor}>Projects</NavItem>
                            <NavItem fontColor={textColor}>Contact</NavItem>
                            <ThemeButton onClick={onClickTheme} bgcolor={themeColor}>
                                <ThemeImg src={buttonIcon} alt="button"/>
                            </ThemeButton>
                        </NavContent>
                    </NavHeader>
                )
            }}
        </PortfolioContext.Consumer>
    )
}

export default Header


