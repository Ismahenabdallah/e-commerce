import React from 'react';
import styled from 'styled-components';
const FilterListToggle = ({ options, selectToggle }) => {
  
  return (
    <Container>
    {/* projects nav */}
    <nav className=' '>
      <ul   className=''>
         {options.map((item, index) => {
          return (
            <li
              onClick={selectToggle}
              className='
              btn btn-outline-success'
              key={index}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </nav>
    {/* projects */}
   
  </Container>
   

      
  
  );
};

export default FilterListToggle;
const Container = styled.div`

ul{
   
    margin-left:-8%;
    
    
    
   
}


`;