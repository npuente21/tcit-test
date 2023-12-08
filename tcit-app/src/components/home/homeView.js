import React from 'react';
import PostsTable from './table/postsTable';
export default function Home(props) {
    const {allPosts, error, loading, getPosts,
        createdPost, loadingCreate, errorCreate, createPost,
        deletedPost, loadingDelete, errorDelete, deletePost,
    } = props;
    React.useEffect(()=>{
      getPosts()
      
    }, [])

    React.useEffect(()=>{
        
        if (allPosts.length > 0){
            setFilteredPosts(allPosts)
        }
        if(createdPost){
            alert("Post creado exitosamente")
            setFilteredPosts([...filteredPosts, createdPost])
        }if(deletedPost){
            alert("Post eliminado exitosamente")
            setFilteredPosts(filteredPosts.filter((post)=> post.id !== deletedPost.id))
        }
    }, [allPosts, createdPost, deletedPost])
    const [nameFilter, setNameFilter] = React.useState('');
    const [filteredPosts, setFilteredPosts] = React.useState([]);
    const [newPostName, setNewPostName] = React.useState('');
    const [newPostDescription, setNewPostDescription] = React.useState('');
    
    const handleFilterChange = (e) => {
      setNameFilter(e.target.value);
    }
  
    const handleFilterButton = ()=>{
      setFilteredPosts(allPosts.filter((post)=> post.name.includes(nameFilter)))
    }
  
    const handleNameChange = (e) => {
      setNewPostName(e.target.value);
    }
    const handleDescriptionChange = (e) => {
      setNewPostDescription(e.target.value);
    }
    const handleCreatePost = () => {
      if(newPostName && newPostDescription){
        createPost(newPostName, newPostDescription)
      }else{
        alert("No se puede crear un post sin nombre o descripcion")
      }
    }
    return (
        <div>
            { error ? <div>{'Algo falló, favor refrescar la pagina'}</div>: <div>
            <form onSubmit={(e)=>e.preventDefault()} className='SearchBar'>
                
                <input type="text" onChange={handleFilterChange} placeholder="Filtro de Nombre"/>
                <button type='button' onClick={handleFilterButton}>Buscar</button>
            </form>
            {loading ? <div>Cargando...</div>:<PostsTable tableData={filteredPosts}/>  }
            
            <form  onSubmit={(e)=>e.preventDefault()} className='SearchBar'>
                <input type="text" onChange={handleNameChange} placeholder="Nombre"/>
                <input type="text" onChange={handleDescriptionChange} placeholder="Descripcion"/>
                <button type="button" onClick={handleCreatePost}>Crear</button>
            </form>
                </div>}
        </div>
    )
}