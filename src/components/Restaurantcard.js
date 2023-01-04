import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Restaurantcard.css';


function Restaurantcard({restaurant}) {
    console.log(restaurant);
  return (
    <Link  style={{textDecoration:"none",color:"white"}} to={`view-restaurant/${restaurant.id}`}>
         <Card id='crd' className=' mb-5 ms-3 p-2 '>
      <Card.Img  variant="top" className='p-4' src={restaurant.photograph}/>
      <Card.Body id='rest'>
        <Card.Title id='title'>{restaurant.name}</Card.Title>
        <Card.Text className='neighbor'>
         {restaurant.neighborhood}
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
  )
}

export default Restaurantcard