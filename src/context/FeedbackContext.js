import { createContext,useState,useEffect } from "react";
import {v4 as uuidv4} from 'uuid'
// import data from '../data/feedback';
const FeedbackContext=createContext();


export const FeedbackProvider=({children})=>{
    const [isLoading,setIsLoading]=useState(true);
    const [feedback,setFeedback]=useState([]);
    const [feedbackEdit,setFeedbackEdit]=useState({
        item:{},
        edit:false
    })

    useEffect(()=>{
        fetchFeedback();
    },[])

    const fetchFeedback= async()=>{
        const response= await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`);
        const data= await response.json();
        setFeedback(data);
        setIsLoading(false);
    }
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
            updateFeedback,
            isLoading
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext;