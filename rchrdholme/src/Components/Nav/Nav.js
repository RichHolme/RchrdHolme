import React, { Component } from "react";
import { Link } from "react-router-dom";
import Css from "./Nav.css";

const styles = {
    img: {
        height: "10vh",
        width: "10vh",
        borderRadius: "50%",
        marginRight: "3%",
        boxShadow: "1px 1px 8px 1px #888888",
    },
    div: {
        // boxShadow: "1px 1px 8px 1px #888888",
        overflow: "auto",
        marginTop: "3%",
        marginBottom: "2%",
        fontSize: "5vh",
        paddingTop: "1%",
        paddingBottom: "1%",
        // backgroundColor: "black",
        // color: "white"
    }
}

const Nav = props => {
        return (
            <div style={styles.div}>
                <span>
                    <Link to="/Profile">
                    {/* {require('../../Images/profile.jpg')} */}
                        <img id="navProfile" style={styles.img} src="https://www.communitylandtrust.ca/wp-content/uploads/2015/10/placeholder.png"></img>
                    </Link>
                        Richard Holme
                </span>
            </div>

    )
}

export default Nav;