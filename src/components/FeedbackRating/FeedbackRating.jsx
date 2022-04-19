import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { FeedbackContext } from '../../context/FeedbackContext';


function FeedbackRating(props) {
    const { ratingChange, setRatingChange } = useContext(FeedbackContext)
  
    const handleChange = (e)=>{
        setRatingChange(parseInt(e.target.value));
        props.selectRating(parseInt(e.target.value));
    }

  return (
    <Box sx={{display:"flex", flexDirection:"column", justifyContent: "center", alignItems: "center"}}>
    <Typography component="legend" align="center">Please provide your rating</Typography>
    <Rating onChange={ handleChange } name="customized-10" max={10} value={ratingChange}/>
    </Box>
 
  )
}

export default FeedbackRating
