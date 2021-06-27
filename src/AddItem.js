import React, { useState } from 'react';
import { withFirestore } from 'react-firestore';

const AddItem = ({ firestore }) => {
    const [name, setName] = useState('');
    // Send the new item to Firebase
    const addItem = name => {
        firestore.collection('items').add({ name });
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
        <main className="pageTwo">
           
            <form onSubmit={handleSubmit}>
                <label>
                    Add Item:
                    <input value={name} type="text" id="name" onChange={handleChange} />
                </label>
                <button onClick={handleSubmit}>Add item</button>
            </form>
            
        </main>
    );
};

export default withFirestore(AddItem);