import React, { useEffect, useState } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';
import AddItem from '../AddItem/AddItem';

function App() {
  //App is the 'grandmother' of all child components. Aside from passing props down it's mostly
  //  responsible for running getCats, which needs to run any time a change is made, so that
  //  the dom reflects the newest information

  const[cats, setCats] = useState( [] );

  useEffect( ()=> {
    getCats();
  }, []);

  const getCats=()=>{
    //makes a router request to get all the cats so they can be displayed on the DOM
  
    axios.get( '/gallery' ).then( (response)=>{
      //now our 'cats' variable will hold all of the cats (objects containing URL, description, etc)
      setCats(response.data);

    }).catch((err)=>{
      console.log('error:', err);
    });
  }

  

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">R A I N B O W C A T S</h1>
      </header>

      {/* two child components, who both need to pass these props to */}
      <AddItem cats={cats} getCats={getCats}/>
      <GalleryList cats={cats} getCats={getCats}/>
    </div>
  );
}

export default App;
