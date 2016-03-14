import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setCurrentTopic, assignDate } from '../actions';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import styles from 'react-datepicker/dist/react-datepicker.css';

class TopicDetail extends Component {
  componentWillMount(){
    this.props.setCurrentTopic(this.props.params.id);
  }

  handleDateChange(e){
    console.log(this.props.topic);
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
    const selectedDate = topic.date ? moment(topic.date, 'X') : null;
    return (
      <div>
        <h2>{topic.title}</h2>
        <h5>{topic.speaker}</h5>
        <DatePicker
          minDate={moment()}
          selected={selectedDate}
          filterDate={this.isFriday}
          onChange={(date) => this.props.assignDate(topic.id, date.unix())}
          placeholderText="Select a Day to Teach" />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    topic: state.currentTopic
  };
};


export default connect(mapStateToProps, { setCurrentTopic, assignDate })(TopicDetail);
