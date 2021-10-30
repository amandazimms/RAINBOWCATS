import {useState} from "react";

function GalleryList(props){
  //const [name, setName]=useState(null);
  return(
    <div>
      <h1>GalleryList</h1>
      <p>props: {JSON.stringify(props)}</p>
    </div>
  ) 
}

export default GalleryList;