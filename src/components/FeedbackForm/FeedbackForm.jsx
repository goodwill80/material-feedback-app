import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import FeedbackRating from '../FeedbackRating/FeedbackRating';
import { useState, useContext } from 'react';
import FeedbackButton from './Button';
import { FeedbackContext } from '../../context/FeedbackContext';

function FeedbackForm() {
    const { addFeedback } = useContext(FeedbackContext);
    const [rating, setRating] = useState(0);
    const [textAlert, setAlert] = useState('')
    const [text, setText] = useState('');
    const [btn, setBtnDisabled] = useState(true)

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
        if(rating <= 0) {
            alert("Please enter a rating")
        } else {
            addFeedback(rating, text);
            setText('');
            setBtnDisabled(true);
            setRating(0)
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
