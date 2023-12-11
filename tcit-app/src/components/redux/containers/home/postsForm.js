import {connect} from 'react-redux';
import PostsForm from '../../../home/postsForm';
import {createPost} from '../../reducers/posts';

const mapDispatchToProps = {createPost}
const mapStateToProps = (state) => {
    return {
        loadingCreate: state.posts.loadingCreate,
        errorCreate: state.posts.errorCreate,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostsForm);
