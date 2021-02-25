import React from 'react';
import DATA from '../data/js-questions.json';
import QuestionObj from './QuestionObj';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';

class App extends React.Component{

  state = {
    questions: [],
    viewedQuestions: [],
    id: 0,
    expandAnswer: false
  }

  componentDidMount = () => {
    this.setState({questions: DATA});
  }

  onQuerySubmit = () => {
    const {questions, viewedQuestions} = this.state;
    if (!questions || !questions.length) {
      return;
    }

    let randomId = Math.floor(Math.random() * questions.length);
    while (randomId in viewedQuestions) {
      randomId = Math.floor(Math.random() * questions.length);
    }
    
    this.setState({
      id: randomId,
      viewedQuestions: [...viewedQuestions, randomId],
      expandAnswer: false
    })
  }

  onClickAnswer = () => {
    const {expandAnswer} = this.state;
    this.setState({
      expandAnswer: !expandAnswer
    })
  }




  render() {
    const {questions, id, viewedQuestions, expandAnswer} = this.state;
    if (!questions || !questions.length) {
      return <div> Loading Questions ... </div>;
    }

    return (
      <div className="ui container">

        <CssBaseline />


        <Container maxWidth="md">
        <div class="ui info message">
          <i class="close icon"></i>
          <div class="header">
            This playground is created for you to practice JS questions. You may not right code like this, but the questions test the basic understanding of javascript.
            Have fun!
          </div>
        </div>

          <h1 className="ui header">JS Playground</h1>
          <h4 className="ui horizontal divider header">
            <i className="tag icon"></i>
            Question
          </h4>

          <Button variant="contained" color="primary" 
          onClick={this.onQuerySubmit}>Change Question</Button>

          <QuestionObj 
            id={id} 
            question={questions[id]} 
            expandAnswer={expandAnswer}
            onClickAnswer={this.onClickAnswer}
          />

          <h4 className="ui horizontal divider header">
            <i className="bar chart icon"></i>
            Numbers
          </h4>
          <div>{viewedQuestions.length ? `You have done: ${viewedQuestions.length} / ${questions.length} questions!` : `Total number of questions: ${questions.length}`}</div>

        </Container>
        
        
        
      </div>
    );
  }

  
}


export default App;