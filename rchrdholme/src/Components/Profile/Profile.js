import React, { Component } from "react";
import "./Profile.css";

const styles = {
    img: {
        height: "20%",
        width: "20%",
        borderRadius: "50%"
    },
    div: {
        textAlign: "center"
    }
}
const Profile = props => {
        return (
            <div className="col-md-6" style={styles.div}>
                <img style={styles.img} src="http://cdn.onlinewebfonts.com/svg/img_411575.svg"></img>
            </div>

    )
}

export default Profile;