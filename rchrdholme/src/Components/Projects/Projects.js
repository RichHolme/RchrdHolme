import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

const styles = {
    img : {
        width: '100%',
        height: '50vh',
        // paddingRight: '5vw',
        // paddingLeft: "5vw"
    },
    div : {
        marginTop: "5%",
        textAligh: "center",
        // background: "#528190",
        padding: "3%",
        // color: "white",
        // borderRadius: "10px",
        boxShadow: "1px 1px 8px 1px #888888"
    },
    // background1: {
    //     backgroundImage: "url('https://images.complex.com/complex/image/upload/t_article_image/ojyz9t7vrxxzcmqkycyd.jpg')"
    // }
    color: {
        color: "black",
        
    },
    carousel: {
        width: "70%",
        margin: "0 auto",
        boxShadow: "1px 1px 8px 1px #888888"
    }
}


class Projects extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null
      };
    }
  
    handleSelect(selectedIndex, e) {
    //   alert(`selected=${selectedIndex}, direction=${e.direction}`);
      this.setState({
        index: selectedIndex,
        direction: e.direction
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
          <div style={styles.div} className="container">
          
                <Carousel
                style={styles.carousel}
                activeIndex={index}
                direction={direction}
                onSelect={this.handleSelect}
                >
                <Carousel.Item>
                    <img style={styles.img} alt="900x500" src="http://blog.hdwallsource.com/wp-content/uploads/2016/03/library-wallpaper-50371-52062-hd-wallpapers.jpg" />
                    <Carousel.Caption>
                    <h2>To Read or Not to Read?</h2>
                    <p>Should I read the book or watch the movie?</p>
                    <p>Html Css Javascript Jquery Ajax</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={styles.img} alt="900x500" src="https://media.giphy.com/media/NmGbJwLl7Y4lG/giphy.gif" />
                    <Carousel.Caption>
                    <h2>Facebark</h2>
                    <p>Walk your dog. Be social. Life is good.</p>
                    <p>Html Css Javascript MySQL Sequelize Passport Materialize Node.js Express.js</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={styles.img} alt="900x500" src="http://eskipaper.com/images/world-wallpaper-9.jpg" />
                    <Carousel.Caption>
                    <h2>Trevello</h2>
                    <p>Create and plan your trips with us.</p>
                    <p>React.js React Router React-Bootstrap MongoDB Mongoose</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>
      );
    }
  }
  
//   render(<ControlledCarousel />);

export default Projects;