import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Tdsfeedbackslider.css";

class Tdsaboutslider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        767: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    };
  }
  render() {
    return (
      <OwlCarousel
        className="feedback-owl owl-theme"
        loop
        margin={30}
        nav={false}
        items="1"
        dots={true}
        lazyLoad={true}
        responsive={this.state.responsive}
      >
        <div className="item">
          <div className="feedback-box">
            <div className="client-info">
              <div className="client-img">
                <img
                  src={require("./../images/client-img1.jpg")}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <h5 className="mb-2">Kate Brolin</h5>
              <p>North Melbourne</p>
            </div>
            <p>
              These guys are best in the business. They are very reliable and
              provide best advice. I would highly recommend them to anyone.
              Thank you.
            </p>
          </div>
        </div>

        <div className="item">
          <div className="feedback-box">
            <div className="client-info">
              <div className="client-img">
                <img
                  src={require("./../images/client-img2.jpg")}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <h5 className="mb-2">Tom Smith</h5>
              <p>Cranbourne</p>
            </div>
            <p>
              One of my mates recommended me to you. I am very happy with the
              service. I will definitely use you again. Thank you.
            </p>
          </div>
        </div>

        <div className="item">
          <div className="feedback-box">
            <div className="client-info">
              <div className="client-img">
                <img
                  src={require("./../images/client-img3.jpg")}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <h5 className="mb-2">Mandeep Sandhu</h5>
              <p>Hoppers Crossing</p>
            </div>
            <p>
              County Garage Door has done a wonderful job each time they have
              done work on our warehouses. Their employees are always on time,
              professional and work hard to get the job done in a timely manner.
              I highly recommend them general repair and new installations.
            </p>
          </div>
        </div>

        <div className="item">
          <div className="feedback-box">
            <div className="client-info">
              <div className="client-img">
                <img
                  src={require("./../images/client-img4.jpg")}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <h5 className="mb-1">Haris</h5>
              <p>Brighton</p>
            </div>
            <p>
              Super, dependable family owned company. Does top notch work and
              great to work with. Very professional, and there to take care of
              fine details and make sure the job is done on time.
            </p>
          </div>
        </div>

        <div className="item">
          <div className="feedback-box">
            <div className="client-info">
              <div className="client-img">
                <img
                  src={require("./../images/client-img5.jpg")}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <h5 className="mb-1">Lakhwinder Dhillon</h5>
              <p>Altona</p>
            </div>
            <p>
              I have used Counry Garge Doors for two different house Garage
              Doors replacements. They did an excellent job and the work was
              done in a timely and professional manner. I would highly recommend
              them.
            </p>
          </div>
        </div>
      </OwlCarousel>
    );
  }
}

export default Tdsaboutslider;
