import types from "./types";

export function Add_task(id, task, date_creation, done){
    return{
        type: types.ADD_TASK,
        payload:{id:id, task:task, date_creation:date_creation, done:done}
    }
    
}

export function Delete_task(id){
    return{
        type:types.DELETE_TASK,
        payload:{id:id}
    }
}
export function Edit_task(id, task){
    return{
        type:types.EDIT_TASK,
        payload:{id:id, task:task}
    }
}
export function Done_task(id, task, date_done, done){
    return{
        type:types.DONE_TASK,
        payload:{id:id, task:task, date_done:date_done, done:done}
    }
}
export function Undo_task(id, task, date_undo, done){
    return{
        type:types.UNDO_TASK,
        payload:{id:id, task:task, date_undo:date_undo, done:done}
    }
}
export function Move_up(id){
    return{
        type:types.MOVE_UP,
        payload:{id:id}
    }
}