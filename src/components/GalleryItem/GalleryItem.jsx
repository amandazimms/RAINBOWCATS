import {useState} from "react";

function GalleryItem(props){
  //const [name, setName]=useState(null);
  const [show, setShow]=useState(true);
  const [liked, setLiked]=useState(false);
  const [numLikes, setNumLikes]=useState(0);

  const toggleShow = () => {
    setShow(!show);
  }

  const toggleLiked = () => {
    if (!liked){ //if it wasn't yet liked, they click to Like it

    }
    setLiked(liked + 1);
    setNumLikes(liked + 1)
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
        numLikes > 0 ?
        <h3>{numLikes} people love this!</h3> :
        <h3>No people love this :(</h3>
      }
     

    </div>
  ) 
}

export default GalleryItem;