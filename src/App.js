import { useState } from "react";
import {BrowserRouter as Router,NavLink,Route,Routes} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import AboutIconLink from "./components/AboutIconLink";
import FeedBackForm from "./components/FeedBackForm";
import FeedBackList from "./components/FeedBackList";
import FeedBackStats from "./components/FeedBackStats";
import Header from "./components/Header";
import Post from "./components/Post";
import Card from "./components/shared/Card";
import FeedbackData from "./data/feedback";
import AboutPage from "./pages/AboutPage";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback=(id)=>{
      if(window.confirm('Are sure delete?')){
        setFeedback(feedback.filter(item=> item.id !== id))
      }
      console.log('App.js',id);
  }
  const addFeedBack=(newFeedback)=>{
    // console.log(feedback);
    newFeedback.id=uuidv4;
    setFeedback([ newFeedback ,...feedback]);
  }
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={
              <>
                <FeedBackForm handleAdd={addFeedBack}/>
                <FeedBackStats feedback={feedback}/>
                <FeedBackList feedback={feedback}  handleDelete={deleteFeedback}/>
              </>
          }/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/post/:id" element={<Post/>}></Route>
        </Routes>
        <Card>
          <NavLink to="/" acticeClassName="actve">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </Card>
        <AboutIconLink/>
      </div>
    </Router>
  );
}

export default App;
