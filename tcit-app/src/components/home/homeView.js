import React from 'react';
import PostsTable from '../redux/containers/home/postTable';
import PostsForm from '../redux/containers/home/postsForm';
import PostsFilter from '../redux/containers/home/postsFilter';
export default function Home(props) {
    const {error, loading, getPosts} = props;
    React.useEffect(()=>{
      getPosts()
      
    }, [])

    return (
        <div>
            { error ? <div>{'Algo falló, favor refrescar la pagina'}</div>: <div>

            {loading ? <div>Cargando...</div>:
            <div>
            <PostsFilter/>
            <PostsTable/>
            <PostsForm/>  
            </div>
            }
              </div>}
        </div>
    )
}