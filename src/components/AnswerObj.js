import React, {useState} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const AnswerObj = ({ans, expand, onClickAnswer}) => {

  const correctChoice = ans[0];
  const explaination = ans.slice(2);

  return (
    <Accordion expanded={expand} onChange={onClickAnswer}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="content"
        id="header"
      >
        <Typography>{' Answer'}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <h4>{correctChoice}</h4>
          <div>{explaination}</div>
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}

export default AnswerObj;