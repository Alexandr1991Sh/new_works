import React from "react";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 1},
        {id: 2, message: 'i am good', likesCount: 9}
    ],
    newPostText: 'it-kamasutra.com'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let body = state.newPostText
            return {
                ...state,
                posts: [...state.posts, {
                    id: 3,
                    message: body,
                    likesCount: 0
                }],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state

    }
}

export default profileReducer

export const addPostActionCreator = () => ({type: 'ADD_POST'})
export const updateNewPostTextActionCreator = (text) =>
    ({type: 'UPDATE_NEW_POST_TEXT', newText: text})

