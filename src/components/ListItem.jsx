import React from 'react'

import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { AddToCart } from '../redux/actions/actions';


function ListItem ({item}) {
 
      const dispatch = useDispatch();
      const send = (product) => {
          dispatch(AddToCart(product));
      }

      return(
        <Container>
      <div className="card"  key={item.id}>
  <img className="card-img-top" src={item.image} alt="..."/>
  <div className="card-body">
    <h6 className="card-title">Title :{item.title}</h6>
    <p className="card-text">category :{item.category}</p>
    <p className="card-text">price :{item.price}$</p>
    <p className="card-text">rating :{item.rating}</p>
   
    <button className='btn btn-success' onClick={()=>{send(item)}} > Add To Cart </button>
       
  </div>
</div>

    </Container>
      )
    }
   
  
  
    
  
  export default ListItem;
const Container=styled.div`
img{
  width:40vh;
  height:50vh;
}
.btn {
  margin-right:10px;
}
`;
