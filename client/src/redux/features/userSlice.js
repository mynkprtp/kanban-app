import {createSlice} from '@reduxjs/toolkit'

const initialState = {value: {} }

export const userSlice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {setUser} = userSlice.actions

export default userSlice.reducer