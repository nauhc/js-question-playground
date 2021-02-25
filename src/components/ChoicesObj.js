import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const ChoicesObj = ({id, choices}) => {

  const choiceItem = choices.map((choice, i) => {
    return (
      <ListItem key={`q${id}-choice${i}`}>
        <ListItemText primary={choice} />
      </ListItem>)
  })

  return (
    <List component="nav" aria-label="secondary mailbox folders">
      {choiceItem}
    </List>
  )
}

export default ChoicesObj;