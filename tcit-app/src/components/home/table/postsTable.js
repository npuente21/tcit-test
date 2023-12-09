import '../../../App.css'
import React from 'react';
export default function PostsTable(props){
    const {allPosts, deletePost} = props;
    const handleDeleteButton = (e) => {
      deletePost(e.target.value)
    }
    return(
        <div className='postsTable'>
          <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            
                {allPosts.map((item, index) => {
                    return(
                        <tr key={index}>
                        <td >{item.name}</td>
                        <td >{item.description}
                        </td>
                        <td >
                          <button type='button' value={item.id} onClick={handleDeleteButton}>Eliminar</button>
                        </td>
                        </tr>
                    )
                })}
           
          </tbody>
        </table>
      </div>
    )
}