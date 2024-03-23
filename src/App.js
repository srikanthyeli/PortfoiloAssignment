import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Component} from "react"

import Home from "./components/Home";
import About from "./components/About";
import PortfolioContext from "./context/PortfolioContext";

import './App.css';


class App extends Component{
  state={
    isDarkTheme:false,
  }

  toggleTheme=()=>{
    this.setState(prevState=>({isDarkTheme:!prevState.isDarkTheme}))
  }

  render(){
    const {isDarkTheme}=this.state
    return(
      <PortfolioContext.Provider
      value={{
        isDarkTheme,
        toggleTheme:this.toggleTheme,
      }}
      >
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>}/>
        </Routes>
        </BrowserRouter>
      </PortfolioContext.Provider>
    )
  }
}

export default App;
