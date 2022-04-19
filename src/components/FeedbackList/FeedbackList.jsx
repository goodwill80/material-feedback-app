import { useContext } from 'react';
import FeedbackItem from '../FeedbackItem/FeedbackItem';
import { FeedbackContext } from '../../context/FeedbackContext';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import useStyles from './styles';


function FeedbackList() {
    const {feedbacks, clearAll} = useContext(FeedbackContext);
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
    <Stack sx={{ width: '50%', padding: "20px" }} spacing={2} className={ classes.stack }>
        {listItems}
        <Button onClick={()=> clearAll()} variant="outlined" startIcon={<DeleteIcon />}>
        Delete All
        </Button>
    </Stack>
      
    </div>
  )
}

export default FeedbackList
