import React, { Component } from "react";
import { Link } from "react-router-dom";
import Css from "./Nav.css";

const styles = {
    img: {
        height: "10vh",
        width: "10vh",
        borderRadius: "50%",
        marginRight: "2%",
        boxShadow: "1px 1px 8px 1px #888888",
    },
    div: {
        // boxShadow: "1px 1px 8px 1px #888888",
        overflow: "auto",
        // marginTop: "3%",
        marginBottom: "2%",
        fontSize: "5vh",
        // textShadow: "none",
        paddingTop: "1%",
        paddingBottom: "1%",
        // backgroundColor: "black",
        // color: "white"
        // fontFamily: "arial"
    }
}
// https://www.communitylandtrust.ca/wp-content/uploads/2015/10/placeholder.png
const Nav = props => {
        return (
            <div style={styles.div}>
                <span id="name">
                    <Link to="/Profile">
                    {/* {require('../../Images/profile.jpg')} */}
                        <img id="navProfile" style={styles.img} src={require('../../Images/profile.jpg')}></img>
                    </Link>
                        Richard Holme
                </span>
            </div>

    )
}

export default Nav;