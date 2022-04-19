import { useState, createContext, useEffect } from 'react';
import initialFeedbacks from './TestData';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();
const initial = JSON.parse(window.localStorage.getItem("feedback")) || [];

function FeedbackContextProvider(props) {
  const [feedbacks, setFeedbacks] = useState(initial);
  //Handle Change in Rating - to enable rating to switch back to 0 in global state after submitting a feedback
  const [ratingChange, setRatingChange] = useState(0);
  const [feedbackEdited, setfeedbackEdited] = useState({
    feedback: {},
    isEditing: false
  })

  useEffect(()=>{
    window.localStorage.setItem("feedback", JSON.stringify(feedbacks))
  }, [feedbacks])

  //Clear Local Storage
  const clearAll = ()=> {
    window.localStorage.clear();
    setFeedbacks([]);
  }

  //Add a Feedback
  const addFeedback = (rating, text)=>{
    setFeedbacks([...feedbacks, {id: uuidv4(), text: text, rating: rating}])
  }

  //Edit a Feedback
  const editFeedback = (id, text, rating)=>{
    setFeedbacks(feedbacks.map(feedback=>(
      feedback.id === id ? {...feedback, text: text, rating: rating} : feedback
    )))
  }

  //Settint of Edit state on form prior to edit
  const changeEditingState = (item)=>{
    setfeedbackEdited({
      feedback: item,
      isEditing: true
    })
  }

  //Delete a Feedback
  const deleteFeedback = (id)=>{
    setFeedbacks(feedbacks.filter(feedback=>(
      feedback.id !== id
    )))
  }

  return (
    <FeedbackContext.Provider value={{feedbacks, 
                                      setFeedbacks, 
                                      deleteFeedback, 
                                      addFeedback, 
                                      ratingChange, 
                                      setRatingChange,
                                      feedbackEdited,
                                      changeEditingState, 
                                      editFeedback,
                                      clearAll}}>
        {props.children}
    </FeedbackContext.Provider>
  )
}

export { FeedbackContext, FeedbackContextProvider }
