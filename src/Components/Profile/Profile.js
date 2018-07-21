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
                {/* For the past five years I’ve been immersed in the nonprofit world. While at 
                Inter-Faith, I began my studies in technology with a focus in web 
                development. The Code Bootcamp at UNC Chapel Hill has connected the dots 
                of development that the slow pace of night classes lacked. I am currently 
                looking to transition into the web development field full time. */}
                {/* My name is Richard Holme, I'm a web developer living in Raleigh, Nc. 
                Prior to my for five years ive been involved with
                and employed by the Inter-Faith Food Shuttle.  */}

                Richard Holme is a web developer living in Raleigh Nc. Prior to his 
                techiness Richard was involved with and employed by the Inter-Faith 
                Food Shuttle, serving his community with some really "cool" people. Richard 
                Graduated from the Code Bootcamp at UNC Chapel Hill in July 2018. He is 
                currently pursuing an associate of engineering at Wake Tech to reach his
                goal of a bachelor of computer science at NC State. 
                </div>
                
                <Button />
                
                <Footer />  
                {/* </div>          */}
            </div>

    )
}

export default Profile;