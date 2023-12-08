import { createStore, applyMiddleware, combineReducers } from 'redux';
import { withExtraArgument} from 'redux-thunk';
import {reducer as postsReducer} from './reducers/posts';

export default function _createStore(services) {
  return createStore(
    combineReducers({
        posts: postsReducer,
    }),
    applyMiddleware(withExtraArgument({services})),
  );
}
