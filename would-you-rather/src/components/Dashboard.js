import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Navbar from './Navbar';

class Dashboard extends React.Component {
    render() {
        const { authedUser } = this.props;

        if (!authedUser) {
            return <Redirect to="/login" />
        }

        return (
            <div className="dashboard">
                <Navbar />
            </div>
        )
    }
}
export default connect(({ authedUser }) => {
    return {
        authedUser
    }
})(Dashboard);