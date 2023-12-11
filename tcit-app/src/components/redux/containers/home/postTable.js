import {connect} from 'react-redux';
import PostTable from '../../../../components/home/postsTable';
import {deletePost} from '../../reducers/posts';

const mapDispatchToProps = {deletePost}
const mapStateToProps = (state) => {
    return {
        allPosts: state.posts.posts,
        loading: state.posts.loading,
        error: state.posts.error,
        postNameFilter: state.posts.postNameFilter,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostTable);
