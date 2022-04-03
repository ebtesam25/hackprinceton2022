import React from "react"
import  "./style.css"
import LoginButton from "./components/LoginButton"
import LogoutButton from "./components/LogoutButton"

export default function App() {
  
   
    return (
        <div className="form-container">
            <form className="form">
                <h1 className = "text-black bold text-xl"> WELCOME! </h1>
                
                <LoginButton />
                <LogoutButton />
                
            </form>
        </div>
    )
}
