import React, {PureComponent} from 'react';
import CodeBlock from './CodeBlock';
import AnswerObj from './AnswerObj';
import ChoicesObj from './ChoicesObj';
// import Markdown from 'markdown-to-jsx';

class QuestionObj extends PureComponent{
  
  render () {
    const {id, question, expandAnswer, onClickAnswer} = this.props;

    if (!question) {
      return;
    }

    // const questionJSX = <Markdown>{question}</Markdown>;
    // console.log('questionJSX', questionJSX);

    const qText = question[0];
    const code = question[1];
    const choices = question[2];
    const ans = question[3];

    return (
      <div className="ui segments">
        <div className="ui very padded segment">
          <h4 className="ui header">
            {qText}
          </h4>
          <CodeBlock codeText={code}></CodeBlock>
        </div>

        <div className="ui very padded segment">
          <ChoicesObj id={id} choices={choices}/>
        </div>
        
        <div className="ui styled fluid accordion">
          <AnswerObj ans={ans} expand={expandAnswer} onClickAnswer={onClickAnswer}/>
        </div>
        

      </div>
    ); 
  }
}

export default QuestionObj;