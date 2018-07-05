import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage } from '../actions';

class MessageForm extends Component {


  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createMessage(this.props.selectedChannel, this.props.currentUser, this.state.value);
    this.setState({value: ''});
  }

  componentDidMount() {
    this.messageBox.focus();
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} className='custom-form-inline'>
        <input className='input-inline' ref={(input) => { this.messageBox = input; }} type="text" value={this.state.value} onChange={this.handleChange}/>
        <input className='btn-inline' type="submit" value="Send" />
      </form>
    );
  }
}

function mapStateToProps(state) {
 return {
  selectedChannel: state.selectedChannel,
  currentUser: state.currentUser
 };
}

function mapDispatchToProps(dispatch) {
 return bindActionCreators(
 { createMessage: createMessage },
 dispatch
 );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
