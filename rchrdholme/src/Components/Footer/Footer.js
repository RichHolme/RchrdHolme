import React, { Component } from "react";

const styles = {
    div:{
        textAlign: "center",
        marginTop: "8%",
        padding: "3%",
    },
    thanks: {
        fontSize: "5vh"
    },
    copyright: {
        fontSize: "2.5vh",
    },
    contact: {
        fontSize: "3vh",
    },
    span: {
        marginRight: "1%",
        marginLeft: "1%"
    }
}

const Footer = props => {
        return (
            <div style={styles.div}>
              
               <div className="row" style={styles.contact}>
            
                        <span style={styles.span}>Get in touch with me <a>here</a></span>
    
                        <span style={styles.span}>Check out my code <a>here</a></span>
        
                        <span style={styles.span}>Or get a copy of my resume <a>here</a></span>
                    
                </div>

            </div>

    )
}

export default Footer;