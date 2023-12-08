import { createReducer } from './utils';

export const LOADING_POSTS = 'LOADING_POSTS';
export const SUCCESS_POSTS = 'SUCCESS_POSTS';
export const ERROR_POSTS = 'ERROR_POSTS';

export const LOADING_CREATE_POST = 'LOADING_CREATE_POST';
export const SUCCESS_CREATE_POST = 'SUCCESS_CREATE_POST';
export const ERROR_CREATE_POST = 'ERROR_POST';


export const LOADING_DELETE_POST = 'LOADING_CREATE_DELETE_POST';
export const SUCCESS_DELETE_POST = 'SUCCESS_CREATE_DELETE_POST';
export const ERROR_DELETE_POST = 'ERROR_DELETE_POST';


const defaultState = {
    loading: false,
    posts: [],
    error: null,
    loadingCreate: false,
    errorCreate: null,
    createdPost: null,
    loadingDelete: false,
    errorDelete: null,
    deletedPost: null,
};

//reducer
export const reducer = createReducer(defaultState, {
    [LOADING_POSTS]: handleLoadingPosts,
    [SUCCESS_POSTS]: handleSuccessPosts,
    [ERROR_POSTS]: handleErrorPosts,
    [LOADING_CREATE_POST]: handleLoadingCreatePost,
    [SUCCESS_CREATE_POST]: handleSuccessCreatePost,
    [ERROR_CREATE_POST]: handleErrorCreatePost,
    [LOADING_DELETE_POST]: handleLoadingDeletePost,
    [SUCCESS_DELETE_POST]: handleSuccessDeletePost,
    [ERROR_DELETE_POST]: handleErrorDeletePost,
}) 


//actions
function handleLoadingPosts(state) {
    return {
        ...state,
        loading: true,
    }
}
function handleSuccessPosts(state, {payload: {data}}) {
    
    return {
        ...state,
        loading: false,
        posts: data,
    }
}
function handleErrorPosts(state, {payload: {error}}) {
    return {
        ...state,
        loading: false,
        error: error,
    }
}



function handleLoadingCreatePost(state) {
    return {
        ...state,
        loadingCreate: true,
    }
}
function handleSuccessCreatePost(state, {payload: {data}}) {
    
    return {
        ...state,
        loadingCreate: false,
        createPost: data,
    }
}
function handleErrorCreatePost(state, {payload: {error}}) {
    return {
        ...state,
        loadingCreate: false,
        errorCreate: error,
    }
}
function handleLoadingDeletePost(state) {
    return {
        ...state,
        loadingDelete: true,
    }
}
function handleSuccessDeletePost(state, {payload: {data}}) {
    
    return {
        ...state,
        loadingDelete: false,
        deletePost: data,
    }
}
function handleErrorDeletePost(state, {payload: {error}}) {
    return {
        ...state,
        loadingDelete: false,
        errorDelete: error,
    }
}


//actions creator
export function getPosts() {
    return async (dispatch, getState, { services: {postService} }) => {
        dispatch({ type: LOADING_POSTS });
        try {
            const { data } = await postService.getPosts();
            dispatch({ type: SUCCESS_POSTS, payload: {data} });
        } catch (error) {
            dispatch({ type: ERROR_POSTS, payload: {error} });
        }
    };
}

export function createPost(name, description) {
    return async (dispatch, getState, { services: {postService} }) => {
        dispatch({ type: LOADING_CREATE_POST });
        try {
            const { data } = await postService.createPosts(name, description);
            dispatch({ type: SUCCESS_CREATE_POST, payload: {data} });
        } catch (error) {
            dispatch({ type: ERROR_CREATE_POST, payload: {error} });
        }
    };
}

export function deletePost(postID) {
    return async (dispatch, getState, { services: {postService} }) => {
        dispatch({ type: LOADING_DELETE_POST });
        try {
            const { data } = await postService.getPosts(postID);
            dispatch({ type: SUCCESS_DELETE_POST, payload: {data} });
        } catch (error) {
            dispatch({ type: ERROR_DELETE_POST, payload: {error} });
        }
    };
}