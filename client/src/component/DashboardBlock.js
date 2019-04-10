import React from 'react'
import { connect } from 'react-redux';
import { Progress, Col } from 'reactstrap';


let DashboardBlock = ({ data, loading }) => {
    let measures = "";

    if (data) {
        measures = data.map((values) =>
            (
                <Col key={values.$id} className="blockss" md="4" sm="6" xs="12">
                    <div className="dashboard-block">
                        <h5>{values.caption}</h5>
                        <Progress color={values.cells[0].value <= 5 ? 'bgred' : values.cells[0].value <= 7 ? 'bgamber' : 'bggreen'} value={parseInt((values.cells[0].value / 9) * 100)} />
                        <p><span>{values.cells[0].value}</span> out of 9</p>
                    </div>
                </Col>
            )
        )
    }
    if (loading) {
        measures =
            <div>
                <div className="loader"></div>
            </div>
    }
    return (
        <div>
            {measures}
        </div>
    );
};

const mapStateToProps = (state) => ({
    data: state.dashboardReducer.json,
    loading: state.dashboardReducer.loading
})

DashboardBlock = connect(
    mapStateToProps,
    null
)(DashboardBlock)

export default DashboardBlock;