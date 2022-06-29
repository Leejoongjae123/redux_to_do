import {configureStore, createSlice} from '@reduxjs/toolkit'


let toDos = createSlice({
    name:'user',
    initialState:['doing a homework'],
    reducers:{
        addToDos(state,action){
            return [...state,action.payload]
        },
        removeToDos(state,action){
            console.log(action.payload)
            let position=parseInt(action.payload)
            state.splice(position,1)
        }}})


export let {addToDos,removeToDos} = toDos.actions


export default configureStore({
    reducer:{
        toDos:toDos.reducer,
    }
})