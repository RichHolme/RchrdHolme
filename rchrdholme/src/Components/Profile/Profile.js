import React, { Component } from "react";

const styles = {
    img: {
        height: "28vh",
        width: "28vh",
        borderRadius: "50%",
        float: "left",
        // marginLeft: "3%",
        marginRight: "3%"
    },
    div: {
        textAlign: "center",
        // float: "left"
        marginTop: "3%",
        marginBottom: "5%",
        background: "#084C61",
        padding: "3%",
        color: "white",
        // borderRadius: "10px",
        boxShadow: "1px 3px 8px 1px #888888"
    },
    div2: {
        // float: "right",
        textAlign: "left",
        marginTop: "3%",
        fontSize: "2.5vh",
        paddingLeft: "3%",
        // paddingRight: "3%"
        // paddingRight: "8%",
        // paddingLeft: "8%"
        
    }
}
const Profile = props => {
        return (
            <div className="container" style={styles.div}>
                <img style={styles.img} src="http://cdn.onlinewebfonts.com/svg/img_411575.svg"></img>
                <div className="" style={styles.div2}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                    proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                </div>
            </div>

    )
}

export default Profile;