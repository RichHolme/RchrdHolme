import React, { Component } from "react";
import Css from "./BioFooter.css";
// import { OverlayTrigger, Popover , Modal} from "react-bootstrap";

const styles = {
   footer: {
       color: "white",
    //    fontSize: "2vh",
    //    backgroundColor: "black"
        fontFamily: "Minion"
   }
}

class Footer extends Component {

    render() {

        return (
            <footer id="biofooter" style={styles.footer}>
              
               <span>&#169; Richard Holme</span>

            </footer>

        )
    }
}

export default Footer;