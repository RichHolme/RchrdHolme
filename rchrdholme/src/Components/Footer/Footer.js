import React, { Component } from "react";

const styles = {
    div:{
        textAlign: "center",
        // fontSize: "8vh",
        marginTop: "10%",
        // marginBottom: "2%",
        // background: "#084C61",
        padding: "3%",
        // color: "white",
        // borderRadius: "10px",s
        // boxShadow: "1px 1px 8px 1px #888888"
        overfolw:"hidden"
    },
    thanks: {
        fontSize: "5vh"
    },
    copyright: {
        fontSize: "2.5vh",
    },
    contact: {
        fontSize: "3vh",
        // marginTop: "4%",
        // marginBottom: "2%"
    },
    span: {
        marginRight: "1%",
        marginLeft: "1%"
    }
}

const Footer = props => {
        return (
            <div style={styles.div}>
               {/* <p style={styles.thanks}>Thanks for making it this far!</p> */}
               <div className="row" style={styles.contact}>
            
                        <span style={styles.span}>Get in touch with me <a>here</a></span>
    
                        <span style={styles.span}>Check out my code <a>here</a></span>
        
                        <span style={styles.span}>Or get a copy of my resume <a>here</a></span>
                    
                </div>
               {/* <p style={styles.copyright}>@ Copyright 2018 Richard Holme</p> */}
            </div>

    )
}

export default Footer;