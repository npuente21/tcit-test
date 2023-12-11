import '../../App.css'
import React from 'react';

export default function PostsForm(props){
    const {createPost, loadingCreate, errorCreate} = props;
    const [newPostName, setNewPostName] = React.useState('');
    const [newPostDescription, setNewPostDescription] = React.useState('');
    
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
    return(
      <div>
           { loadingCreate ? <div>Creando...</div>:<div>
        {errorCreate ? <div>{'Algo falló, favor refrescar la pagina'}</div>:
        <div>
        <form  onSubmit={(e)=>e.preventDefault()} className='SearchBar'>
          <input type="text" onChange={handleNameChange} placeholder="Nombre"/>
          <input type="text" onChange={handleDescriptionChange} placeholder="Descripcion"/>
          <button type="button" onClick={handleCreatePost}>Crear</button>
        </form>
        </div>
        }</div>}
      </div>
      
    )
}