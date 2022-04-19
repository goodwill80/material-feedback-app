import {Alert, Container } from '@mui/material';
import { useContext } from 'react';
import { FeedbackContext } from '../../context/FeedbackContext';

function FeedbackStats() {

    const { feedbacks } = useContext(FeedbackContext);



  return (
    <Container sx={{display: "flex", justifyContent: "center", width: "100%"}}>
    <Alert sx={{marginRight: "80px"}} severity="info">Number of Reviews: { feedbacks.length }</Alert>
    <Alert severity="warning">Average Rating: 10</Alert>
    </Container>
  )
}

export default FeedbackStats
