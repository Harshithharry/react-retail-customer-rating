import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SvgIcon from "react-icons-kit";
import { heartbeat } from 'react-icons-kit/fa/heartbeat';
import { trophy } from 'react-icons-kit/icomoon/trophy';
import { ic_notifications_active } from 'react-icons-kit/md/ic_notifications_active';

const Icon = props => <SvgIcon size={props.size} icon={props.icon} />;

class Footer extends Component {

  render() {
    return (
      <footer className="footer">
        <Container>
          <div className="footer-wrapper">
            <Row>
              <Col className="left-footer" md="4" sm="6" xs="6">
                <div className="footer-icon">
                  <Icon color="white" size="20" icon={heartbeat} />
                </div>
                <div className="footer-label">Pulse</div>
              </Col>
              <Col className="middle-footer" md="4" sm="6" xs="6">
                <div className="footer-icon">
                  <Icon color="white" size="20" icon={trophy} />
                </div>
                <div className="footer-label">Leaderboard</div>
              </Col>
              <Col className="right-footer" md="4" sm="6" xs="6">
                <div className="footer-icon">
                  <Icon color="white" size="20" icon={ic_notifications_active} />
                </div>
                <div className="footer-label">Notifications</div>
              </Col>
            </Row>
          </div>
        </Container>
      </footer>
    );
  }
}


export default Footer;