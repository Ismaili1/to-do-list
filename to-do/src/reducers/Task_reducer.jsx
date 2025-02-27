import types from "../types"

const initial_task = [{id:34,tasks:'faire les exercices', date_creation:'2022-02-19 21:43', done:false},
    {id:35,tasks:'faire les devoirs', date_creation:'2022-12-23 17:30', done:false}
]

function Task_reducer(state=initial_task, action){
    switch(action.type){
        case 'ADD_TASK':
            return [...state, { id: action.payload.id, tasks: action.payload.task, date_creation:action.payload.date_creation, done:action.payload.done }]
        case 'DELETE_TASK':
            return state.filter(function(tas){return tas.id !== action.payload.id})  
        case 'EDIT_TASK':
            return state.map(function(tas){
                if(tas.id === action.payload.id){
                    return {...tas, tasks:action.payload.task}
                }
                return tas
            })
            case types.DONE_TASK:
                return state.map(function(tas){
                    if(tas.id === action.payload.id){
                        return {...tas, done:action.payload.done}
                    }
                    return tas;
                })
                
            case types.UNDO_TASK:
                return state.map(function(tas) {
                    if (tas.id === action.payload.id) {
                        return { ...tas, done: action.payload.done };
                    }
                    return tas;
                });
            case types.MOVE_UP:
                const currentIndex = state.findIndex(function(tas){
                    return tas.id === action.payload.id
                })
                if(currentIndex > 0){
                    const all = [...state]
                    const temp = all[currentIndex]
                    all[currentIndex] = all[currentIndex - 1]
                    all[currentIndex - 1] = temp
                    return all
                }
                return state            
        default:
            return state
    }
}

export default Task_reducer