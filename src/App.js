/**
 * Entry application component used to compose providers and render Routes.
 * */
import React from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Media,
  Card,
  CardImg,
  CardText,
  Form,
  FormGroup,
  Input,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
// Web Icon fonts
import Icofont from "react-icofont";
// Web theme color root css
import "./components/colors.css";
import Tdsheader from "./components/Tdsheader";
import Tdsbanner from "./components/Tdsbanner";
import Tdsinputgroup from "./components/Tdsinputgroup";
import Tdsaboutslider from "./components/Tdsaboutslider";
import Tdsfeedbackslider from "./components/Tdsfeedbackslider";
import Tdslightbox from "./components/Tdslightbox";
import Tdspricingtable from "./components/Tdspricingtable";
import Tdsfooter from "./components/Tdsfooter";
import "./App.css";
import "./responsive.css";
import SubmitForm from "./components/SubmitForm";
import Mailer from "./components/Mailler";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* Navbar  */}
        <Tdsheader />

        {/* Hero Section Start */}
        <div id="home" className="section">
          <Tdsbanner />
        </div>

        {/* Welcome Section Start */}
        <div className=" welcome-box grapping">
          <Container>
            <div className="title-box">
              <h2>
                Welcome to <b>Country Garge Door</b>
              </h2>
            </div>
            <Row>
              <Col xs="12" sm="12" md="4">
                <div className="white-bg wel-box coman-box">
                  <Icofont icon="icofont-truck" />
                  <h4>Supply</h4>
                  <p>
                    We provide exceptional architectural designed doors and to
                    meet you specific needs.
                  </p>
                </div>
              </Col>
              <Col xs="12" sm="12" md="4">
                <div className="white-bg wel-box coman-box">
                  <Icofont icon="icofont-gear" />
                  <h4> Install</h4>
                  <p>
                    Our expericed team will install your doors and provide you
                    with the best service at the comfort of your home.
                  </p>
                </div>
              </Col>
              <Col xs="12" sm="12" md="4">
                <div className="white-bg wel-box coman-box">
                  <Icofont icon="icofont-repair" />
                  <h4>Repair</h4>
                  <p>
                    If your door is damaged or broken, we will repair it for
                    you.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* About us Section Start */}
        <div className="section about-box grapping" id="about">
          <Container>
            <Row>
              <Col xs="12" sm="12" md="12" lg="6">
                <div className="about-img">
                  <img
                    src={require("./images/aboutus.jpg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </Col>
              <Col xs="12" sm="12" md="12" lg="6">
                <Tdsaboutslider />
              </Col>
            </Row>
          </Container>
        </div>
        {/* Our Services Section Start */}
        <div className="section ourservice grapping" id="services">
          <Container>
            <div className="title-box">
              <h2>
                Our <b>Services</b>
              </h2>
              <p>
                We provide you with extensive services in garage door repairs
                and on time delivery of your customized doors with the help of
                our skilled and experienced professionals. Trusting us relieves
                you from stress of being unsecured and unsafe. Our services
                include:
              </p>
            </div>
            <Row>
              <Col xs="12" sm="6" md="6" lg="3">
                <div className="white-bg coman-box ourservice-box">
                  <Icofont icon="icofont-repair" />
                  <h4>Garge Door Repair</h4>
                  <p>
                    Available by one call to minimize your worries in minimal
                    time, our specialization lies in repair and servicing of all
                    models of Garage doors.
                  </p>
                </div>
              </Col>
              <Col xs="12" sm="6" md="6" lg="3">
                <div className="white-bg coman-box ourservice-box">
                  <Icofont icon="icofont-tick-boxed" />
                  <h4> Old and new doors</h4>
                  <p>
                    All old, repairable as well as new doors can be installed
                    without much hassle in no downtime.
                  </p>
                </div>
              </Col>
              <Col xs="12" sm="6" md="6" lg="3">
                <div className="white-bg coman-box ourservice-box">
                  <Icofont icon="icofont-sound-wave" />
                  <h4>Remote control</h4>
                  <p>
                    Our doors appear to be a good choice for tech savvy persons
                    who want them to be operated by a single click on remote
                    offering multiple features.
                  </p>
                </div>
              </Col>
              <Col xs="12" sm="6" md="6" lg="3">
                <div className="white-bg coman-box ourservice-box">
                  <Icofont icon="icofont-abacus-alt" />
                  <h4>Customized sliders</h4>
                  <p>
                    Gates can be customized as per your specifications. New
                    varied collection of sliding gates are designed and
                    installed by us.
                  </p>
                </div>
              </Col>
              <Col xs="12" sm="6" md="6" lg="3">
                <div className="white-bg coman-box ourservice-box">
                  <Icofont icon="icofont-ambulance" />
                  <h4>Emergency service</h4>
                  <p>
                    TYou need services on weekends or during late night hours,
                    we are available 24x7 for you just a phone call away.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Team Section Start */}
        {/* <div className="section expert-team grapping" id="team">
          <Container>
            <div className="title-box">
              <h2>
                Expert <b>Team</b>
              </h2>
              <p>
                When an unknown printer took a galley of type and scrambled it
                to make a type specimen book
              </p>
            </div>
            <Row>
              <Col xs="12" sm="6" md="6" lg="3">
                <div className="text-center coman-box team-box">
                  <div className="team-img">
                    <img
                      src={require("./images/team-img1.jpg")}
                      alt=""
                      className="img-fluid rounded-circle"
                    />
                  </div>
                  <h4 className="text-white">Lucy Smith</h4>
                  <p className="text-white">
                    When an unknown printer took a galley of type and scrambled
                    it to make a type specimen book
                  </p>
                  <ListGroup className="social-icon-team">
                    <ListGroupItem tag="a" href="#">
                      {" "}
                      <Icofont icon="icofont-facebook" />
                    </ListGroupItem>
                    <ListGroupItem tag="a" href="#">
                      {" "}
                      <Icofont icon="icofont-twitter" />
                    </ListGroupItem>
                    <ListGroupItem tag="a" href="#">
                      {" "}
                      <Icofont icon="icofont-instagram" />
                    </ListGroupItem>
                    <ListGroupItem tag="a" href="#">
                      {" "}
                      <Icofont icon="icofont-linkedin" />
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </Col>
              <Col xs="12" sm="6" md="6" lg="3">
                <div className="text-center coman-box team-box">
                  <div className="team-img">
                    <img
                      src={require("./images/team-img2.jpg")}
                      alt=""
                      className="img-fluid rounded-circle"
                    />
                  </div>
                  <h4 className="text-white">Alex Maxwel</h4>
                  <p className="text-white">
                    When an unknown printer took a galley of type and scrambled
                    it to make a type specimen book
                  </p>
                  <ListGroup className="social-icon-team">
                    <ListGroupItem tag="a" href="#">
                      {" "}
                      <Icofont icon="icofont-facebook" />
                    </ListGroupItem>
                    <ListGroupItem tag="a" href="#">
                      {" "}
                      <Icofont icon="icofont-twitter" />
                    </ListGroupItem>
                    <ListGroupItem tag="a" href="#">
                      {" "}
                      <Icofont icon="icofont-instagram" />
                    </ListGroupItem>
                    <ListGroupItem tag="a" href="#">
                      {" "}
                      <Icofont icon="icofont-linkedin" />
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </Col>
              <Col xs="12" sm="6" md="6" lg="3">
                <div className="text-center coman-box team-box">
                  <div className="team-img">
                    <img
                      src={require("./images/team-img3.jpg")}
                      alt=""
                      className="img-fluid rounded-circle"
                    />
                  </div>
                  <h4 className="text-white">Steven Doe</h4>
                  <p className="text-white">
                    When an unknown printer took a galley of type and scrambled
                    it to make a type specimen book
                  </p>
                  <ListGroup className="social-icon-team">
                    <ListGroupItem tag="a" href="#">
                      {" "}
                      <Icofont icon="icofont-facebook" />
                    </ListGroupItem>
                    <ListGroupItem tag="a" href="#">
                      {" "}
                      <Icofont icon="icofont-twitter" />
                    </ListGroupItem>
                    <ListGroupItem tag="a" href="#">
                      {" "}
                      <Icofont icon="icofont-instagram" />
                    </ListGroupItem>
                    <ListGroupItem tag="a" href="#">
                      {" "}
                      <Icofont icon="icofont-linkedin" />
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </Col>
              <Col xs="12" sm="6" md="6" lg="3">
                <div className="text-center coman-box team-box">
                  <div className="team-img">
                    <img
                      src={require("./images/team-img4.jpg")}
                      alt=""
                      className="img-fluid rounded-circle"
                    />
                  </div>
                  <h4 className="text-white"> Maxwel Doe </h4>
                  <p className="text-white">
                    When an unknown printer took a galley of type and scrambled
                    it to make a type specimen book
                  </p>
                  <ListGroup className="social-icon-team">
                    <ListGroupItem tag="a" href="#">
                      {" "}
                      <Icofont icon="icofont-facebook" />
                    </ListGroupItem>
                    <ListGroupItem tag="a" href="#">
                      {" "}
                      <Icofont icon="icofont-twitter" />
                    </ListGroupItem>
                    <ListGroupItem tag="a" href="#">
                      {" "}
                      <Icofont icon="icofont-instagram" />
                    </ListGroupItem>
                    <ListGroupItem tag="a" href="#">
                      {" "}
                      <Icofont icon="icofont-linkedin" />
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </Col>
            </Row>
          </Container>
        </div> */}
        {/* Portfolio Section Start*/}
        {/* <div className="section ourportfolio grapping" id="portfolio">
          <Container>
            <div className="title-box">
              <h2>
                Our <b>Portfolio</b>
              </h2>
              <p>
                When an unknown printer took a galley of type and scrambled it
                to make a type specimen book
              </p>
            </div>
            <Tdslightbox></Tdslightbox>
          </Container>
        </div> */}
        {/* Marketing Section Start*/}
        {/* <div className="marketing-section grapping">
          <Container>
            <Row className="align-items-center">
              <Col xs="12" sm="12" md="12" lg="6">
                <div className="marketing-img">
                  <img
                    src={require("./images/digitalmarketing.jpg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </Col>
              <Col xs="12" sm="12" md="12" lg="6">
                <Media className="markrt-box">
                  <Media left href="#">
                    <Icofont icon="icofont-web" />
                  </Media>
                  <Media body>
                    <Media heading>Fully Responsive</Media>
                    Consectetur, adipisci velit, sed quia non numquam eius modi
                    tempora incidunt ut labore aliquam quaerat voluptatem.
                  </Media>
                </Media>
                <Media className="markrt-box">
                  <Media left href="#">
                    <Icofont icon="icofont-chart-pie" />
                  </Media>
                  <Media body>
                    <Media heading>Digital Marketing</Media>
                    Consectetur, adipisci velit, sed quia non numquam eius modi
                    tempora incidunt ut labore aliquam quaerat voluptatem.
                  </Media>
                </Media>
                <Media className="markrt-box">
                  <Media left href="#">
                    <Icofont icon="icofont-brand-designfloat" />
                  </Media>
                  <Media body>
                    <Media heading>Clean & Unique Design</Media>
                    Consectetur, adipisci velit, sed quia non numquam eius modi
                    tempora incidunt ut labore aliquam quaerat voluptatem.
                  </Media>
                </Media>
              </Col>
            </Row>
          </Container>
        </div> */}
        {/* Expert Feadback Section Start */}
        <div className="expertfeesback grapping">
          <Container>
            <div className="title-box">
              <h2>
                <b>Feadback</b> by our customers
              </h2>
            </div>
            <Tdsfeedbackslider></Tdsfeedbackslider>
          </Container>
        </div>
        {/* Our  Pricing Section Start*/}
        {/* <div className="section ourlatest-pricing grapping" id="price">
          <Container>
            <div className="title-box">
              <h2>
                Our Latest <b>Pricing</b>
              </h2>
              <p>
                Dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupti quos dolores
              </p>
            </div>
            <Tdspricingtable></Tdspricingtable>
          </Container>
        </div> */}
        {/*Our Latest News  Section Start*/}
        {/* <div className="section latestnews grapping" id="blog">
          <Container>
            <div className="title-box">
              <h2>
                Our Latest <b>News</b>
              </h2>
              <p>
                Dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupti quos dolores
              </p>
            </div>
            <Row>
              <Col xs="12" sm="12" md="4">
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={require("./images/blog-new1.jpg")}
                    alt="Card image cap"
                  />
                  <Card body>
                    <CardTitle>Dignissimos ducimus qui </CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button color="primary">Read More</Button>
                  </Card>
                </Card>
              </Col>
              <Col xs="12" sm="12" md="4">
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={require("./images/blog-new2.jpg")}
                    alt="Card image cap"
                  />
                  <Card body>
                    <CardTitle>Dignissimos ducimus qui </CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button color="primary">Read More</Button>
                  </Card>
                </Card>
              </Col>
              <Col xs="12" sm="12" md="4">
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={require("./images/blog-new3.jpg")}
                    alt="Card image cap"
                  />
                  <Card body>
                    <CardTitle>Dignissimos ducimus qui</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button color="primary">Read More</Button>
                  </Card>
                </Card>
              </Col>
            </Row>
          </Container>
        </div> */}
        {/* Work With Us  Section Start*/}
        {/* <div className="workwithus grapping">
          <Container>
            <div className="title-box mb-0">
              <h2 className="text-white">
                <b>Want to work with us?</b>
              </h2>
              <p className="text-white mb-4">Lets talk about project</p>
              <Button>Get Started</Button>
            </div>
          </Container>
        </div> */}
        {/* Contact Us Section Start  */}
        <div className="section contactus grapping" id="contact">
          <Container>
            <div className="title-box">
              <h2>
                <b>Get in touch</b>
              </h2>
              <h2 style={{ color: "gray" }}>
                Request a Free Measure and Quote
              </h2>
            </div>
            <Row>
              <Col xs="12" md="12" lg="4">
                <Media className="address-box">
                  <Media left href="#">
                    <Icofont icon="icofont-location-pin" />
                  </Media>
                  <Media body>
                    <Media heading>Address</Media>
                    <p> 10/16 Fuller Road, Ravenhall, VIC-3023</p>
                  </Media>
                </Media>
              </Col>
              <Col xs="12" md="6" lg="4">
                <Media className="address-box">
                  <Media left href="#">
                    <Icofont icon="icofont-mail" />
                  </Media>
                  <Media body>
                    <Media heading>Email</Media>
                    <a href="mailto:info@Soxolo.com">
                      {" "}
                      info@countrygaragedoors.com.au
                    </a>{" "}
                    <br />
                  </Media>
                </Media>
              </Col>
              <Col xs="12" md="6" lg="4">
                <Media className="address-box">
                  <Media left href="#">
                    <Icofont icon="icofont-phone" />
                  </Media>
                  <Media body>
                    <Media heading>Phone</Media>
                    <a href="tel:+44 8888 888"> +61 414 444 406</a> <br />
                  </Media>
                </Media>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col xs="12" md="12" lg="4">
                <h4>Social Links</h4>
                <hr />

                <ListGroup className="social-icon">
                  <ListGroupItem
                    target="_blank"
                    tag="a"
                    href="https://www.facebook.com/Countrygaragedoors-110059001737006/"
                  >
                    {" "}
                    <Icofont icon="icofont-facebook" />
                  </ListGroupItem>
                  {/* <ListGroupItem tag="a" href="#">
                    {" "}
                    <Icofont icon="icofont-twitter" />
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="#">
                    {" "}
                    <Icofont icon="icofont-instagram" />
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="#">
                    {" "}
                    <Icofont icon="icofont-linkedin" />
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="#">
                    {" "}
                    <Icofont icon="icofont-youtube-play" />
                  </ListGroupItem> */}
                </ListGroup>
              </Col>

              <Col xs="12" md="12" lg="8">
                <Mailer />
                {/* <Form className="mt-4">
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Input
                          type="text"
                          name="name"
                          id="examplename"
                          placeholder="Name"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Input
                          type="email"
                          name="email"
                          id="exampleEmail"
                          placeholder="Email"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup>
                    <Input
                      type="textarea"
                      name="address"
                      id="exampleAddress"
                      placeholder="Your message"
                    />
                  </FormGroup>

                  <Button color="primary">Send Message</Button>
                </Form> */}
              </Col>
            </Row>
          </Container>
        </div>
        {/* Footer  Section Start */}
        <div className="">
          <Tdsfooter></Tdsfooter>
        </div>
      </div>
    );
  }
}

export default App;
