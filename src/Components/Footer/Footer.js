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
                                trigger={['hover', 'focus', 'click']}
                                rootClose
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
                                rootClose
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
                                rootClose
                                placement="top"
                                overlay={resume}
                                >
                                    <span><a className="fa fa-file-o resume" href={require('../../pdf/RichardHolmeResume.pdf')} download></a></span>
                                </OverlayTrigger>
                            </a>
                        </div>

                </div>

            </div>

        )
    }
}

export default Footer;