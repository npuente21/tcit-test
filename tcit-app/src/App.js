import createStore from './components/redux/store';
import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import PostSourceService from './API/postService';
import Home from './components/redux/containers/home/Home';
const API_URL = 'http://localhost:8080';

function App() {

  const postService = PostSourceService({ baseUrl: API_URL });
  const store = createStore({
    postService
  });
  return (
    <Provider store={store}>
      <div className="App">
      <h1>Aplicación de POSTS</h1>
      <Home/>
      </div>
    </Provider>
  );
}

export default App;
