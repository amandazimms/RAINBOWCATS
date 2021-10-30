import {useState} from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList(props){
  //const [name, setName]=useState(null); 
  return(
    <div>
      <h1>GalleryList</h1>
      {props.cats.map(cat => (<GalleryItem cat={cat}/> ))}
    </div>
  ) 
}

export default GalleryList;