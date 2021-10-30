import {useState} from "react";

function GalleryItem(props){
  //const [name, setName]=useState(null);
  const [show, setShow]=useState(true);

  const toggleShow = () => {
    setShow(!show);
  }
  return(
    <div>
      {
        show ? 
        <h2 onClick={toggleShow}>{JSON.stringify(props.cat.name)}</h2> :
        <h3 onClick={toggleShow}>{JSON.stringify(props.cat.description)}</h3>
      }
      
    </div>
  ) 
}

export default GalleryItem;