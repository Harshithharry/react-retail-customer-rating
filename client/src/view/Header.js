import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import logo from '../logo.svg';
import SvgIcon from "react-icons-kit";
import { user } from 'react-icons-kit/fa/user';
import { calendar } from 'react-icons-kit/fa/calendar'

const Icon = props => <SvgIcon size={props.size} icon={props.icon} />;

class Header extends Component {

  render() {
    return (
      <header className="header">
        <Container>
          <div className="main-header">
            <Row>
              <Col className="left-header" md="6" sm="6" xs="6">
                <img src={logo} className="App-logo" alt="logo" />
              </Col>
              <Col className="right-header" md="6" sm="6" xs="6">
                <Icon color="white" size="18" icon={user} />
              </Col>
            </Row>
          </div>
          <div className="sub-header">
            <Row>
              <Col><button><Icon color="white" size="18" icon={calendar} /></button></Col>
            </Row>
          </div>

        </Container>
      </header>
    );
  }
}


export default Header;