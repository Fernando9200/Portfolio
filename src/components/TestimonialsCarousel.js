import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import avatar1 from "./avatars/bootstrap.png";
import avatar2 from "./avatars/react2.png";
import avatar3 from "./avatars/django4.png";
import avatar4 from "./avatars/flutter.png";
import avatar5 from "./avatars/javascript3.png";
import avatar6 from "./avatars/html.png";
import avatar7 from "./avatars/css.png";
import avatar8 from "./avatars/python.png";

function TestimonialsCarousel() {
  return ( 
  <Carousel>
      <>
        <img src={avatar1} alt="imagem"></img>
    <div className="myCarousel">
        <h3>Bootstrap</h3>
    </div>
      </>
      <>
        <img src={avatar2} alt="imagem"></img>
    <div className="myCarousel">
        <h3>React</h3>
    </div>
      </>
      <>
        <img src={avatar3} alt="imagem"></img>
    <div className="myCarousel">
        <h3>Django</h3>
    </div>
      </>
      <>
        <img src={avatar4} alt="imagem"></img>
    <div className="myCarousel">
        <h3>Flutter</h3>
    </div>
      </>
      <>
        <img src={avatar5} alt="imagem"></img>
    <div className="myCarousel">
        <h3>JavaScript</h3>
    </div>
      </>
      <>
        <img src={avatar6} alt="imagem"></img>
    <div className="myCarousel">
        <h3>HTML</h3>
    </div>
      </>
      <>
        <img src={avatar7} alt="imagem"></img>
    <div className="myCarousel">
        <h3>CSS</h3>
    </div>
      </>
      <>
        <img src={avatar8} alt="imagem"></img>
    <div className="myCarousel">
        <h3>Python</h3>
    </div>
      </>
  </Carousel> );
}

export default TestimonialsCarousel;