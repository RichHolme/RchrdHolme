import React, { Component } from "react";
import Footer from "../Footer";
import Button from "../Button";

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
        // marginLeft: "10%",
        // marginRight: "10%",
        // background: "#084C61",
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
                
                <Button />
                
                <Footer />  
                {/* </div>          */}
            </div>

    )
}

export default Profile;