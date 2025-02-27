import types from "../types"

const initial_done = []
//{id:2323, tasks:'training basketball', date_done:'2025-02-23 14:30', done:true}
function Done_reducer(state=initial_done, action){
    switch(action.type){
        case types.DONE_TASK:
            return [...state, { id: action.payload.id, tasks: action.payload.task, date_done:action.payload.date_done, done:action.payload.done }]
        case types.UNDO_TASK:
            return state.filter(function(tas) { return tas.id !== action.payload.id; });    
        default:
            return state
    }
}
export default Done_reducer