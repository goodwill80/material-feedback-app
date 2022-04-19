import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import FeedbackRating from '../FeedbackRating/FeedbackRating';
import { useState, useContext, useEffect } from 'react';
import FeedbackButton from './Button';
import { FeedbackContext } from '../../context/FeedbackContext';

function FeedbackForm() {
    const { addFeedback, setRatingChange, feedbackEdited, editFeedback } = useContext(FeedbackContext);
    const [rating, setRating] = useState(0);
    const [textAlert, setAlert] = useState('');
    const [text, setText] = useState('');
    const [btn, setBtnDisabled] = useState(true);

    useEffect(()=>{
        if(feedbackEdited.isEditing === true) {
            setText(feedbackEdited.feedback.text)
            setRatingChange(feedbackEdited.feedback.rating);
            setBtnDisabled(false);
            setRating(feedbackEdited.feedback.rating);
        }
    }, [feedbackEdited])

    const handleChange= (e)=>{
        if(text==='') {
            setBtnDisabled(true);
            setAlert(null);
        } else if (text !== '' && text.trim().length <= 10) {
            setBtnDisabled(true);
            setAlert("Text must be more than 10 characters");
        } else {
            setBtnDisabled(false);
            setAlert("");
        }
        setText(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(feedbackEdited.isEditing && rating > 0) {
            editFeedback(feedbackEdited.feedback.id, text, rating);
            feedbackEdited.isEditing = false;
        } else {
            if(rating > 0) {
                addFeedback(rating, text);
            } else {
                alert("Please enter a rating");
            }
        }

        if(text.trim().length > 10 && rating > 0) {
            setText('');
            setAlert('');
            setBtnDisabled(true);
            setRating(0);
            setRatingChange(0);
        }
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
    <CssBaseline />
    <FeedbackRating
        selectRating={(num)=> setRating(num)}/>
    <Container sx={{display: "flex",  alignItems: "center", width: "50%"}}>
    <TextField 
        sx={{ width: "95%", margin: "15px auto"}}
        required
        margin="normal"
        id="outlined-required"
        label="Required"
        placeholder="Enter your feedback"
        autoFocus
        value={text}
        onChange={handleChange}/>
    <FeedbackButton type={'submit'} btnDisabled={btn}/>
    </Container>
    </form>
    <Typography variant="p" align="center" gutterBottom sx={{color: "red"}}>{textAlert}</Typography>
    </>
  )
}

export default FeedbackForm
