import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

const styles = {
    img : {
        width: '100%',
        height: '40vh',
        // paddingRight: '5vw',
        // paddingLeft: "5vw"
    },
    div : {
        // marginTop: "5%",
        // float: 'left',
        // width: "49%",
        // height: "5%",
        // textAligh: "center",
        // background: "#528190",
        padding: "3%",
        margin: "1%",
        // color: "white",
        // borderRadius: "10px",
        boxShadow: "1px 1px 8px 1px #888888",
        position: "relative",
        overflow: "hidden",
        // background: "black"
        // textAlign: 'center'
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
        // left: "20%"
        // height: "10%"
    },
    container: {
        textAlign: "center"
    }
}


class Projects extends Component {
  
    render() {
    //   const { index, direction } = this.state;
  
      return (
          <div style={styles.container} className="container">

            <div className="row">
                <div className="col-md-6">
                    <div style={styles.div}>
                        <img style={styles.img} alt="900x500" src="http://blog.hdwallsource.com/wp-content/uploads/2016/03/library-wallpaper-50371-52062-hd-wallpapers.jpg" />
                        <div style={styles.text}>
                            <h2>To Read or Not to Read?</h2>
                            <p>Should I read the book or watch the movie?</p>
                            {/* <p>Html Css Javascript Jquery Ajax</p> */}
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div  style={styles.div}>
                        <img style={styles.img} alt="900x500" src="https://media.giphy.com/media/NmGbJwLl7Y4lG/giphy.gif" />
                        <div style={styles.text}>
                            <h2>Facebark</h2>
                            <p>Walk your dog. Be social. Life is good.</p>
                            {/* <p>Html Css Javascript MySQL Sequelize Passport Materialize Node.js Express.js</p> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">

                <div className="col-md-6">
                    <div style={styles.div}>
                        <img style={styles.img} alt="900x500" src="http://eskipaper.com/images/world-wallpaper-9.jpg" />
                        <div style={styles.text}>
                            <h2>Trevello</h2>
                            <p>Create and plan your trips with us.</p>
                            {/* <p>React.js React Router React-Bootstrap MongoDB Mongoose</p> */}
                        </div>
                    </div>
                </div>

             </div>
                
        </div>
      );
    }
  }
  
//   render(<ControlledCarousel />);

export default Projects;