import FeedbackRating from "./components/FeedbackRating/FeedbackRating";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";
import FeedbackStats from "./components/FeedbackStats/FeedbackStats";
import FeedbackList from "./components/FeedbackList/FeedbackList";
import { FeedbackContextProvider } from "./context/FeedbackContext";
import {Typography, CssBaseline, Container } from '@mui/material';

function App() {
  return (
   <>
    <FeedbackContextProvider>
    <CssBaseline />
    <Container sx={{ display: "flex", flexDirection: "column", justifyContent: "center"}}>
    <Typography variant="h4" align="center" gutterBottom sx={{marginTop: "15px"}}>
        Feedback App with Material and Hook
      </Typography>
      <FeedbackRating/>
      <FeedbackForm/>
      <FeedbackStats/>
      <FeedbackList/>
    </Container>
      </FeedbackContextProvider>
    </>
  );
}

export default App;
