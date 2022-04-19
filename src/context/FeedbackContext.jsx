import { useState, createContext } from 'react';
import initialFeedbacks from './TestData';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();


function FeedbackContextProvider(props) {
  const [feedbacks, setFeedbacks] = useState(initialFeedbacks)

  //Add a Feedback
  const addFeedback = (rating, text)=>{
    setFeedbacks([...feedbacks, {id: uuidv4(), text: text, rating: rating}])
  }

  //Delete a Feedback
  const deleteFeedback = (id)=>{
    setFeedbacks(feedbacks.filter(feedback=>(
      feedback.id !== id
    )))
  }

  return (
    <FeedbackContext.Provider value={{feedbacks, setFeedbacks, deleteFeedback, addFeedback}}>
        {props.children}
    </FeedbackContext.Provider>
  )
}

export { FeedbackContext, FeedbackContextProvider }
