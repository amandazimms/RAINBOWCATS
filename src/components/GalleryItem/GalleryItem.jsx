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
      setLiked(true);
      addLike();
    } else { //if it was already liked, unlike it
      setLiked(false);
      removeLike();
    }
  }

  const addLike=()=>{
    axios.put( `/gallery/addLike/${props.cat.id}`, props.cat ).then( (response)=>{
      props.getCats();
    }).catch((err)=>{
      console.log('error:', err);
    });
  }

  const removeLike=()=>{
    axios.put( `/gallery/removeLike/${props.cat.id}`, props.cat ).then( (response)=>{
      props.getCats();
    }).catch((err)=>{
      console.log('error:', err);
    });
  }

  return (
    <div className="galleryItem">
      <div className="imageCropper">
      { 
        // if show is toggled, display image. Otherwise, display description
        show ? 
        <img onClick={toggleShow} className="catContent" src={props.cat.path} alt={props.cat.description} /> :
        <h3 onClick={toggleShow} className="catContent">{props.cat.description}</h3>
      }
      </div> 
      {
        // \u26CF  \uF63B if pic is already loved, render title as 'un-love'. Otherwise, render as 'love'
        liked ?
        <button onClick={toggleLiked}>&#128571;</button> :
        <button onClick={toggleLiked}>&#128570;</button> 
      }
      <p></p>
      {
        //if someone has liked it, display happy message with count, otherwise, sad 'no people' message
        props.cat.likes > 0 ?
        <p>{props.cat.likes} {
                        //another conditional for singular vs plural grammar
                        props.cat.likes > 1 ? 
                        'people like ' :
                        'person likes '
                        } 
                        this</p> :
        <p>No people like this :(</p>
      }
    
    </div>
  ) 
}

export default GalleryItem;