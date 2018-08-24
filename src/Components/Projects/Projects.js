import React, { Component } from "react";
// import { Carousel } from "react-bootstrap";
import FooterProjects from "../Footer";
import Nav from "../Nav";
import Css from "./Project.css"
import { Link } from "react-router-dom";
import { OverlayTrigger, Popover } from "react-bootstrap";

const styles = {
    img : {
        width: '100%',
        height: '100%',
        // paddingRight: '5vw',
        // paddingLeft: "5vw"
        // boxShadow: "1px 1px 8px 1px #888888",
    },
    div : {
        padding: "1.5%",
        boxShadow: "1px 1px 8px 1px #888888",
        position: "relative",
        overflow: "hidden",
        clear: "both",
        backgroundColor:"white"
    },
    divback : {
        padding: "3%",
        boxShadow: "1px 1px 10px 2px #696767",
        position: "relative",
        overflow: "hidden",
        clear: "both",
        backgroundColor:"white"
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
        top: "45%",
        marginLeft: "auto",
        marginRight: "auto",
        left: "0",
        right: "0",
        // left: "20%"
        // height: "10%"
        // fontWeight: "bold"
        // fontFamily: "Minion"
        // fontSize: "8vh"
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
        // fontFamily: "Minion"
    },
    container: {
        textAlign: "center",
    },
    imgprofile: {
        height: "36vh",
        width: "36vh",
        borderRadius: "50%",
        // float: "left",
        // marginLeft: "3%",
        // marginRight: "3%",
        boxShadow: "1px 1px 8px 1px #888888",
        // float: "left",
        marginBottom: "4vh",
        marginTop: "25vh"
    },
    divprofile: {
        textAlign: "center",
        padding: "3%",
        // marginTop: "4%"
    },
    div2profile: {
        // float: "right",
        textAlign: "left",
        marginTop: "1%",
        fontSize: "2.5vh",
        // paddingLeft: "3%",
    },
    border: {
        borderBottom: "3px solid black",
        marginBottom: "4%",
        marginTop: "8%"
    },
    skills: {
        fontStyle: "italic"
    },
    left: {
        backgroundColor: "blue"
    },
    right: {
        backgroundColor: "red"
    }
}

class Projects extends Component {
  
