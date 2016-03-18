import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setCurrentTopic, assignDate, updateDescription, assignTopic } from '../actions';
import C from '../constants';
import DatePicker from 'react-datepicker';
import AssignMe from './components/assignMe';
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

  onAssign(){
    let {auth} = this.props;
    if( auth.currently != C.LOGGED_IN){
      alert('You must be logged in to teach');
      return;
    }
    this.props.assignTopic(this.props.params.id, auth);
  }

  onUnassign(){
    let {auth} = this.props;
    if( auth.currently != C.LOGGED_IN){
      alert('You must be logged in to make this change');
      return;
    }
    this.props.assignTopic(this.props.params.id, {});
    this.props.assignDate(this.props.params.id, {});
  }

  render(){
    let canEdit = false;
    const { topic } = this.props;
    if(!topic) {
      return (
        <div>Loading...</div>
      );
    }

    if(topic.speaker && topic.speaker.uid === this.props.auth.uid){
      canEdit = true;
    }

    let speakerOrAssign = topic.speaker?  topic.speaker.username : <AssignMe onAssign={this.onAssign.bind(this)} />;


    let textArea;
    const selectedDate = topic.date ? moment(topic.date, 'X') : null;
    let editorPrivilege = null;
    if(canEdit){
      editorPrivilege = (
      <div>
        <button
          className="btn btn-primary"
          onClick={this.onUnassign.bind(this)}>Unnassign Me
      </button>
      <DatePicker
        minDate={moment()}
        selected={selectedDate}
        filterDate={this.isFriday}
        onChange={(date) => this.props.assignDate(topic.id, date.unix())}
        placeholderText="Select a Day to Teach"
      />
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
    return (
      <div>
        <h2>{topic.title}</h2>
        <h5>Speaker: {speakerOrAssign}</h5>
        {selectedDate ? selectedDate.format("MMM Do YY") : 'Not Yet Scheduled' }
        {editorPrivilege || <p>{topic.description || ''}</p>}

      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    topic: state.currentTopic,
    auth: state.auth
  };
};


export default connect(mapStateToProps, { setCurrentTopic, assignDate, updateDescription, assignTopic })(TopicDetail);
