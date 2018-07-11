import React, { Component } from "react";

const styles = {
    div:{
        textAlign: "center",
        marginTop: "8%",
        padding: "3%",
    },
    contact: {
        fontSize: "3vh",
    },
    contact1: {
        // marginRight: "-2%",
        // marginLeft: "-1%"
        // float: "right"
        // paddingLeft: "5%"
    },
    contact2: {
        // marginLeft: "-2%",
        // marginLeft: "-1%"
    }
}

const Footer = props => {
        return (
            <div style={styles.div}>
              
               <div className="row" style={styles.contact}>
            
                        <div className="col-md-4" style={styles.contact1}>Get in touch with me <a>here</a></div>
    
                        <div className="col-md-4">Check out my code <a>here</a></div>
        
                        <div className="col-md-4" style={styles.contact2}>Get a copy of my resume <a>here</a></div>
                    
                </div>

            </div>

    )
}

export default Footer;