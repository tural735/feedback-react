import Card from "./shared/Card";
import {FaTimes} from 'react-icons/fa';
import PropTypes from "prop-types";
function FeedBackItem({ item,handleDelete }) {
  
  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <button onClick={()=>handleDelete(item.id)} className="close">
        <FaTimes color="purple"/>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedBackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedBackItem;
