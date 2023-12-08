import '../../../App.css'
import React from 'react';
export default function PostsTable(props){
    const {tableData} = props;
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
            
                {tableData.map((item, index) => {
                    return(
                        <tr key={index}>
                        <td >{item.name}</td>
                        <td >{item.description}
                        </td>
                        <td >
                          
                          <button onClick={()=>{console.log("MUERES")}}>Eliminar</button>
                        </td>
                        </tr>
                    )
                })}
           
          </tbody>
        </table>
      </div>
    )
}