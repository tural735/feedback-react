// import { useState } from "react";
import {BrowserRouter as Router,NavLink,Route,Routes} from 'react-router-dom'
import AboutIconLink from "./components/AboutIconLink";
import FeedBackForm from "./components/FeedBackForm";
import FeedBackList from "./components/FeedBackList";
import FeedBackStats from "./components/FeedBackStats";
import Header from "./components/Header";
import Post from "./components/Post";
import Card from "./components/shared/Card";
import { FeedbackProvider } from "./context/FeedbackContext";
// import FeedbackData from "./data/feedback";
import AboutPage from "./pages/AboutPage";

function App() {
  // const [feedback, setFeedback] = useState(FeedbackData);
  
  return (
    <FeedbackProvider>
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={
              <>
                <FeedBackForm/>
                <FeedBackStats/>
                <FeedBackList/>
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
    </FeedbackProvider>
  );
}

export default App;
