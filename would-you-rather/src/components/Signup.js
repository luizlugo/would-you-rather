import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleAddUser } from '../actions/users';

class Signup extends React.Component {
    state = {
        name: '',
        email: '',
        redirect: false,
    };

    onChange = (e) => {
        e.preventDefault();
        const { id, value } = e.target;
        this.setState((_prevState) => ({
            ..._prevState,
            [id]: value
        }));
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log('state:', this.state);
        
        const { dispatch } = this.props;
        const user = this.state;
        dispatch(handleAddUser(user));
        this.setState((_prevState) => ({
            ..._prevState,
            redirect: true
        }));
    }

    render() {

        if (this.state.redirect) {
            return <Redirect to="/login" />
        }
        return (
            <div className="row">
                <div className="offset-md-4 col-md-4">
                    <h2 className="text-center">Fill the data below to create an account for free.</h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" placeholder="Enter your name" id="name" className="form-control" onChange={this.onChange} value={this.state.name} />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Enter your email" id="email" className="form-control" onChange={this.onChange} value={this.state.email} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-outline-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    };
}
export default connect()(Signup);