import { useEffect, useState } from "react";
import { logo_url } from "../../utils/constants";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");

    return(
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={logo_url}/>

        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className="login"
                    onClick={()=>{
                        btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login") 
                    }}

                >{btnNameReact}</button>
            </ul>
        </div>
    </div>
    );
};

export default  Header;