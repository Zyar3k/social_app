import {
  CREATE,
  DELETE,
  FETCH_ALL,
  LIKE,
  UPDATE
} from '../constans/actionTypes'
import * as api from '../api'

// action creators

export const getPosts = () => async dispatch => {
  try {
    const { data } = await api.fetchPosts()

    dispatch({ type: FETCH_ALL, payload: data })
  } catch (error) {
    console.warn(error)
  }
}
export const createPost = post => async dispatch => {
  try {
    const { data } = await api.createPost(post)

    dispatch({ type: CREATE, payload: data })
  } catch (error) {
    console.warn(error)
  }
}

export const updatePost = (id, post) => async dispatch => {
  try {
    const { data } = await api.updatePost(id, post)

    dispatch({ type: UPDATE, payload: data })
  } catch (error) {
    console.warn(error)
  }
}

export const deletePost = id => async dispatch => {
  try {
    await api.deletePost(id)

    dispatch({ type: DELETE, payload: id })
  } catch (error) {
    console.warn(error)
  }
}

export const likePost = id => async dispatch => {
  try {
    const { data } = await api.likePost(id)

    dispatch({ type: LIKE, payload: data })
  } catch (error) {
    console.warn(error)
  }
}
