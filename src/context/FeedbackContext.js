import { createContext,useState } from "react";
import {v4 as uuidv4} from 'uuid'
import data from '../data/feedback';
const FeedbackContext=createContext();


export const FeedbackProvider=({children})=>{
    const [feedback,setFeedback]=useState(data);
    const [feedbackEdit,setFeedbackEdit]=useState({
        item:{},
        edit:false
    })
    // edit Feedback
    const editFeedback=(item)=>{
        setFeedbackEdit({
            item,
            edit:true
        })
    }
    // updateFeedback
    const updateFeedback=(id,updItem)=>{
        setFeedback(
            feedback.map((item)=>(item.id ===id ? {...item,...updItem} : item))
        )
    }
    // delete Feedback
    const deleteFeedback=(id)=>{
        if(window.confirm('Are sure delete?')){
          setFeedback(feedback.filter(item=> item.id !== id))
        }
        console.log('App.js',id);
    }

    // add Feedback
    const addFeedBack=(newFeedback)=>{
        // console.log(feedback);
        newFeedback.id=uuidv4;
        setFeedback([ newFeedback ,...feedback]);
      }
    return (
        <FeedbackContext.Provider value={{
            feedback,
            deleteFeedback,
            addFeedBack,
            editFeedback,
            feedbackEdit,
            updateFeedback
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext;