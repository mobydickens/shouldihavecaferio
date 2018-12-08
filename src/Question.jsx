import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header.jsx';

class Question extends Component {

  constructor() {
    super();
    this.state = {
      question: '',
      yesClick: false,
      noClick: false,
    }
  }
  //get ONE question
  componentDidMount() {
    this.getNewQuestion();
  }

  getNewQuestion = () => {
    axios
      .get('/api/question')
      .then(res => {
        this.setState({
          question: res.data
        })
    })
  }

  // Handle YES answer to question
  handleClickYes = () => {
    if(this.state.yesClick) {
      this.setState({
        yesClick: false
      })
    } else {
      this.setState({
        yesClick: true
      })
    }
  }
  // Handle NO answer to question
  handleClickNo = () => {
    if(this.state.noClick) {
      this.setState({
        noClick: false
      })
    } else {
      this.setState({
        noClick: true
      })
    }
  }

	render() {
    console.log(this.state)
		return(
      <div>
        <Header />
        <div className='main'>
          <h1>Should I have Cafe Rio?</h1>
          { !this.state.yesClick && !this.state.noClick ? this.state.question.question : '' } 
          <br/>
          { !this.state.yesClick && !this.state.noClick ? <button className='btn' onClick={ () => this.handleClickYes() }>Yes</button> : '' }
          { this.state.yesClick ? <div>{this.state.question.answerYes}</div> : '' }
          { !this.state.noClick && !this.state.yesClick ? <button className='btn' onClick={ () => this.handleClickNo()}>No</button> : ''}
          { this.state.noClick ? <div>{this.state.question.answerNo}</div> : '' } 
          <br/>
          <button onClick={() => window.location='https://www.caferio.com/'}>Take me to Cafe Rio</button>
        </div>
      </div>
	)}
}

export default Question;