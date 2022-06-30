import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import "./Tdsfooter.css";

class Tdsfooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer>
        <Container>
          <Row className="align-items-center">
            <Col md="6">
              <p>Copyright @2022 Country Garage Doors. All rights reserved</p>
            </Col>
            <Col>
              <ListGroup className="footer-menu">
                <ListGroupItem
                  target="_blank"
                  tag="a"
                  href="https://www.linkedin.com/in/brarjaskaran/"
                >
                  {" "}
                  Designed and Developed by: Jas Brar
                </ListGroupItem>
                {/* <ListGroupItem tag="a" href="#">
                  {" "}
                  Privacy Policy
                </ListGroupItem> */}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Tdsfooter;
