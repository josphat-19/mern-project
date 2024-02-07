import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: null,
    error: null,
    loading: false,
  };

  const userSlice =  createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload
            state.loading = false
            state.error = null
        },
        signInFailure: (state, action) => {
            state.error = action.payload
            state.loading = false
        },
        updateUserStart: (state) => {
            state.loading = true
        },
        updateUserSuccess: (state, action) => {
            state.error = action.payload
            state.loading = false
            state.error = null
        },
        updateUserFailure: (state, action) => {
            state.error = action.payload
            state.loading = false
        },
        deleteUserstart: (state) => {
            state.loading = true
        },
        deleteUserSuccess: (state) => {
            state.currentUser = null
            state.loading = false
            state.error = null
        },
        deleteUserFailure: (state, action) => {
            state.error = action.payload
            state.loading = false
        },
        signOutUserstart: (state) => {
            state.loading = true
        },
        signOutUserSuccess: (state) => {
            state.currentUser = null
            state.loading = false
            state.error = null
        },
        signOutUserFailure: (state, action) => {
            state.error = action.payload
            state.loading = false
        },
    },
  });

  export const { 
    signInStart, 
    signInSuccess, 
    signInFailure, 
    updateUserFailure,
    updateUserStart,
    updateUserSuccess,
    deleteUserstart,
    deleteUserSuccess,
    deleteUserFailure,
    signOutUserFailure,
    signOutUserSuccess,
    signOutUserstart,
} = userSlice.actions

  export default userSlice.reducer
  