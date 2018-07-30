import React, { Component } from "react";
import { Link } from "react-router-dom";
import Css from "./Nav.css";
import {Nav, Navbar, NavDropdown, NavItem, MenuItem } from "react-bootstrap";
import { OverlayTrigger, Popover , Modal} from "react-bootstrap";

const styles = {
    img: {
        height: "10vh",
        width: "10vh",
        borderRadius: "50%",
        // marginRight: "2%",
        // marginTop: "-3.3vh",
        // boxShadow: "1px 1px 8px 1px #888888",
    },
    // div: {
    //     // boxShadow: "1px 1px 8px 1px #888888",
    //     overflow: "auto",
    //     // marginTop: "3%",
    //     marginBottom: "2%",
    //     fontSize: "5vh",
    //     // textShadow: "none",
    //     paddingTop: "1%",
    //     paddingBottom: "1%",
    //     // backgroundColor: "black",
    //     // color: "white"
    //     // fontFamily: "arial"
    // }
    name: {
        color: "white",
        fontSize: "6vh",
        // textShadow: "1px 1px 1px white"
        // marginLeft: "0px"
        fontFamily: "Minion"
    },
    nav: {
        padding: "1%",
        marginBottom: "6%",
        // backgroundColor:"#141454", 
        // objectFit: "cover"
    },
    links: {
        color: "white",
        fontSize: "3.5vh",
        textShadow: "none"
    }
}
// https://www.communitylandtrust.ca/wp-content/uploads/2015/10/placeholder.png

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

class myNav extends Component {

    render(){

    
        return (
            // <div style={styles.div}>
            //     <span id="name">
            //         <Link to="/Profile">
            //         {/* {require('../../Images/profile.jpg')} */}
            //             <img id="navProfile" style={styles.img} src={require('../../Images/profile.jpg')}></img>
            //         </Link>
            //             Richard Holme
            //     </span>
            // </div>
            // <div className="container">
            <Navbar id="navStyle" style={styles.nav} inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                    {/* <Link to="/Profile"> */}
                        <a id="name" style={styles.name}>Richard Holme</a>
                        {/* <img id="navProfile" style={styles.img} src={require('../../Images/profile.jpg')}></img> */}
                    {/* </Link> */}
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                    <NavItem style={styles.links} eventKey={1} href="mailto:rchrdholme@gmail.com">
                        <a>
                            <OverlayTrigger
                                trigger={['hover', 'focus', 'click']}
                                rootClose
                                placement="bottom"
                                overlay={mail}
                                >
                                <span style={styles.links} className="fa fa-envelope email"></span>
                            </OverlayTrigger>
                        </a>
                    </NavItem>
                    <NavItem style={styles.links} eventKey={2} target="_blank" href="https://github.com/RichHolme">
                        <a>
                            <OverlayTrigger
                                trigger={['hover', 'focus']}
                                rootClose
                                placement="bottom"
                                overlay={code}
                                >
                                <span style={styles.links} className="fa fa-github code"></span>
                            </OverlayTrigger>
                        </a>
                    </NavItem>
                    <NavItem style={styles.links} eventKey={3} href={require('../../pdf/RichardHolmeResume.pdf')} download>
                        <a>
                            <OverlayTrigger
                                trigger={['hover', 'focus']}
                                rootClose
                                placement="bottom"
                                overlay={resume}
                                >
                                <span style={styles.links} className="resume fa fa-file resume"></span>
                            </OverlayTrigger>
                        </a>
                    </NavItem>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
                
        )
    }
}

export default myNav;