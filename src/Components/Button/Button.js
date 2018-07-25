import React, { Component } from "react";
import { Link } from "react-router-dom";
import Css from "./Button.css";

const styles = {
   
    div: {
        // textAlign: "center",
        clear: "both",
        // mrginTop: "10%"
    },
    button: {
        marginTop: "5%",
        marginBottom: "4%",
        paddingRight: "2%",
        paddingLeft: "2%",
        fontSize: "180%",
        color: "white",
        boxShadow: "1px 1px 8px 1px #888888",
        // backgroundImage: {require('../../Images/gray.jpg')}
    },
    // img: {
    //     height: "9vh",
    //     width: "15%",
    //     boxShadow: "1px 1px 8px 1px #888888",
    //     borderRadius: "5px",
    //     marginTop: "8%",
    //     marginBottom: "4%",
    // }
}

const Button = props => {
    return (
        <div style={styles.div}>

            <Link to="/">
                <button id="button" style={styles.button} className="btn btn-xs">Portfolio</button>
                {/* <img style={styles.img} src={require('../../Images/portfolio.jpg')}></img> */}
            </Link>

        </div>

    )
}

export default Button;