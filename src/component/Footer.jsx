import React from "react";
// eslint-disable-next-line no-unused-vars
import  ReactDOM  from "react-dom";



function Footer(){
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer>
            <p>Copyright @ {year}</p>
        </footer>
    );
}

export default Footer;