import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import FeedbackRating from '../FeedbackRating/FeedbackRating';
import { useState, useContext } from 'react';
import FeedbackButton from './Button';

function FeedbackForm() {
    const [rating, setRating] = useState(0);
    const [text, setText] = useState('');

    const handleChange= (e)=>{
        setText(e.target.value);
    }

  return (
    <>
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
    <FeedbackButton />
    </Container>
    </>
  )
}

export default FeedbackForm
