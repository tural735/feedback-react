import { createContext,useState,useEffect } from "react";
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
        const response= await fetch(`/feedback?_sort=id&_order=desc`);
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
    const updateFeedback= async (id,updItem)=>{
        const response= await fetch(`/feedback/${id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(updItem)
        })
        const data= await response.json();
        setFeedback(
            feedback.map((item)=>(item.id ===id ? {...item,...data} : item))
        )
    }
    // delete Feedback
    const deleteFeedback= async (id)=>{
        if(window.confirm('Are sure delete?')){
            await fetch(`/feedback/${id}`,{method: 'DELETE'})
          setFeedback(feedback.filter(item=> item.id !== id))
        }
        console.log('App.js',id);
    }

    // add Feedback
    const addFeedBack= async (newFeedback)=>{
        const response= await fetch(`/feedback`,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(newFeedback)
        })
        const data=await response.json()
        // console.log(feedback);
        setFeedback([ data ,...feedback]);
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