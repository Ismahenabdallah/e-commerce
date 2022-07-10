import React from 'react'

import { useDispatch } from 'react-redux';
import { RemoveCart } from '../redux/actions/actions';
export default function CartItem(props) {
    const {item, index} = props;
    const {product} = item;
    const dispatch = useDispatch();
    const dlt = (id)=>{
      dispatch(RemoveCart(id))
  }
  return (
    
      
  
    <tr>
      <td style={{width:'40%'}}><img src={product.image} style={{width:'40%'}} alt=""/></td>
      <td style={{width:'40%'}}>{product.title}</td>
      <td style={{width:'40%'}}>{product.category}</td>
      <td style={{width:'40%'}}>{product.price} </td>
      <td style={{width:'40%'}}> <button className='btn btn-danger ' onClick={()=>{dlt(index)}} >Remove</button></td>
    </tr>
   
  
   
  )
}