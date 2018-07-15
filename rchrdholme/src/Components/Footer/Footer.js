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
        
                        <div className="resume col-md-4">
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
                                <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <h4>Text in a modal</h4>
                                <p>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                </p>

                                <h4>Popover in a modal</h4>
                                <p>
                                there is a{' '}
                                {/* <OverlayTrigger overlay={popover}>
                                    <a href="#popover">popover</a>
                                </OverlayTrigger>{' '} */}
                                here
                                </p>

                                <h4>Tooltips in a modal</h4>
                                <p>
                                there is a{' '}
                                {/* <OverlayTrigger overlay={tooltip}>
                                    <a href="#tooltip">tooltip</a>
                                </OverlayTrigger>{' '} */}
                                here
                                </p>

                                <hr />

                                <h4>Overflowing text to show scroll behavior</h4>
                                <p>
                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                                ac consectetur ac, vestibulum at eros.
                                </p>
                                <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                                auctor.
                                </p>
                                <p>
                                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                                cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                                dui. Donec ullamcorper nulla non metus auctor fringilla.
                                </p>
                                <p>
                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                                ac consectetur ac, vestibulum at eros.
                                </p>
                                <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                                auctor.
                                </p>
                                <p>
                                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                                cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                                dui. Donec ullamcorper nulla non metus auctor fringilla.
                                </p>
                                <p>
                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                                ac consectetur ac, vestibulum at eros.
                                </p>
                                <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                                auctor.
                                </p>
                                <p>
                                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                                cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                                dui. Donec ullamcorper nulla non metus auctor fringilla.
                                </p>
                            </Modal.Body>
                            <Modal.Footer>
                                <button onClick={this.handleClose}>Close</button>
                            </Modal.Footer>
                            </Modal>

                </div>

            </div>

        )
    }
}

export default Footer;