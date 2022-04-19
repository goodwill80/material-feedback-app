import { useContext } from 'react';
import FeedbackItem from '../FeedbackItem/FeedbackItem';
import { FeedbackContext } from '../../context/FeedbackContext';
import Stack from '@mui/material/Stack';
import useStyles from './styles';


function FeedbackList() {
    const {feedbacks} = useContext(FeedbackContext);
    const classes = useStyles();


    const listItems = feedbacks.map(feedback=>(
        <FeedbackItem 
            key={ feedback.id }
            feedback={ feedback.text }
            rating={ feedback.rating }
            id={ feedback.id }
            item={feedback}
        />
    ))

  return (
    <div>
    <Stack sx={{ width: '50%' }} spacing={2} className={ classes.stack }>
        {listItems}
    </Stack>
      
    </div>
  )
}

export default FeedbackList
