import {connect} from 'react-redux';
import Home from '../../../../components/home/homeView';
import {getPosts, createPost, deletePost} from '../../reducers/posts';

const mapDispatchToProps = {getPosts, createPost, deletePost}
const mapStateToProps = (state) => {
    return {
        allPosts: state.posts.posts,
        loading: state.posts.loading,
        error: state.posts.error,
        loadingCreate: state.posts.loadingCreate,
        errorCreate: state.posts.errorCreate,
        loadingDelete: state.posts.loadingDelete,
        errorDelete: state.posts.errorDelete,
        createdPost: state.posts.createPost,
        deletedPost: state.posts.deletePost,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
