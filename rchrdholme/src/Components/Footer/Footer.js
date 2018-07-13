import React, { Component } from "react";
import Css from "./Footer.css";

const styles = {
    div:{
        // textAlign: "center",
        // float: "left",
        marginTop: "8%",
        padding: "1%",
        // backgroundColor: "black",
        // color: "white"
    },
    contact: {
        fontSize: "3.5vh",
        // float: "left"
    },
}

const Footer = props => {
        return (
            <div style={styles.div}>
              
               <div className="row" style={styles.contact}>
            
                        <div className="mail"><a><span className="fa fa-envelope-o"></span></a></div>
    
                        <div className="code"><a><span className="fa fa-code"></span></a></div>
        
                        <div className="resume"><a><span className="fa fa-file-o"></span></a></div>
                    
                </div>

            </div>

    )
}

export default Footer;