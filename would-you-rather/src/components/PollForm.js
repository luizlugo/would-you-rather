import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';

class PollForm extends React.Component {
    state = {
        optionOneText: '',
        optionTwoText: '',
        author: this.props.authedUser,
        redirect: false
    }

    onChange = (e) => {
        const { value, id } = e.target;
        
        this.setState((_prevState) => ({
            ..._prevState,
            [id]: value
        }));
    }

    onSubmitForm = (e) => {
        const { dispatch } = this.props;
        const { optionOneText, optionTwoText, author } = this.state;
        const question = {
            optionOneText,
            optionTwoText,
            author
        };
        dispatch(handleAddQuestion(question));
        this.setState((_prevState) => ({
            ..._prevState,
            redirect: true
        }));
    }

    render() {
        const { author } = this.props;
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to="/" />
        }
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
                            <textarea placeholder="Enter Option One" className="form-control" value={this.state.optionOneText} id="optionOneText" onChange={this.onChange}></textarea>
                        </div>
                        <div className="col-md-2 user-avatar-container">
                            <img className="user-avatar" src={author.avatarURL} alt={`${author.name}'s avatar`} />
                        </div>
                        <div className="col-md-5 poll-option">
                            <textarea placeholder="Enter Option Two" className="form-control" value={this.state.optionTwoText} id="optionTwoText" onChange={this.onChange}></textarea>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <button className="btn btn-lg btn-primary" disabled={(this.state.optionOneText === '' || this.state.optionTwoText === '')} onClick={this.onSubmitForm}>SAVE</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({ authedUser, users }) => {
    return {
        author: users[authedUser],
        authedUser
    }
};
export default connect(mapStateToProps)(PollForm);
