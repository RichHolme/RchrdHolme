import React, { Component } from "react";


const styles = {

    img: {
        height: "8vh",
        width: "8vh",
        // borderRadius: "50%",
        float: "left",
        marginLeft: "3%",
        marginRight: "3%"
    },
    div: {
        textAlign: "center",
        // float: "left"
        marginTop: "3%"
    },
    div2: {
        // float: "right",
        textAlign: "left",
        marginTop: "5%",
        fontSize: "2.5vh",
        paddingLeft: "3%",
        paddingRight: "3%"
        // paddingRight: "8%",
        // paddingLeft: "8%"
        
    },
    container: {
        background: "#528190",
        padding: "3%",
        color: "white",
        // borderRadius: "10px",
        boxShadow: "1px 3px 8px 1px #888888"
    }
   
}
const Education = props => {
    return (
        <div style={styles.container} className="container">

            <div>
                <img style={styles.img} src="https://cdn.wallpapersafari.com/64/51/GdVWAs.png"></img>
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

            <div>
                <img style={styles.img} src="https://www.scoutforceathlete.com/media/college/wake-technical-community-college55d851526669c.jpg"></img>
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

            <div>
                <img style={styles.img} src="http://images1.fanpop.com/images/image_uploads/Wolfpack-north-carolina-state-university-868735_1350_1650.gif"></img>
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

        </div>

    )
}

export default Education;