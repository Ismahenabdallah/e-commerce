import React from 'react'
import styled from 'styled-components'
import { categoryList } from '../data';
import FilterListToggle from '../FilterListToggle';
import SearchBar from './SearchBar';

  const Partieone= ({ 
    selectCategory,searchInput,changeInput
  }) => {
    
      return (
  

      <Container className=" fixed-container">
    
     
        <div>
        <div className='input-group'>
            <p className='label'>Search</p>
            <SearchBar
            value={searchInput}
            search={changeInput}
            />
          </div>
          <div className='input-group'>
            <p className='label'>Category</p>
            <FilterListToggle
    
              options={categoryList}
             
              selectToggle={selectCategory}
            />
          </div>
       
    
    
    
       
        </div>
    
      </Container>
    )
  
 } 
 
export default Partieone;
const Container = styled.div`

.input-group{
    display:block;
    margin-top:10%;
    margin-bottom:10%;
    
    
    
   
}


`;