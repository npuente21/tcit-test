import '../../App.css'
import React from 'react';

export default function PostsFilter(props){
    const {setFilter} = props;
    const [nameFilter, setNameFilter] = React.useState('');
    const handleFilterChange = (e) => {
        setNameFilter(e.target.value);
      }
      const handleFilterButton = ()=>{
        setFilter(nameFilter)
      }
    return(
    <form onSubmit={(e)=>e.preventDefault()} className='SearchBar'>            
        <input type="text" onChange={handleFilterChange} value={nameFilter} placeholder="Filtro de Nombre"/>
        <button type='button' onClick={handleFilterButton}>Buscar</button>
    </form>
    )
}