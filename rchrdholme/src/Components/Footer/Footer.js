import React, { Component } from "react";
import Css from "./Footer.css";
import { OverlayTrigger, Popover } from "react-bootstrap";

const styles = {
    div:{
        // textAlign: "center",
        // float: "left",
        marginTop: "4%",
        padding: "1%",
        marginBottom: "2%",
        // backgroundColor: "black",
        // color: "white"
        // clear: "both"
    },
    contact: {
        fontSize: "3.5vh",
        // float: "left"
    },
}

const mail = (
    <Popover id="popover-trigger-hover-focus">
      Email Me
    </Popover>
);

const code = (
    <Popover id="popover-trigger-hover-focus">
      My Code
    </Popover>
);

const resume = (
    <Popover id="popover-trigger-hover-focus">
      Get My Resume
    </Popover>
);

const Footer = props => {
        return (
            <div style={styles.div}>
              
               <div className="row" style={styles.contact}>
            
                        <div className="mail col-md-4">
                        
                            <a>
                                <OverlayTrigger
                                trigger={['hover', 'focus']}
                                placement="top"
                                overlay={mail}
                                >
                                    <span className="fa fa-envelope-o email"></span>
                                </OverlayTrigger>
                            </a>
                        </div>
    
                        <div className="code col-md-4">
                            <a>
                                <OverlayTrigger
                                trigger={['hover', 'focus']}
                                placement="top"
                                overlay={code}
                                >
                                    <span className="fa fa-code code"></span>
                                </OverlayTrigger>
                            </a>
                        </div>
        
                        <div className="resume col-md-4">
                            <a>
                                <OverlayTrigger
                                trigger={['hover', 'focus']}
                                placement="top"
                                overlay={resume}
                                >
                                    <span className="fa fa-file-o resume"></span>
                                </OverlayTrigger>
                            </a>
                        </div>
                    
                </div>

            </div>

    )
}

export default Footer;