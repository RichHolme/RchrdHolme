import React, { Component } from "react";
import { Link } from "react-router-dom";

const styles = {
    img: {
        height: "10vh",
        width: "10vh",
        borderRadius: "50%",
        marginRight: "3%"
    },
    div: {
        // boxShadow: "1px 1px 8px 1px #888888",
        overflow: "auto",
        marginTop: "3%",
        marginBottom: "2%",
        fontSize: "5vh"
    }
}

const Nav = props => {
        return (
            <div style={styles.div}>
                <span>
                    <Link to="/Profile">
                        <img style={styles.img} src="http://cdn.onlinewebfonts.com/svg/img_411575.svg"></img>
                    </Link>
                        Richard Holme
                </span>
            </div>

    )
}

export default Nav;