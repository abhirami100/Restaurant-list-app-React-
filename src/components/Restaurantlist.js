import React, {useState,useEffect} from 'react'
import Restaurantcard from './Restaurantcard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RestaurantlistActions } from '../Actions/restaurantListAction';
import { useDispatch, useSelector } from 'react-redux';
import './Restaurantlist.css'

function Restaurantlist() {
    //create  state to hold all restaurant
    const[allRestaurants,setRestaurant] = useState([])

    //function to call API to get all restaurant.json
    // const getRestaurant = async ()=>{
    //     await fetch('/restaurants.json')
    //     .then((data)=>{
    //         data.json()
    //         .then((result)=>{
    //             setRestaurant(result.restaurants)
    //         })
    //     })
    // }
    const dispatch = useDispatch()
    const result = useSelector(state=>state.restaurantReducer)
    const {restaurantList} = result
    useEffect(()=>{
        // getRestaurant()
        dispatch(RestaurantlistActions())

    },[])

  return (
    <Row >
        {
            restaurantList.map(item=>(
                <Col sm={12} md={6} lg={4} xl={3}>
                <Restaurantcard restaurant={item} />
                </Col>
            ))
        }
    </Row>
  )
}

export default Restaurantlist