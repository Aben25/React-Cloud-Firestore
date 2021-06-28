import db from '../firebase.config'
import React, { useState, useEffect, useCallback } from 'react'
import Food from './Food'
function FoodList() {

    const [foods, setFoods] = useState([])
    const fetchFoodList = () => {
        db.collection('foods')
            .get()
            .then(snapshot => {
                const foods = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    foods.push(data)
                })
                setFoods([...foods, foods])
                console.log(foods)
            }).catch(error => console.log(error))
    }

    useEffect(() => {
        fetchFoodList()
    }, [])
    console.log(66777773, foods)
    return (
        <div className="App">
            <div class="row">
            {
                foods.map(food => {
                    return (
                        <Food food={food} />
                    )
                })
            }
            </div>
            
        </div>
    );
}

export default FoodList;