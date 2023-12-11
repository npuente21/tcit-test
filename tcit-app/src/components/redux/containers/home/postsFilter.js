import {connect} from 'react-redux';
import PostsFilter from '../../../home/postsFilter';
import {setFilter} from '../../reducers/posts';

const mapDispatchToProps = {setFilter}
const mapStateToProps = (state) => {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(PostsFilter);
