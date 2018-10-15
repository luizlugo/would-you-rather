import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends React.Component {
    render() {
        const { authedUser } = this.props;
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/dashboard" className="navbar-brand">Would you Rather?</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                { (authedUser) && (
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/board" className="nav-link">Leaderboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/add" className="nav-link">New Question</Link>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        )
    }
}
const mapStateToProps = ({authedUser}) => {
    return {
        authedUser
    };
}
export default connect(mapStateToProps)(Navbar);