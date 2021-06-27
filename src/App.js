import './App.css';
import db from './firebase.config';
import React, { useState, useEffect, useCallback } from 'react'

function App() {
  
  
  const [name, setName] = useState('');

  const [blogs, setBlogs] = useState([])
  const fetchBlogs = async () => {
    const response = db.collection('item');
    const data = await response.get();
    data.docs.forEach(item => {
      setBlogs([...blogs, item.data()])
    })
  }
  useEffect(() => {
    fetchBlogs();
  }, [])
  const addItem = name => {
    db.collection('item').add({ name });
};
// The state every time an event happens
const handleChange = event => {
    setName(event.target.value);
};
// Handle the click of the Add Item botton on the form
const handleSubmit = event => {
    event.preventDefault();
    addItem(name);
};
  return (
    <div className="App">
       <main className="pageTwo">
           
           <form onSubmit={handleSubmit}>
               <label>
                   Add Item:
                   <input value={name} type="text" id="name" onChange={handleChange} />
               </label>
               <button onClick={handleSubmit}>Add item</button>
           </form>
           
       </main>
  
      {
        blogs && blogs.map(item => {
          return (
            <div >
              <h4>{item.name}</h4>
              <p>{item.name}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;