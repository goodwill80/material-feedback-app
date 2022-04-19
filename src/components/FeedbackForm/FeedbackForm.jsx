import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

function FeedbackForm() {
  return (
    <>
    <CssBaseline />
    <TextField 
        sx={{ width: "50%", margin: "15px auto"}}
        required
        margin="normal"
        id="outlined-required"
        label="Required"
        placeholder="Enter your feedback"
        autoFocus/>
    </>
  )
}

export default FeedbackForm
