import {useState} from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList(props){
  //const [name, setName]=useState(null); 
  
  const generateCuteHeadline = () => {
    let cuteHeadlines = [
      `Today's Flufferinos`,
      `Just Look At These Sweet BBs`, 
      `CATS!`,
      `Please Enjoy the Cats}`,
      `This Morning's Marvelous Meowers`,
      `Cats Cats Cats! Get Your Cats!`
    ]
    return cuteHeadlines[ Math.floor(Math.random() * (cuteHeadlines.length - 0) ) ];
  }
  return(
    <div>
      <h1>{generateCuteHeadline()}</h1>
      <div className="galleryList">
        {props.cats.map(cat => (<GalleryItem cat={cat} getCats={ props.getCats } /> ))}
      </div>
    </div>
  ) 
}

export default GalleryList;