import React, { Component } from "react";
import { Link } from "react-router-dom";

const styles = {
   
    div: {
        // textAlign: "center",
        clear: "both",
        // mrginTop: "10%"
    },
    button: {
        marginTop: "10%",
        paddingRight: "2%",
        paddingLeft: "2%",
        fontSize: "180%"
    }
}

const Button = props => {
    return (
        <div style={styles.div}>

            <Link to="/">
                <button style={styles.button} className="btn btn-gray">Portfolio</button>
            </Link>

        </div>

    )
}

export default Button;