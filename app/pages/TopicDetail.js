import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setCurrentTopic, assignDate, updateDescription } from '../actions';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import styles from 'react-datepicker/dist/react-datepicker.css';

class TopicDetail extends Component {
  componentWillMount(){
    this.props.setCurrentTopic(this.props.params.id);
  }

  handleDescriptionChange(description){
    this.props.updateDescription(this.props.params.id, description);
  }

  isFriday(date) {
	    var day = date.day();
	    return day == 5;
	}

  render(){

    const { topic } = this.props;
    if(!topic) {
      return (
        <div>Loading...</div>
      );
    }

    let textArea;
    const selectedDate = topic.date ? moment(topic.date, 'X') : null;
    return (
      <div>
        <h2>{topic.title}</h2>
        <h5>Speaker: {topic.speaker}</h5>
        <DatePicker
          minDate={moment()}
          selected={selectedDate}
          filterDate={this.isFriday}
          onChange={(date) => this.props.assignDate(topic.id, date.unix())}
          placeholderText="Select a Day to Teach" />
        <div className="form-group">
          <label>Description:</label>
          <textarea
          className="form-control"
          ref={(input) => textArea = input}
          value={topic.description}
          onChange={() => this.handleDescriptionChange(textArea.value)} />
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    topic: state.currentTopic
  };
};


export default connect(mapStateToProps, { setCurrentTopic, assignDate, updateDescription })(TopicDetail);
