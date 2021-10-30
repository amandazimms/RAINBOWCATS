import React, { useEffect, useState } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';

function App() {
    // const[cats, setCats] = useState( [] );

    const cats = [
      {
        name: 'memow',
        description: 'nice' 
      },
      {
        name: 'roo',
        description: 'medium' 
      },
      {
        name: 'seymour',
        description: 'friend' 
      }
    ]

    const getCats=()=>{
      axios.get( '/gallery' ).then( (response)=>{
        for(const cat of response.data){
          console.log(cat.description);
        }
      }).catch((err)=>{
        console.log('error:', err);
      });
    }

    return (
      <div className="App">
        <button onClick={getCats}>bla</button>
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList cats={cats}/>
      </div>
    );
}

export default App;
