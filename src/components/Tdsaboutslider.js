import React from "react";
import { Row, Col, Progress } from "reactstrap";
import Icofont from "react-icofont";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Tdsaboutslider.css";

class Tdsaboutslider extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <OwlCarousel
        className="owl-theme"
        loop
        margin={10}
        nav={false}
        items="1"
        dots={true}
        lazyLoad={true}
      >
        {/* <div className="item">
          <div className="title-box mb-0 text-left">
            <h2 className="mb-0">
              About <b>Country Garage Doors</b>
            </h2>
            <h4 className="mt-0 mb-2 sub-title">
              We Are Digital <span>Marketing & Branding</span>
            </h4>
            <p>When an unknown printer took a galley of type and scrambled.</p>
          </div>
          <Row className="mt-4">
            <Col className="text-left">
              <h6 className="mb-0">Branding</h6>
            </Col>
            <Col className="text-right">
              <h6 className="mb-0">95%</h6>
            </Col>
          </Row>
          <Progress value="95" animated color="orange" className="mb-3" />
          <Row>
            <Col className="text-left">
              <h6 className="mb-0">Marketing</h6>
            </Col>
            <Col className="text-right">
              <h6 className="mb-0">95%</h6>
            </Col>
          </Row>
          <Progress value={95} animated color="orange" className="mb-3" />
          <Row>
            <Col className="text-left">
              <h6 className="mb-0">Web Design</h6>
            </Col>
            <Col className="text-right">
              <h6 className="mb-0">95%</h6>
            </Col>
          </Row>
          <Progress value={95} animated color="orange" className="mb-3" />
          <Row>
            <Col className="text-left">
              <h6 className="mb-0">Web Development</h6>
            </Col>
            <Col className="text-right">
              <h6 className="mb-0">92%</h6>
            </Col>
          </Row>
          <Progress value="92" animated color="orange" />
        </div> */}

        <div className="item">
          <div className="title-box text-left mb-0">
            <h2 className="mb-0">About us</h2>
            <h4 className="mt-0 mb-2 sub-title">
              We Are care about is <span>Garage Doors</span>
            </h4>
          </div>
          <p>
            <b>
              At Country Garage doors, we always strive for perfection. Our
              extremely professional and skilled staff aim to provide you with
              the exceptional quality and architectural designs of variety doors
              which can be customized as per your preferences and
              specifications.
            </b>
            <p>
              <b>
                If you want to give your property an attractive look along with
                maximum protection and security to your most loved items, trust
                COUNTRY GARAGE DOORS.
              </b>
            </p>
            <b>
              Besides being a supplier of garage doors, we deal in repairs,
              installation, supplies and services as well.
            </b>
          </p>
        </div>

        {/* <div className="item">
          <div className="title-box text-left mb-0">
            <h2 className="mb-0">
              Why Choose <b>Us</b>
            </h2>
            <h4 className="mt-0 mb-2 sub-title">
              We Are Digital <span>Marketing & Branding</span>
            </h4>
            <p>When an unknown printer took a galley of type and scrambled.</p>
          </div>
          <div className="why-choose">
            <Row noGutters>
              <Col xs="6" sm="6" md="4">
                <div className="why-box text-center">
                  <Icofont icon="icofont-drag2" />
                  <h5>Perfect Design</h5>
                </div>
              </Col>
              <Col xs="6" sm="6" md="4">
                <div className="why-box text-center">
                  <Icofont icon="icofont-live-support" />
                  <h5>Perfect Design</h5>
                </div>
              </Col>
              <Col xs="6" sm="6" md="4">
                <div className="why-box text-center">
                  <Icofont icon="icofont-support" />
                  <h5>Friendly Support</h5>
                </div>
              </Col>
              <Col xs="6" sm="6" md="4">
                <div className="why-box text-center">
                  <Icofont icon="icofont-unique-idea" />
                  <h5>Unique Design</h5>
                </div>
              </Col>
              <Col xs="6" sm="6" md="4">
                <div className="why-box text-center">
                  <Icofont icon="icofont-team" />
                  <h5>Expert Team</h5>
                </div>
              </Col>
              <Col xs="6" sm="6" md="4">
                <div className="why-box text-center">
                  <Icofont icon="icofont-search-user" />
                  <h5>SEO & Marketing</h5>
                </div>
              </Col>
            </Row>
          </div>
        </div> */}
      </OwlCarousel>
    );
  }
}

export default Tdsaboutslider;
