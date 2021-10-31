import {useState} from "react";
import axios from 'axios';

function GalleryItem(props){
  //A GalleryItem is an individual picture, along with its descrition, ID, and like count. 
  //it is responsible for sending data about itself directly to the router 

  //const [name, setName]=useState(null);
  const [show, setShow]=useState(true);
  const [liked, setLiked]=useState(false);

  const toggleShow = () => {  
    //toggles the show on and off - for displaying the pic/description (see return below)
    setShow(!show);
  }

  const toggleLiked = () => {
    //when the like button is toggled, proceed with logic for either liking/unliking the photo

    if (!liked){ //if it wasn't yet liked, they click to Like it
      setLiked(true);
      addLike();
    } else { //if it was already liked, unlike it
      setLiked(false);
      removeLike();
    }
  }

  const addLike=()=>{
    //increase this photo's like count by one. Uses axios PUT. Then refreshes DOM with all cats via passing props UP

    axios.put( `/gallery/addLike/${props.cat.id}`, props.cat ).then( (response)=>{
      props.getCats();
    }).catch((err)=>{
      console.log('error:', err);
    });
  }

  const removeLike=()=>{
    //decrease this photo's like count by one. Uses axios PUT. Then refreshes DOM with all cats via passing props UP

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
        //if pic is already loved, render title as 'un-love'. Otherwise, render as 'love'
        liked ?
        //cat heart eye emoji - represents "i already liked this"
        <button onClick={toggleLiked}>&#128571;</button> :
        //cat smile emoji - represents "i have yet to like this"
        <button onClick={toggleLiked}>&#128570;</button> 
      }
      <p></p>
      {
        //if someone has liked it, display  message with count, otherwise, sad 'no people' message
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