import {connect} from 'react-redux';
import Home from '../../../../components/home/homeView';
import {getPosts} from '../../reducers/posts';

const mapDispatchToProps = {getPosts, }
const mapStateToProps = (state) => {
    return {
        allPosts: state.posts.posts,
        loading: state.posts.loading,
        error: state.posts.error,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
