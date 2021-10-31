import React, { useEffect, useState } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';

function App() {
    const[cats, setCats] = useState( [] );

    useEffect( ()=> {
      getCats();
    }, []);

    const getCats=()=>{
      axios.get( '/gallery' ).then( (response)=>{
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
        <GalleryList cats={cats} getCats={getCats}/>
      </div>
    );
}

export default App;
