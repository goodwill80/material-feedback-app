import { useState, createContext } from 'react';
import initialFeedbacks from './TestData';
const FeedbackContext = createContext();

function FeedbackContextProvider(props) {
  const [feedbacks, setFeedbacks] = useState(initialFeedbacks)

  //Delete a Feedback
  const deleteFeedback = (id)=>{
    setFeedbacks(feedbacks.filter(feedback=>(
      feedback.id !== id
    )))
  }

  return (
    <FeedbackContext.Provider value={{feedbacks, setFeedbacks, deleteFeedback}}>
        {props.children}
    </FeedbackContext.Provider>
  )
}

export { FeedbackContext, FeedbackContextProvider }
