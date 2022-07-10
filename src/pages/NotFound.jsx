import React from 'react';
import styled from 'styled-components';
import  emptygif  from '../images/empty.gif';
export default function NotFound() {
  return (
    <Container className='container'>
      <div className='emptyView-wrap'>
    <img src={emptygif}alt='' />
  </div>
    </Container>
  )
}

const Container=styled.div`
img{
    width:40%;
    margin:10%;
}
`;