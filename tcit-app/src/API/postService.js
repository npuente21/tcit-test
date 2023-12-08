export default function PostSourceService({ baseUrl }) {
    const POST_PATH = '/posts';
  
    return {
      getPosts,
      createPosts,
      deletePosts,
    };
  
    async function getPosts() {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      const response = await fetch(`${baseUrl}${POST_PATH}`, {method: 'GET', headers: headers})
      return await response.json();
    }
    async function createPosts(name, description) {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      const response = await fetch(`${baseUrl}${POST_PATH}`, {method: 'POST', headers: headers, body: JSON.stringify({name, description})})
      return await response.json();
    }
    async function deletePosts(postId) {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      const response = await fetch(`${baseUrl}${POST_PATH}`, {method: 'DELETE', headers: headers, body: JSON.stringify({postId})})
      return await response.json();
    }
  }
  