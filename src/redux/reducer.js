import * as actions from './actions';

const initialState = {
    pie:[],
    bar:[],
    colors:["red", "green","blue","orange","brown", "yellow", "black", "gray"]
}

export default function reducer(state = initialState, action) {
    switch (action.type){
        case actions.ADD_BARCHARTDATA:
            let barcharts = {
                ...state,
                bar: [...action.payload]
            }
            return barcharts;
        case actions.ADD_PIECHARTDATA:
            let piecharts = {
                ...state,
                pie: [...action.payload]
            }
            return piecharts;
        case actions.EDIT_BARCHART:
            return {
                ...state,
                bar: [...state.bar.filter((ele) => ele.id !== action.payload.id), {id: action.payload.id, elements: action.payload.elements}]
            }
        case actions.EDIT_PIECHART:
            return {
                ...state,
                pie: [...state.pie.filter((ele) => ele.id !== action.payload.id), {id: action.payload.id, elements: action.payload.elements}]
            }
        default:
            return state;
    }
}
