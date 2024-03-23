import PortfolioContext from "../../context/PortfolioContext"
import {Component} from "react"
import { AppContainer } from "./styledComponents"
import "./index.css"
class Footer extends Component{
    render(){
        return(
            <PortfolioContext.Consumer>
                {value=>{
                    const {isDarkTheme}=value
                    return(
                        <AppContainer>
                            <a href="https://www.facebook.com/">
                            <img className="footer-img" src={!isDarkTheme? "https://res.cloudinary.com/dgw2vopar/image/upload/f_auto,q_auto/yxs9moiaejkxow3ztzcj" : "https://res.cloudinary.com/dgw2vopar/image/upload/f_auto,q_auto/owg83bkci0xfjudjwtr4"} alt="socialMediaLink"/>
                            </a>
                            <a href="https://www.instagram.com/">
                            <img className="footer-img" src={!isDarkTheme? "https://res.cloudinary.com/dgw2vopar/image/upload/f_auto,q_auto/bodpvlg3ppmcwk9b83c0" : "https://res.cloudinary.com/dgw2vopar/image/upload/f_auto,q_auto/h8ynd7pmmm6nnwhqkdoo"} alt="socialMediaLink"/>
                            </a>
                            <a href="https://www.twitter.com/">
                            <img className="footer-img" src={!isDarkTheme? "https://res.cloudinary.com/dgw2vopar/image/upload/f_auto,q_auto/xidg4nve4h89jvfabkii" : "https://res.cloudinary.com/dgw2vopar/image/upload/f_auto,q_auto/vjacgjrpfvjhvkyqkcfa"} alt="socialMediaLink"/>
                            </a>
                            <a href="https://www.github.com/">
                            <img className="footer-img" src={!isDarkTheme? "https://res.cloudinary.com/dgw2vopar/image/upload/f_auto,q_auto/kahjhp4jxqbxytjptk04" : "https://res.cloudinary.com/dgw2vopar/image/upload/f_auto,q_auto/yyht7we0tjl2jbape0yp"} alt="socialMediaLink"/>
                            </a>
                            <a href="https://www.linkedin.com/">
                            <img className="footer-img" src={!isDarkTheme? "https://res.cloudinary.com/dgw2vopar/image/upload/f_auto,q_auto/mqk5fcysqcxpisou3bec" : "https://res.cloudinary.com/dgw2vopar/image/upload/f_auto,q_auto/bwq8wqbsb1gpvutj6muy"} alt="socialMediaLink"/>
                            </a>
                            <a href="https://web.telegram.org/">
                            <img className="footer-img" src={!isDarkTheme? "https://res.cloudinary.com/dgw2vopar/image/upload/f_auto,q_auto/bevhwikerxxbdq3cs9cc" : "https://res.cloudinary.com/dgw2vopar/image/upload/f_auto,q_auto/warfuxb7tohzy8wqqhlb"} alt="socialMediaLink"/>
                            </a>
                            <a href="https://www.kooapp.com/">
                            <img className="footer-img" src={!isDarkTheme? "https://res.cloudinary.com/dgw2vopar/image/upload/f_auto,q_auto/raxxw4rxkl9qpnqwhhh5" : "https://res.cloudinary.com/dgw2vopar/image/upload/f_auto,q_auto/y0os6iik81rezizc9hns"} alt="socialMediaLink"/>
                            </a>
                        </AppContainer>
                    )
                }}
            </PortfolioContext.Consumer>
        )
    }
}

export default Footer