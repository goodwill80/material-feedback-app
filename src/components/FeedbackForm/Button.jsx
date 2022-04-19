import Button from '@mui/material/Button';

function FeedbackButton(props) {
  return (
      <>
      <Button variant="contained" disabled={props.btnDisabled} type="submit" sx={{padding:"15px", marginLeft: "5px", width: "30%"}}>Send</Button>
      </>
    
  )
}

export default FeedbackButton
