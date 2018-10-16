import React from 'react';
import { connect } from 'react-redux';

class PollForm extends React.Component {
    state = {
        optionOne: '',
        optionTwo: ''
    }

    onChange = (e) => {
        const { value, id } = e.target;
        
        this.setState((_prevState) => ({
            ..._prevState,
            [id]: value
        }));
    }

    render() {
        const { author } = this.props;
        return (
            <div className="row poll-view">
                <div className="offset-md-3 col-md-6">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="text-center">Would you Rather?</h4>
                        </div>
                    </div>

                    <div className="row poll-options-container">
                        <div className="col-md-5 poll-option">
                            <textarea placeholder="Enter Option One" className="form-control" value={this.state.optionOne} id="optionOne" onChange={this.onChange}></textarea>
                        </div>
                        <div className="col-md-2 user-avatar-container">
                            <img className="user-avatar" src={author.avatarURL} alt={`${author.name}'s avatar`} />
                        </div>
                        <div className="col-md-5 poll-option">
                            <textarea placeholder="Enter Option Two" className="form-control" value={this.state.optionTwo} id="optionTwo" onChange={this.onChange}></textarea>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <button className="btn btn-lg btn-primary" disabled={(this.state.optionOne === '' || this.state.optionTwo === '')}>SAVE</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({ authedUser, users }) => {
    return {
        author: users[authedUser]
    }
};
export default connect(mapStateToProps)(PollForm);
