import React, { Component } from "react";
import Footer from "../Footer";
import Button from "../Button";

const styles = {
    img: {
        height: "28vh",
        width: "28vh",
        borderRadius: "50%",
        // float: "left",
        // marginLeft: "3%",
        marginRight: "3%",
        boxShadow: "1px 1px 8px 1px #888888",
    },
    div: {
        textAlign: "center",
        padding: "3%",

    },
    div2: {
        // float: "right",
        textAlign: "left",
        marginTop: "4%",
        fontSize: "2.5vh",
        paddingLeft: "3%",
    },
  
}
const Profile = props => {
        return (
            <div className="container" style={styles.div}>
                {/* <div style={styles.inner}> */}
                <img style={styles.img} src={require('../../Images/profile.jpg')}></img>
                <div className="" style={styles.div2}>
                For the past five years I’ve been immersed in the nonprofit world. The
                Inter Faith Food Shuttle's loyal donors and volunteers include some of the 
                cities most accomplished men and women, and I’ve had the privilege of 
                serving our city’s struggling communities with these people. While at 
                Inter-Faith, I began my studies in technology with a focus in web 
                development. The Code Bootcamp at UNC Chapel Hill has connected the dots 
                of development that the slow pace of night classes lacked. I am currently 
                looking to transition into the web development field full time.
                </div>
                
                <Button />
                
                <Footer />  
                {/* </div>          */}
            </div>

    )
}

export default Profile;