import React from 'react';
import { connect } from 'react-redux';
import PollList from './PollList';

class AnsweredPolls extends React.Component {
    didAuthedUserVotedForOption(_option) {
        const { authedUser } = this.props;
        return (_option.votes && _option.votes.length > 0 && _option.votes.find((_vote) => _vote === authedUser));
    }

    getAnsweredQuestions() {
        const { questions } = this.props;
        return Object.keys(questions).filter((_questionId) => {
            const question = questions[_questionId];
            return (this.didAuthedUserVotedForOption(question.optionOne) || this.didAuthedUserVotedForOption(question.optionTwo));
        });
    }

    render() {
        const answeredQuestions = this.getAnsweredQuestions();

        return (
            <div className="row">
                <div className="col-md-12">
                    <PollList questions={answeredQuestions} />
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({ users, questions, authedUser }) => {
    return {
        users,
        questions,
        authedUser
    }
};
export default connect(mapStateToProps)(AnsweredPolls);