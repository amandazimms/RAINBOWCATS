import {useState} from "react";

function GalleryItem(props){
  //const [name, setName]=useState(null);
  return(
    <div>
      <h1>GalleryItem</h1>
      <p>props: {JSON.stringify(props)}</p>
    </div>
  ) 
}

export default GalleryItem;