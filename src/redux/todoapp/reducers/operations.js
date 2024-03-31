import { ADD_TODO, DELETE_ALL } from "../actions";

const initialState=[
    {id: 1, todo: 'Buy Phone', completed: false},
    {id: 2, todo: 'Master React', completed: false},
    {id: 3, todo: 'Master Redux', completed: true},
];

export const operationsReducer=(state=initialState, action)=>{
    switch(action.type){
        case ADD_TODO:
            return [...state, action.payload];
        case DELETE_ALL:
            return [];
        default: return state;
    }
}