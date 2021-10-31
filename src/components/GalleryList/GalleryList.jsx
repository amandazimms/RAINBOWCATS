import {useState} from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList(props){
  //The GalleryList holds all the GalleryItems - 
  //  it's basically middle management between App, the big boss, and GalleryItems, who do the real work

  //const [name, setName]=useState(null); 
  
  const generateCuteHeadline = () => {
    //generates a 'random' cute headline (picks one from this list)
    let cuteHeadlines = [
      `Today's Flufferinos`,
      `Just Look At These Sweet BBs`, 
      `CATS!`,
      `Please Enjoy the Cats`,
      `This Morning's Marvelous Meowers`,
      `Cats Cats Cats! Get Your Cats!`
    ]

    //random number which corresponds with # of elements in the array above
    return cuteHeadlines[ Math.floor(Math.random() * (cuteHeadlines.length - 0) ) ];
  }
  return(
    <div>
      <h1>{generateCuteHeadline()}</h1>
      <div className="galleryList">
        {/* map through our gallery items and display them here */}
        {props.cats.map(cat => (<GalleryItem cat={cat} getCats={ props.getCats } /> ))}
      </div>
    </div>
  ) 
}

export default GalleryList;