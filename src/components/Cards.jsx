import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/slices/cartSlice';


function Cards(props) {
const dispatch = useDispatch();
    return (
    <div className='card'>
        <div className="inner">
           <h1>{props.name}</h1>
           <p>{props.price}</p>
           <p>{props.text}</p>
           <button onClick={e =>dispatch(addItem({name:props.name, price: props.price, text:props.text}))}>ADD TO CART</button>
        </div>
    </div>
  )
}

export default Cards