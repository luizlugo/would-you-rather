import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/authedUser';

class Navbar extends React.Component {
    logout = (_e) => {
        _e.preventDefault();
        const { dispatch } = this.props;
        dispatch(handleLogout());
    }
    render() {
        const { users, authedUser, currentOption, updateOptionSelected } = this.props;
        const currentUser = users[authedUser];
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/dashboard" className="navbar-brand">Would you Rather?</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                { (authedUser) && (
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className={`nav-item ${(currentOption === 'dashboard' ? 'active' : '')}`}>
                                <Link to="/dashboard" className="nav-link" onClick={() => updateOptionSelected('dashboard')}>Dashboard</Link>
                            </li>
                            <li className={`nav-item ${(currentOption === 'leaderboard' ? 'active' : '')}`}>
                                <Link to="/leaderboard" className="nav-link" onClick={() => updateOptionSelected('leaderboard')}>Leaderboard</Link>
                            </li>
                            <li className={`nav-item ${(currentOption === 'add' ? 'active' : '')}`}>
                                <Link to="/add" className="nav-link" onClick={() =>  updateOptionSelected('add')}>New Question</Link>
                            </li>
                        </ul>
                        <span className="navbar-text navbar__user-name">
                            Welcome back, <b>{currentUser.name}</b>
                        </span>
                        <form className="form-inline" onSubmit={this.logout}>
                            <button className="btn btn-sm btn-outline-dark">Logout</button>
                        </form>
                    </div>
                )}
            </nav>
        )
    }
}
const mapStateToProps = ({authedUser, users}) => {
    return {
        authedUser,
        users
    };
}
export default connect(mapStateToProps)(Navbar);