import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Liste from '../components/PageHome/Liste'
import Partieone from '../components/PageHome/Partieone'
import { dataList } from '../components/data';
import NotFound from './NotFound'
export default function Home() {
 
  const [item, setItem] = useState({ name: 'tous' });
 
 
  const [list, setList] = useState(dataList);
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  
  const handleClick = (e, index) => {
      setItem({ name: e.target.textContent.toLowerCase() });
     
     
    };
  
  const handlefunction = () => {
    let updatedList = dataList;
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }
   
    if (item.name === 'tous') {
      setList(dataList);
    } else {
      updatedList = updatedList.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setList(updatedList);
    }
   
   
   
 
  
    
    ///
    setList(updatedList);
    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  }
  useEffect(() => {
    handlefunction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ searchInput,item ]);

  return (

    <Container className="container-fluid">

      
      <div className="home">
        <Partieone className="mr-2"
        selectCategory={handleClick}
        searchInput={searchInput}
        changeInput={(e) => setSearchInput(e.target.value)}
      
      
       

        />
        <div className='home_list-wrap'>
          {resultsFound ? <Liste list={list}  /> : <NotFound />}
        </div>
      </div>

    </Container>
  )
}
const Container = styled.div`

.home{
    display:grid;
    grid-template-columns: 30% 80%;
    
    
}


`;