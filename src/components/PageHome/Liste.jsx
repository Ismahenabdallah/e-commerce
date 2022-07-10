import React from 'react'
import styled from 'styled-components';

import ListItem from '../ListItem'

export default function Liste({list}) {
  return (
    <Container className='row'>
      {list.map((item) => 
       <div className='col-5 cart '>
       <ListItem key={item.id} item={item} />
    

    </div>
)}
   
    </Container>
  )
}
const Container=styled.div`
margin-top:5%;
.cart{
  width:50vh;
}
`;