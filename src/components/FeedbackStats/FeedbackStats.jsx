import {Alert, Container } from '@mui/material';
import { useContext } from 'react';
import { FeedbackContext } from '../../context/FeedbackContext';

function FeedbackStats() {

    const { feedbacks } = useContext(FeedbackContext);
    const avgRating = (feedbacks.reduce((state, feedback)=>(
        state + feedback.rating
    ), 0) / feedbacks.length).toFixed(0);
   

  return (
    <Container sx={{display: "flex", justifyContent: "center", width: "100%"}}>
    <Alert sx={{marginRight: "80px"}} severity="info">Number of Reviews: { feedbacks.length }</Alert>
    <Alert severity="warning">Average Rating: { avgRating }</Alert>
    </Container>
  )
}

export default FeedbackStats
