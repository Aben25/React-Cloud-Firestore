import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function Food(props) {
    return (
        <div>
            <div class="col-4 p-3">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={props.food.image} />
                    <Card.Body>
                        <Card.Title>{props.food.name}</Card.Title>
                        <Card.Text>
                            {props.food.description}
                        </Card.Text>
                        <Button variant="secondary">Buy Now</Button>
                    </Card.Body>
                </Card>

            </div>


        </div>
    )
}
