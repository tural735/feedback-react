// import PropTypes from 'prop-types';
import { useContext } from 'react';
import {motion,AnimatePresence} from 'framer-motion'
import FeedBackItem from "./FeedBackItem";
import FeedbackContext from '../context/FeedbackContext';
import Spinner from './shared/Spinner';

function FeedBackList() {
  const {feedback,isLoading}= useContext(FeedbackContext)
  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>Not feedback yet</p>;
  }
  return isLoading ? (<Spinner/>) :(
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) =>(
            <motion.div key={item.id} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity: 0}}>
               <FeedBackItem key={item.id} item={item}/>
            </motion.div>
            )
        )}
      </AnimatePresence>
    </div>
  )
  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item) => {
  //       return <FeedBackItem key={item.id} item={item}  handleDelete={handleDelete}/>;
  //     })}
  //   </div>
  // );
}

// FeedBackList.propTypes={
//    feedback: PropTypes.arrayOf(
//      PropTypes.shape({
//        id: PropTypes.number.isRequired,
//        text: PropTypes.string.isRequired,
//        rating: PropTypes.number.isRequired,
//      })
//    )
// }

export default FeedBackList;
