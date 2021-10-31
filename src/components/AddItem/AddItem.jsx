import {useState} from "react";
import axios from 'axios';

function AddItem(props){
  //const [name, setName]=useState(null); 
  
  const [inputs, setInputs] = useState( {} );

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addCat();
  }


  const addCat=()=>{
    axios.post(`/gallery`, inputs).then ((response)=>{
      props.getCats();
    }).catch( (err)=>{
      console.log('error:', err);
    })
  }
  

  return(
    <div>
      <h1>Add CatPix</h1>

      <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Enter path"
        name="path" 
        value={inputs.path || ""} 
        onChange={handleChange}
      />
        <input 
          type="text" 
          placeholder="Enter Description"
          name="description" 
          value={inputs.description || ""} 
          onChange={handleChange}
        />
        <input type="submit" />
    </form>
    </div>
  ) 
}



export default AddItem;