import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
// import { dispatch } from 'react-redux';
import { Container } from 'reactstrap';

import { Row } from 'reactstrap';
import '../App.css';
import { fetchData } from '../actions/DashboardAction'
import DashboardBlock from '../component/DashboardBlock';


class Dashboard extends Component {

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div className="dashboard">
             <div className="dashboard-container">
        <Container>
          <Row>
              <DashboardBlock />
          </Row>
        </Container>
      </div>
      </div>

    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     fetchData: () => dispatch(fetchData())
//   }
// };

// After adding bindActionCreator, simplified verion 
function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchData}, dispatch)
};



export default connect(null, mapDispatchToProps)(Dashboard);