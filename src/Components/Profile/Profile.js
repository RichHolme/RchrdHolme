import React, { Component } from "react";
import Footer from "../BioFooter";
import Button from "../Button";
import Nav from "../ProfileNav";

const styles = {
    img: {
        height: "28vh",
        width: "28vh",
        borderRadius: "50%",
        // float: "left",
        // marginLeft: "3%",
        marginRight: "3%",
        boxShadow: "1px 1px 8px 1px #888888",
        float: "left"
    },
    div: {
        textAlign: "center",
        padding: "3%",
        marginTop: "4%"
    },
    div2: {
        // float: "right",
        textAlign: "left",
        marginTop: "1%",
        fontSize: "2.5vh",
        paddingLeft: "3%",
    },
  
}
const Profile = props => {
        return (
            <div>
            <Nav></Nav>
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

                I'm a resident of Raleigh NC looking to kick start my career in web development.
                You may be thinking, "kick start? great, this guy is green." But wait! Don't write 
                me off just yet. There are a lot of inspiring words I could use to describe myself, 
                but the reality is I enjoy a challenge and seek perfection in what I do.   
                Prior to my "techiness", I was employed by the Inter-Faith 
                Food Shuttle and served my community with some really "cool" people. I
                graduated from the Code Bootcamp at UNC Chapel Hill in July 2018. I am 
                currently pursuing an Associate of Engineering at Wake Tech. My
                goal is to earn a Bachelor of Computer Science at NC State. 
                </div>
                
                <Button />
                
                {/* <Footer />    */}
                {/* </div>          */}
            </div>
            <Footer /> 
            </div>
    )
}

export default Profile;