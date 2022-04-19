import Alert from '@mui/material/Alert';
import StarRateIcon from '@mui/icons-material/StarRate';
import Divider from '@mui/material/Divider';
import { Container } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useContext } from 'react';
import { FeedbackContext } from '../../context/FeedbackContext';


function FeedbackItem(props) {

    const { deleteFeedback } = useContext(FeedbackContext);

   const stars = (num)=>{
        let arr = Array.from({length: num});
        let createStars = arr.map((star, index)=>(
            <StarRateIcon 
            key={index}
            color="primary"
            sx={{ marginTop: "5px"}}>
            </StarRateIcon>
        ))
        return createStars
    }

  return (
    <>
    <Alert severity="success" sx={{position: "relative", padding: "15px", height: "140px", fontSize: "16px", marginTop:"15px"}}>
        { props.feedback }
        <DeleteForeverIcon color="secondary" 
                           fontSize="medium" 
                           sx={{position: "absolute", 
                                right:"10px", 
                                marginRight:"10px", 
                                bottom:"10px",
                                cursor: "pointer"}}
                            onClick={()=>deleteFeedback(props.id)}
                            />
    <Container maxWidth="md" sx={{ marginTop: "20px", marginLeft: "-30px", width: "150%"}}>
    { stars(props.rating) }
    </Container>
    </Alert>
    <Divider/>
    </>
  )
}

export default FeedbackItem
