import React, { Component } from "react";
// import { Carousel } from "react-bootstrap";
import Footer from "../Footer";
import Nav from "../Nav";
import Css from "./Project.css"
import { Link } from "react-router-dom";

const styles = {
    img : {
        width: '100%',
        height: '40vh',
        // paddingRight: '5vw',
        // paddingLeft: "5vw"
        // boxShadow: "1px 1px 8px 1px #888888",
    },
    div : {
        // marginTop: "5%",
        // float: 'left',
        // width: "49%",
        // height: "5%",
        // textAligh: "center",
        // background: "#528190",
        padding: "3%",
        margin: "2%",
        // color: "white",
        // borderRadius: "10px",
        boxShadow: "1px 1px 8px 1px #888888",
        position: "relative",
        overflow: "hidden",
        // background: "black"
        // textAlign: 'center'
        clear: "both"
    },
    // background1: {
    //     backgroundImage: "url('https://images.complex.com/complex/image/upload/t_article_image/ojyz9t7vrxxzcmqkycyd.jpg')"
    // }
    color: {
        color: "black",
        
    },
    text: {
        position: "absolute",
        color: "white",
        top: "55%",
        marginLeft: "auto",
        marginRight: "auto",
        left: "0",
        right: "0"
        // left: "20%"
        // height: "10%"
    },
    container: {
        textAlign: "center",
    }
}


class Projects extends Component {
  
    render() {
    //   const { index, direction } = this.state;
  
      return (
          <div style={styles.container} className="container">
            <Nav />
            <div className="row">
                <div className="col-md-6">
                    <a target="_blank" href="https://richholme.github.io/Movie-Book-Search/">
                        <div className="project" style={styles.div}>
                            <img style={styles.img} alt="900x500" src="http://blog.hdwallsource.com/wp-content/uploads/2016/03/library-wallpaper-50371-52062-hd-wallpapers.jpg" />
                            <div style={styles.text}>
                                <h2>To Read or Not to Read?</h2>
                                <p>Should I read the book or watch the movie?</p>
                                {/* <p>Html Css Javascript Jquery Ajax</p> */}
                            </div>
                        </div>
                    </a>
                </div>

                <div className="col-md-6">
                    <a target="_blank" href="https://face-bark.herokuapp.com/">
                        <div className="project" style={styles.div}>
                            <img style={styles.img} alt="900x500" src="https://media.giphy.com/media/NmGbJwLl7Y4lG/giphy.gif" />
                            <div style={styles.text}>
                                <h2>Facebark</h2>
                                <p>Walk your dog. Be social. Life is good.</p>
                                {/* <p>Html Css Javascript MySQL Sequelize Passport Materialize Node.js Express.js</p> */}
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div className="row">

                <div className="col-md-6">
                    <a target="_blank" href="https://richholme.github.io/MemoryGame/">
                        <div className="project" style={styles.div}>
                            <img style={styles.img} alt="900x500" src={require('../../Images/dirty.jpg')} />
                            <div style={styles.text}>
                                <h2>The Dirty Dozen Puzzle</h2>
                                <p>Think you have a good memory? Lets test it.</p>
                                {/* <p>React.js React Router React-Bootstrap MongoDB Mongoose</p> */}
                            </div>
                        </div>
                    </a>
                </div>

            </div>

            <Footer />
                
        </div>
      );
    }
  }
  
//   render(<ControlledCarousel />);

export default Projects;