    render() {
    //   const { index, direction } = this.state;
  
      return (
        <div style={styles.container} className="">

            <Nav />
            <div className="container hidden-xs hidden-sm">

                <div id="profile" className="row">

                    <div className="col-md-6 col-sm-12">
                        <img id="profileImg" style={styles.imgprofile} src={require('../../Images/profile.jpg')}></img>
                        <div>
                            <h1 className="skills">Got Skills?</h1>
                            <div style={styles.skills}>
                                Node.js, Express, JavaScript, .NET, jQuery, React, GIT, GitHub, MongoDB, MySQL, 
                                Sequelize, Firebase, HTML, CSS, Bootstrap, Materialize, Chai, Mocha, REST, APIs, JSON, AJAX, 
                                CLI, OOP 
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-12">

                        <div  style={styles.divprofile}>
                        
                            <div className="" style={styles.div2profile}>
                                <h1 id="aboutMe">Who's This Guy?</h1>
                                I'm a resident of Raleigh NC looking to kick start my career in technology.
                                You may be thinking, "kick start? great, this guy is green." But wait! Don't write 
                                me off just yet. There are a lot of inspiring words I could use to describe myself, 
                                but the reality is I enjoy a challenge and seek perfection in what I do.   
                                Prior to my "techiness", I was employed by the Inter-Faith 
                                Food Shuttle and served my community with some really "cool" people. I
                                graduated from the Code Bootcamp at UNC Chapel Hill in July 2018. I am 
                                currently pursuing an Associate of Engineering at Wake Tech. My
                                goal is to earn a Bachelor of Computer Science at NC State. I'm always seeking
                                an opportunity to gain experience and learn something new. 
                            </div>
                        </div>
                    
                    </div>
                </div>

                <div id="projects" className="row firstProject">
                        
                    {/* <div className="row"><h1 id="myWork">What's He Done?</h1></div> */}
                    
                    <div className="col-md-7 col-sm-12">

                        <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                            <div>
                                <div id="front" class="front">
                                    <a target="_blank" href="https://richholme.github.io/Movie-Book-Search/">
                                        <div className="project" style={styles.div}>
                                            <img style={styles.img} alt="900x500" src="http://simpsonswiki.com/w/images/0/01/Springfield_Library.png" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>

                    <div className="col-md-5 col-sm-12 description" style={styles.div2profile}>
                        <h1 className="title">To Read Or Not To Read?</h1>
                        {/* <div className="col-sm-12"> */}
                            That is the question.... Have you ever wondered if your book was made into a movie? 
                            Maybe it's crunch time and Ms. Unpleasant just changed the due date of your paper. What 
                            I’ve created is a one stop shop to help you solve these dilemmas. Search for your book 
                            and check out the “would you read poll” to help you make your decision. If there's an 
                            accompanying film, you can find the details and watch the trailer.
                        {/* </div> */}

                        <h1 className="title">I Was Built With...</h1>
                        <div className="center">
                            Html Css Javascript Jquery Ajax
                        </div>

                    </div>

                </div>

                <div id="projects" className="row">

                    <div className="col-md-5 col-sm-12 descriptionright" style={styles.div2profile}>
                        <h1 className="title">Facebark</h1>
                        
                        Have a dog and like to socialize? Then this is the site for you! Create a 
                        profile for your dog, build a customized search for parks in your area, see who’s 
                        there, and meet up with fellow dog owners! (Your dog's tail just started wagging.)
                       
                        <h1 className="title">I Was Built With...</h1>
                            <div className="center">
                                Express.js Node.js MySQL Sequelize Materialize
                            </div>
                    </div>

                    <div id="rightImg" className="col-md-7 col-sm-12">
     
                        <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                            <div>
                                <div id="front" class="front">
                                    <a target="_blank" href="https://face-bark.herokuapp.com/">
                                        <div id="projectRight" style={styles.div}>
                                            <img style={styles.img} alt="900x500" src="https://media.giphy.com/media/NmGbJwLl7Y4lG/giphy.gif"  />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
    
                </div>

                <div id="projects" className="row">
    
                        <div className="col-md-7 col-sm-12">
    
                            <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                                <div>
                                    <div id="front" class="front">
                                        <a target="_blank" href="https://richholme.github.io/MemoryGame/">
                                            <div className="project" style={styles.div}>
                                                <img style={styles.img} alt="900x500" src={require('../../Images/dirty.jpg')} />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                            
                        </div>
    
                        <div className="col-md-5 col-sm-12 description" style={styles.div2profile}>
                            <h1 className="title">The Dirty Dozen Puzzle</h1>
                            
                                The cast of The Dirty Dozen will put your memory to the test! We could all 
                                use a little more brain muscle so come and flex yours with some WWII GIs.
                          
    
                            <h1 className="title">I Was Built With...</h1>
                                <div className="center">
                                    React.js
                           
                                </div>
                        </div>
    
                        {/* <div className="col-md-6">
     
                            <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                                <div class="flipper">
                                    <div class="front">
                                        <a target="_blank" href="https://face-bark.herokuapp.com/">
                                            <div className="project" style={styles.div}>
                                                <img style={styles.img} alt="900x500" src="https://media.giphy.com/media/NmGbJwLl7Y4lG/giphy.gif" />
                                                <div style={styles.text}>
                                                    <h2 className="title">Facebark</h2>                
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="back">
                                        <a target="_blank" href="https://face-bark.herokuapp.com/">
                                            <div className="project" style={styles.divback}>
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
                            
    
                        </div> */}
    
                </div>
    
                <div id="projects" className="row">
    
                            {/* <div className="col-md-6">
         
                                <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                                    <div class="flipper">
                                        <div class="front">
                                            <a target="_blank" href="https://face-bark.herokuapp.com/">
                                                <div className="project" style={styles.div}>
                                                    <img style={styles.img} alt="900x500" src="https://media.giphy.com/media/NmGbJwLl7Y4lG/giphy.gif" />
                                                    <div style={styles.text}>
                                                        <h2 className="title">Facebark</h2>                
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="back">
                                            <a target="_blank" href="https://face-bark.herokuapp.com/">
                                                <div className="project" style={styles.divback}>
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
                                
        
                            </div> */}
                        <div className="col-md-5 col-sm-12 descriptionright" style={styles.div2profile}>
                            <h1 className="title">Mongo Scraper</h1>
                                Using Cheerio to scrape articles off the web, you can keep up with 
                                the latest stories, save your favorites and add notes for later.  
                           
                            <h1 className="title">I Was Built With...</h1>
                            
                            <div className="center">
                                Express.js Node.js Cheerio MongoDB Mongoose
                          
                            </div>
                        </div>
    
                        <div id="rightImg" className="col-md-7 col-sm-12">
         
                            <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                                <div>
                                    <div id="front" class="front">
                                        <a target="_blank" href="https://mongo-scrapr.herokuapp.com/index.html">
                                            <div id="projectRight" style={styles.div}>
                                                <img style={styles.img} alt="900x500" src={require('../../Images/news.jpg')} />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
    
                        </div>
        
                </div>

                <div id="projects" className="row">
    
                    <div className="col-md-7 col-sm-12">

                        <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                            <div>
                                <div id="front" class="front">
                                    <a target="_blank" href="https://vast-plateau-18950.herokuapp.com/">
                                        <div className="project" style={styles.div}>
                                            <img style={styles.img} alt="900x500" src={require('../../Images/popeye.jpg')} />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>

                    <div className="col-md-5 col-sm-12 description" style={styles.div2profile}>
                        <h1 className="title">Friend Finder</h1>
                        {/* <div className="col-sm-12"> */}
                            Popeye needs some friends! Fill out the survey to find out who you're 
                            most compatible with.
                        {/* </div> */}

                        <h1 className="title">I Was Built With...</h1>
                        <div className="center">
                            Express.js Node.js Javascript
                        </div>

                    </div>

                    {/* <div className="col-md-6">

                        <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                            <div class="flipper">
                                <div class="front">
                                    <a target="_blank" href="https://face-bark.herokuapp.com/">
                                        <div className="project" style={styles.div}>
                                            <img style={styles.img} alt="900x500" src="https://media.giphy.com/media/NmGbJwLl7Y4lG/giphy.gif" />
                                            <div style={styles.text}>
                                                <h2 className="title">Facebark</h2>                
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="back">
                                    <a target="_blank" href="https://face-bark.herokuapp.com/">
                                        <div className="project" style={styles.divback}>
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
                        

                    </div> */}

                </div>

                <div id="projects" className="row">
    
                    {/* <div className="col-md-6">

                        <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                            <div class="flipper">
                                <div class="front">
                                    <a target="_blank" href="https://face-bark.herokuapp.com/">
                                        <div className="project" style={styles.div}>
                                            <img style={styles.img} alt="900x500" src="https://media.giphy.com/media/NmGbJwLl7Y4lG/giphy.gif" />
                                            <div style={styles.text}>
                                                <h2 className="title">Facebark</h2>                
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="back">
                                    <a target="_blank" href="https://face-bark.herokuapp.com/">
                                        <div className="project" style={styles.divback}>
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
                        

                    </div> */}
                    <div className="col-md-5 col-sm-12 descriptionright" style={styles.div2profile}>
                        <h1 className="title">Rock Paper Sissors</h1>
                        
                        Go ahead and hurl some pre-teen insults, this
                        bad boy has chat features. Be sure to open in two tabs to play your opponent.
                    
                        <h1 className="title">I Was Built With...</h1>
                        <div className="center">
                            Html Bootstrap Javascript Firebase
                        </div>

                    </div>

                    <div id="rightImg" className="col-md-7 col-sm-12">

                        <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                            <div>
                                <div id="front" class="front">
                                    <a target="_blank" href="https://richholme.github.io/RPS-Game/">
                                        <div id="projectRight" style={styles.div}>
                                            <img style={styles.img} alt="900x500" src="https://futurism.com/wp-content/uploads/2014/05/rock-paper-scissors.jpg" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div className="container hidden-md hidden-lg">

                <div className="row">

                    <div className="col-md-6 col-sm-12">
                        <img id="profileImg" style={styles.imgprofile} src={require('../../Images/profile.jpg')}></img>
                        
                    </div>

                    <div className="col-md-6 col-sm-12">

                        <div  style={styles.divprofile}>
                        
                            <div className="" style={styles.div2profile}>
                                <h1 id="aboutMe">Who's This Guy?</h1>
                                I'm a resident of Raleigh NC looking to kick start my career in technology.
                                You may be thinking, "kick start? great, this guy is green." But wait! Don't write 
                                me off just yet. There are a lot of inspiring words I could use to describe myself, 
                                but the reality is I enjoy a challenge and seek perfection in what I do.   
                                Prior to my "techiness", I was employed by the Inter-Faith 
                                Food Shuttle and served my community with some really "cool" people. I
                                graduated from the Code Bootcamp at UNC Chapel Hill in July 2018. I am 
                                currently pursuing an Associate of Engineering at Wake Tech. My
                                goal is to earn a Bachelor of Computer Science at NC State. I'm always seeking
                                an opportunity to gain experience and learn something new. 
                            </div>
                        </div>

                    </div>
                </div>

                <div className="row">
                    <h1 className="skills">Got Skills?</h1>
                    <div style={styles.skills}>
                        Node.js, Express, JavaScript, .NET, jQuery, React, GIT, GitHub, MongoDB, MySQL, 
                        Sequelize, Firebase, HTML, CSS, Bootstrap, Materialize, Chai, Mocha, REST, APIs, JSON, AJAX, 
                        CLI, OOP 
                    </div>
                </div>

                <div className="row">
                    <h1 id="aboutMe">My Work</h1>
                </div>
                
                <div className="row">
                    <div className="col-md-6">

                        
                        <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                            <div class="flipper">
                                <div class="front">
                                    <a target="_blank" href="https://richholme.github.io/Movie-Book-Search/">
                                        <div className="project" style={styles.div}>
                                            <img style={styles.img} alt="900x500" src="http://simpsonswiki.com/w/images/0/01/Springfield_Library.png" />
                                            <div style={styles.text}>
                                                <h2 className="title">To Read or Not to Read?</h2>
                                                {/* <p>Should I read the book or watch the movie?</p> */}
                                                {/* <p>Html Css Javascript Jquery Ajax</p> */}
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="back">
                                    <a target="_blank" href="https://richholme.github.io/Movie-Book-Search/">
                                            <div className="project" style={styles.divback}>
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
                                                <h2 className="title">Facebark</h2>
                                                {/* <p>Walk your dog. Be social. Life is good.</p> */}
                                                
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="back">
                                    <a target="_blank" href="https://face-bark.herokuapp.com/">
                                            <div className="project" style={styles.divback}>
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
                                                <h2 className="title">Mongo Scraper</h2>
                                                {/* <p>Scrape some articles. Keep track of your notes. Everyone loves the news.</p> */}
                                                {/* <p>React.js React Router React-Bootstrap MongoDB Mongoose</p> */}
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="back">
                                    <a target="_blank" href="https://mongo-scrapr.herokuapp.com/index.html">
                                            <div className="project" style={styles.divback}>
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
                                                <h2 className="title">The Dirty Dozen Puzzle</h2>
                                                {/* <p>Think you have a good memory? Lets test it.</p> */}
                                                {/* <p>React.js React Router React-Bootstrap MongoDB Mongoose</p> */}
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="back">
                                    <a target="_blank" href="https://richholme.github.io/MemoryGame/">
                                        <div className="project" style={styles.divback}>
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
                                                <h2 className="title">Friend Finder</h2>
                                                {/* <p>Think you have a good memory? Lets test it.</p> */}
                                                {/* <p>React.js React Router React-Bootstrap MongoDB Mongoose</p> */}
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="back">
                                    <a target="_blank" href="https://vast-plateau-18950.herokuapp.com/">
                                        <div className="project" style={styles.divback}>
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

                    <div className="col-md-6">
                        <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                                <div class="flipper">
                                    <div class="front">
                                        <a target="_blank" href="https://richholme.github.io/RPS-Game/">
                                            <div className="project" style={styles.div}>
                                                <img style={styles.img} alt="900x500" src="https://futurism.com/wp-content/uploads/2014/05/rock-paper-scissors.jpg" />
                                                <div style={styles.text}>
                                                    <h2 className="title">Rock Paper Sissors</h2>
                                                    {/* <p>Think you have a good memory? Lets test it.</p> */}
                                                    {/* <p>React.js React Router React-Bootstrap MongoDB Mongoose</p> */}
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="back">
                                        <a target="_blank" href="https://richholme.github.io/RPS-Game/">
                                            <div className="project" style={styles.divback}>
                                                <img style={styles.img} alt="900x500" src={require('../../Images/gray.jpg')} />
                                                <div style={styles.textBack}>
                                                    <h4 className='h4'>Go ahead hurl some pre-teen insults, this
                                                    bad boy has chat features. (Be sure to open in two tabs to play your opponent)</h4>
                                                    <h2>I was built with...</h2>
                                                    <h4>Html Bootstrap Javascript Firebase</h4>
                                                        
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                        </div>
                    </div>

                </div>

            </div>

            <FooterProjects></FooterProjects>
        
        </div>
            
        );
    }
}
  
//   render(<ControlledCarousel />);

export default Projects;