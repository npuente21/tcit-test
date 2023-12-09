import {connect} from 'react-redux';
import PostTable from '../../../../components/home/table/postsTable';
import {deletePost} from '../../reducers/posts';

const mapDispatchToProps = {deletePost}
const mapStateToProps = (state) => {
    return {
        allPosts: state.posts.posts,
        loading: state.posts.loading,
        error: state.posts.error,
        loadingCreate: state.posts.loadingCreate,
        errorCreate: state.posts.errorCreate,
        loadingDelete: state.posts.loadingDelete,
        errorDelete: state.posts.errorDelete,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostTable);
