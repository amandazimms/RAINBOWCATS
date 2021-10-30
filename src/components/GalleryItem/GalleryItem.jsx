import {useState} from "react";
import axios from 'axios';

function GalleryItem(props){
  //const [name, setName]=useState(null);
  const [show, setShow]=useState(true);
  const [liked, setLiked]=useState(false);

  const toggleShow = () => {
    setShow(!show);
  }

  const toggleLiked = () => {
    if (!liked){ //if it wasn't yet liked, they click to Like it
      liked;
      addLike();
    } else { //if it was already liked, unlike it
      //todo add support for removing a like
    }
  }

  const addLike=()=>{
    axios.put( `/gallery/like/${props.cat.id}`, props.cat ).then( (response)=>{
      console.log('response back from axios.put:', response.data);
      props.getCats();
    }).catch((err)=>{
      console.log('error:', err);
    });
  }

  return(
    <div>
      { 
        // if show is toggled, display image. Otherwise, display description
        show ? 
        <img onClick={toggleShow} src={props.cat.path} alt={props.cat.description} />:
        <h3 onClick={toggleShow}>{props.cat.description}</h3>
      }
      {
        // if pic is already loved, render title as 'un-love'. Otherwise, render as 'love'
        liked ?
        <button onClick={toggleLiked}>un-love it</button> :
        <button onClick={toggleLiked}>love it!</button> 
      }
      {
        //if someone has liked it, display happy message with count, otherwise, sad 'no people' message
        props.cat.likes > 0 ?
        <h3>{props.cat.likes} {
                        //another conditional for singular vs plural grammar
                        props.cat.likes > 1 ? 
                        'people love ' :
                        'person loves '
                        } 
                        this!</h3> :
        <h3>No people love this :(</h3>
      }
     

    </div>
  ) 
}

export default GalleryItem;