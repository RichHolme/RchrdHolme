import React, { Component } from "react";
import Css from "./Footer.css";
import { OverlayTrigger, Popover , Modal} from "react-bootstrap";

const styles = {
    div:{
        // textAlign: "center",
        // float: "left",
        marginTop: "4%",
        padding: "1%",
        marginBottom: "2%",
        // backgroundColor: "black",
        // color: "white"
        // clear: "both"
    },
    contact: {
        fontSize: "3.5vh",
        // float: "left"
    },
    iframe: {
        height: "0px",
        width: "0px",
        position: "absolute"
    }
}

const mail = (
    <Popover id="popover-trigger-hover-focus">
      Email Me
    </Popover>
);

const code = (
    <Popover id="popover-trigger-hover-focus">
      My Code
    </Popover>
);

const resume = (
    <Popover id="popover-trigger-hover-focus">
      Get My Resume
    </Popover>
);

class Footer extends Component {

    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false
        };
    }
    
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }

    print() {
        var content = document.getElementById("modalBody");
        var pri = document.getElementById("ifmcontentstoprint").contentWindow;
        pri.document.open();
        pri.document.write(content.innerHTML);
        pri.document.close();
        pri.focus();
        pri.print();
    }

    render() {

        return (
            <div style={styles.div}>
              
               <div className="row" style={styles.contact}>
            
                        <div className="mail col-md-4">
                        
                            <a>
                                <OverlayTrigger
                                trigger={['hover', 'focus']}
                                placement="top"
                                overlay={mail}
                                >
                                    <a href="mailto:rchrdholme@gmail.com"><span className="fa fa-envelope-o email"></span></a>
                                </OverlayTrigger>
                            </a>
                        </div>
    
                        <div className="code col-md-4">
                            <a>
                                <OverlayTrigger
                                trigger={['hover', 'focus']}
                                placement="top"
                                overlay={code}
                                >
                                    <a target="_blank" href="https://github.com/RichHolme"><span className="fa fa-code code"></span></a>
                                </OverlayTrigger>
                            </a>
                        </div>
        
                        <div className="col-md-4">
                            <a>
                                <OverlayTrigger
                                trigger={['hover', 'focus']}
                                placement="top"
                                overlay={resume}
                                >
                                    <span onClick={this.handleShow} className="fa fa-file-o resume"></span>
                                </OverlayTrigger>
                            </a>
                        </div>
                    
                        <Modal show={this.state.show} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Richard Holme Resume</Modal.Title>
                            </Modal.Header>
                            <Modal.Body id="modalBody">
                                <h2 id="name">Richard Holme</h2>
                                <div className="row info">
                                    <p className="firstBorder personalInfo">984-242-9704</p>
                                    <p className="personalInfo">Raleigh, NC</p>
                                </div>
                                <div className="row info">
                                    <p className="firstBorder personalInfo"><a>rchrdholme@gmail.com</a></p>
                                    <p className="personalInfo"><a>https://github.com/RichHolme</a></p>
                                </div>
                                
                                <div className="row">
                                    <p id="skillInfo">Goal oriented, driven individual entering the field of Web Development. Experienced in HTML5, CSS3, Javascript, JQuery, Bootstrap, Angular JS, Firebase, Ionic Mobile Framework, Node Js, MySQL, MongoDB, Express, & Handlebars JS.</p>
                                </div>

                                <div id="education" className="row">
                                    <h3 className="margin">Education</h3>
                                    <h4 className="school bold margin">The University of North Carolina at Chapel Hill, Chapel Hill, NC </h4>
                                    <span className="margin">January 2018 - July 2018</span>
                                    <p id="school">UNC Coding Bootcamp - Javascript Full Stack Web Development</p>
                                    <p id="schoolDescription">An intensive 24-week long boot camp dedicated to designing and building web applications.</p>
                                </div>

                                <div className="row apps">
                                    <h3 className="margin">Applications Built</h3>
                                    <h4 className="bold margin">Is My Book A Movie?</h4>
                                    <ul className="margin">
                                        <li>User searches for a film by entering a book title or author. When the user finds the book of choice general book info is displayed. If a movie exists user finds info about the movie with an accompanying movie trailer. User has the option of participating in a poll, stored in firebase. </li>
                                        <li>Sole developer</li>
                                        <li><a>Check it out!</a></li>
                                    </ul>
                                </div>

                                <div id="work margin" className="row">
                                    <h3 className="margin">Additional Work Experience</h3>
                                    <p className="margin">Driver at Inter-Faith Food Shuttle 
                                    <span id="workDate" className="margin">September 2014 - Present</span></p>
                                </div>

                               
                            </Modal.Body>
                            <iframe id="ifmcontentstoprint" style={styles.iframe}></iframe>
                            <Modal.Footer>
                                <button className="btn btn-primary" id="print" onClick={this.print}>Print</button> <button className="btn btn-danger" onClick={this.handleClose}>Close</button>
                            </Modal.Footer>
                            </Modal>

                </div>

            </div>

        )
    }
}

export default Footer;