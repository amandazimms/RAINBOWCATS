import {useState} from "react";
import axios from 'axios';

function AddItem(props){
  //AddItem is the area containing input fields for, you guessed it, adding an item.
  //  it sends the user's inputted URL and description data to the router

  //const [name, setName]=useState(null); 
  
  const [inputs, setInputs] = useState( {} );

  const handleChange = (event) => {
    //runs anytime the input fields change (every character)
    const name = event.target.name; //name could be either "url" or "description" in our case
    const value = event.target.value; //value could be, for example, "www.google.com/cat" or "a cute cat"
    
    //spread into values the properties above
    setInputs(values => ({...values, [name]: value}));
  }

  const handleSubmit = (event) => {
    //happens upon clicking submit
    event.preventDefault(); //need to learn more about this funciton from w3 schools

    //use axios to send our input info (which looks like {path: bla.com, description: cute cat})
    //to the router. Then it runs getCats() to refresh the page
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