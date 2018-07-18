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
        // float: "left"
        // marginTop: "2%",
        // marginBottom: "5%",
        // marginLeft: "10%",
        // marginRight: "10%",
        // background: "#084C61",
        // color: "white",
        padding: "3%",
        // color: "white",
        // borderRadius: "10px",
        // boxShadow: "1px 1px 8px 1px #888888"
        // overflow: "auto"
        // overflow:"hidden",
        // width:"100%",
        // height: "100%"
        // left: "5%",
        // position: "fixed"
        // backgroundImage: "url('http://getwallpapers.com/wallpaper/full/7/c/6/765090-most-popular-technology-background-images-1920x1080-hd-for-mobile.jpg')"

    },
    div2: {
        // float: "right",
        textAlign: "left",
        marginTop: "4%",
        fontSize: "2.5vh",
        paddingLeft: "3%",
        // overflow: "hidden"
        // paddingRight: "3%"
        // paddingRight: "8%",
        // paddingLeft: "8%"
        
    },
    // inner: {
    //     width: "100%",
    //     overflow: "hidden",
    //     height: "100%"
    //     // paddingRight: 15px;
    // }
}
const Profile = props => {
        return (
            <div className="container" style={styles.div}>
                {/* <div style={styles.inner}> */}
                <img style={styles.img} src={require('../../Images/profile.jpg')}></img>
                <div className="" style={styles.div2}>
                With one year of volunteer service, and four years of employment at the 
                Inter-Faith Food Shuttle, I’ve been immersed in the nonprofit world. Our 
                loyal donors and volunteers include some of the cities most accomplished 
                men and women, and I’ve had the privilege of serving our city’s struggling 
                communities with these people. While at Inter-Faith, I began my studies in 
                technology with a focus in web development. The Code Bootcamp at UNC Chapel 
                Hill is connected the dots of development that the slow pace of night 
                classes lacked. I am currently looking to transition into the web development 
                field full time.
                </div>
                
                <Button />
                
                <Footer />  
                {/* </div>          */}
            </div>

    )
}

export default Profile;