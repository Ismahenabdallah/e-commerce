import React, { useEffect, useState } from 'react'

import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../redux/actions/actions';
import CartItem from '../components/CartItem';
 function Carticon() {
  const getdata = useSelector((state)=> state.cart);
  const [price,setPrice] = useState(0);
 
 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const total = ()=>{
    let price = 0;
    getdata.map((ele,k)=>{
        return price += parseInt(ele.price) * parseInt(ele.quantity);
    });
    setPrice(parseInt(price));
};

useEffect(()=>{
    total();
},[total])
  const dispatch = useDispatch();
  const deleteALL=()=>{
    dispatch(clearCart());
    alert('delete all products from cart ');
    
  }
 
  return (
    <Container>
      <div >
      <i className="fa fa-shopping-cart  text-black " data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
        <span className='badge badge-danger'>{getdata.length}</span>
      </div>   
   


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header ">
        <h5 className="modal-title text-success text-center  "  id="exampleModalLabel">Cart Projects</h5>
      </div>
      <div className="modal-body">
{getdata.length ? 
<div>
<table className="table">
  <thead>
    <tr>
    <th scope="col">Image</th>
      <th scope="col">Title</th>
      <th scope="col">Category</th>
      <th scope="col">Price </th>
      
    
      <th scope="col">Action </th>

    </tr>
  </thead>
  <tbody>
  
{
  getdata.map((item, index)=>{
    return (
     <>
      <CartItem item={item} index={index}/>
     
     </>
       
        
      
    )

  })
} </tbody>
</table>
<div className="d-flex justify-content-between ">

<button className =' btn btn-danger'onClick={deleteALL}>DELETE  ALL</button>
<p> Total : {price} $</p>
</div>
</div> :
<div>
  <h1>cart is  empty</h1>
</div>
}


      </div>
      <div className="modal-footer">
       
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
    
    </Container>
  )
}



export default Carticon;

const Container=styled.div`
margin-right:10%;

  
i{
    font-size:25px;
}
span{
  background-color:red;
    position:absolute;
    top:6%;
    right:9%;
 
    font-size:10px;
}
  
}
@media only screen and (max-width: 767px) {
  span {
    left:8%;
   
   
  
 }
}
@media only screen and (max-width: 900px) {
    span {
       
       top:66% ;  
      right:94%;
     
     
    }
   }

`;
