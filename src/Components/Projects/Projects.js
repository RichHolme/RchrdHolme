import React, { Component } from "react";
// import { Carousel } from "react-bootstrap";
import Footer from "../Footer";
import Nav from "../Nav";
import Css from "./Project.css"
import { Link } from "react-router-dom";
import { OverlayTrigger, Popover } from "react-bootstrap";

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
        // paddingBottom: "8%",
        // margin: "2%",
        // color: "white",
        // borderRadius: "10px",
        boxShadow: "1px 1px 8px 1px #888888",
        position: "relative",
        overflow: "hidden",
        // background: "black"
        // textAlign: 'center'
        clear: "both",
        // backgroundColor: "black"
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
        top: "40%",
        marginLeft: "auto",
        marginRight: "auto",
        left: "0",
        right: "0",
        // left: "20%"
        // height: "10%"
        // fontWeight: "bold"
    },
    textBack: {
        position: "absolute",
        color: "white",
        top: "35%",
        marginLeft: "auto",
        marginRight: "auto",
        left: "0",
        right: "0",
        // left: "20%"
        // height: "10%"
        // fontWeight: "bold"
    },
    container: {
        textAlign: "center",
    }
}

class Projects extends Component {
  
    render() {
    //   const { index, direction } = this.state;
  
      return (
          <div style={styles.container} className="">
            <Nav />
            <div className="container">
                <div className="row">
                    <div className="col-md-6">

                        
                        <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                            <div class="flipper">
                                <div class="front">
                                    <a target="_blank" href="https://richholme.github.io/Movie-Book-Search/">
                                        <div className="project" style={styles.div}>
                                            <img style={styles.img} alt="900x500" src="http://blog.hdwallsource.com/wp-content/uploads/2016/03/library-wallpaper-50371-52062-hd-wallpapers.jpg" />
                                            <div style={styles.text}>
                                                <h1>To Read or Not to Read?</h1>
                                                {/* <p>Should I read the book or watch the movie?</p> */}
                                                {/* <p>Html Css Javascript Jquery Ajax</p> */}
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="back">
                                    <a target="_blank" href="https://richholme.github.io/Movie-Book-Search/">
                                            <div className="project" style={styles.div}>
                                                <img style={styles.img} alt="900x500" src={require('../../Images/gray.jpg')} />
                                                <div style={styles.textBack}>
                                                    <h4 className='h4'>Should I read the book or watch the movie?</h4>
                                                    <h2>I was built with...</h2>
                                                    <h4>Html Css Javascript</h4>
                                                    {/* <p>Html Css Javascript Jquery Ajax</p> */}
                                                </div>
                                            </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>

                    <div className="col-md-6">

                        
                        <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                            <div class="flipper">
                                <div class="front">
                                    <a target="_blank" href="https://face-bark.herokuapp.com/">
                                        <div className="project" style={styles.div}>
                                            <img style={styles.img} alt="900x500" src="https://media.giphy.com/media/NmGbJwLl7Y4lG/giphy.gif" />
                                            <div style={styles.text}>
                                                <h2>Facebark</h2>
                                                {/* <p>Walk your dog. Be social. Life is good.</p> */}
                                                
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="back">
                                    <a target="_blank" href="https://face-bark.herokuapp.com/">
                                            <div className="project" style={styles.div}>
                                                <img style={styles.img} alt="900x500" src={require('../../Images/gray.jpg')} />
                                                <div style={styles.textBack}>
                                                    <h4 className='h4'>Walk your dog. Be social. Life is good.</h4>
                                                    <h2>I was built with...</h2>
                                                    <h4>Materialize Express.js Node.js MySQL Sequelize Javascript</h4>
                                                    
                                                </div>
                                            </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        

                    </div>

                </div>

                <div className="row">

                    <div className="col-md-6">

                        
                        <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                            <div class="flipper">
                                <div class="front">
                                     <a target="_blank" href="https://mongo-scrapr.herokuapp.com/index.html">
                                        <div className="project" style={styles.div}>
                                            <img style={styles.img} alt="900x500" src={require('../../Images/news.jpg')} />
                                            <div className="news" style={styles.text}>
                                                <h2>Mongo Scraper</h2>
                                                {/* <p>Scrape some articles. Keep track of your notes. Everyone loves the news.</p> */}
                                                {/* <p>React.js React Router React-Bootstrap MongoDB Mongoose</p> */}
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="back">
                                    <a target="_blank" href="https://mongo-scrapr.herokuapp.com/index.html">
                                            <div className="project" style={styles.div}>
                                                <img style={styles.img} alt="900x500" src={require('../../Images/gray.jpg')} />
                                                <div style={styles.textBack}>
                                                    <h4 className='h4'>Scrape some articles. Keep track of your notes. Everyone loves the news.</h4>
                                                    <h2>I was built with...</h2>
                                                    <h4>Express.js Node.js Cheerio MongoDB Mongoose</h4>
                                                    
                                                </div>
                                            </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        

                    </div>

                    <div className="col-md-6">

                        
                        <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                            <div class="flipper">
                                <div class="front">
                                     <a target="_blank" href="https://richholme.github.io/MemoryGame/">
                                        <div className="project" style={styles.div}>
                                            <img style={styles.img} alt="900x500" src={require('../../Images/dirty.jpg')} />
                                            <div style={styles.text}>
                                                <h2>The Dirty Dozen Puzzle</h2>
                                                {/* <p>Think you have a good memory? Lets test it.</p> */}
                                                {/* <p>React.js React Router React-Bootstrap MongoDB Mongoose</p> */}
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="back">
                                    <a target="_blank" href="https://richholme.github.io/MemoryGame/">
                                        <div className="project" style={styles.div}>
                                            <img style={styles.img} alt="900x500" src={require('../../Images/gray.jpg')} />
                                            <div style={styles.textBack}>
                                                <h4 className='h4'>Think you have a good memory? Lets test it.</h4>
                                                <h2>I was built with...</h2>
                                                <h4>React.js</h4>
                                                    
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                       

                    </div>

                </div>

                 <div className="row">


                    <div className="col-md-6">

                        
                        <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                            <div class="flipper">
                                <div class="front">
                                    <a target="_blank" href="https://vast-plateau-18950.herokuapp.com/">
                                        <div className="project" style={styles.div}>
                                            <img style={styles.img} alt="900x500" src={require('../../Images/popeye.jpg')} />
                                            <div style={styles.text}>
                                                <h2>Friend Finder</h2>
                                                {/* <p>Think you have a good memory? Lets test it.</p> */}
                                                {/* <p>React.js React Router React-Bootstrap MongoDB Mongoose</p> */}
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="back">
                                    <a target="_blank" href="https://vast-plateau-18950.herokuapp.com/">
                                        <div className="project" style={styles.div}>
                                            <img style={styles.img} alt="900x500" src={require('../../Images/gray.jpg')} />
                                            <div style={styles.textBack}>
                                                <h4 className='h4'>Popeye needs some friends!</h4>
                                                <h2>I was built with...</h2>
                                                <h4>Express.js Node.js Javascript</h4>
                                                    
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    

                    </div>
                </div>

                <Footer />

            </div>
            
                
        </div>
      );
    }
  }
  
//   render(<ControlledCarousel />);

export default Projects;