import { useContext, useEffect, useState } from "react"
import FeedbackContext from "../context/FeedbackContext";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card"

function FeedBackForm() {
    const [text,setText]=useState('');
    const [rating,setRating]=useState(10);
    const [btnDisabled,setBtnDisabled]=useState(true);
    const [message,setMessage]=useState('');
    const {addFeedBack,feedbackEdit,updateFeedback}= useContext(FeedbackContext);

    useEffect(()=>{
        if(feedbackEdit.edit === true){
            setBtnDisabled(false);
            setText(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rating);
        }
    },[feedbackEdit]);
    const handleTextChange=(e)=>{
        let valueText=e.target.value;
        setText(valueText);
        if(text === ''){
            setBtnDisabled(true);
            setMessage('')
        }else if( text !== '' && text.trim().length <= 10){
            setBtnDisabled(true);
            setMessage('Text must be at least 10 chracters');
        }else{
            setBtnDisabled(false);
            setMessage(null);
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(text.trim().length > 10){
            const newFeedBack={
                text:text,
                rating:rating
            }
            // 
            if(feedbackEdit.edit){
                updateFeedback(feedbackEdit.item.id,newFeedBack);
            }else{
                // console.log(newFeedBack);
                addFeedBack(newFeedBack);
            }
            setText('')
        }
    }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h1>How would you rate your service with us?</h1>
                {/* @todo - rating select component */}
                <RatingSelect select={(rating)=>setRating(rating)}/>
                <div className="input-group">
                    <input onChange={handleTextChange} value={text} type="text" placeholder="Write a review"/>
                    {/* <button type="submit">Send</button> */}
                    <Button type="submit" isDisabled={btnDisabled} >Send</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    )
}

export default FeedBackForm
