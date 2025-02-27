import { useState, useMemo } from "react";
import { Add_task, Delete_task, Edit_task, Done_task, Move_up } from "./actions";
import { useDispatch, useSelector } from 'react-redux';
import "./Tasks_List.css";
import Progress_bar from './progress_bar';

function Tasks_List() {
    const dispatch = useDispatch();
    const allTasks = useSelector(function(state) { return state.Task; });

    const Tasks = useMemo(function() {
        return allTasks.filter(function(tas) { return !tas.done; });
    }, [allTasks]);

    const [task, setTask] = useState('');
    const [editTaskId, setEditTaskId] = useState(null);

    function change_Task(e) {
        setTask(e.target.value);
    }

    function click_add() {
        const now = new Date();
        const formattedDate = now.toISOString().slice(0, 16).replace("T", " "); 
        dispatch(Add_task(new Date().getTime(), task, formattedDate, false));
        setTask('');
    }

    function click_done(done_task) {
        const now = new Date();
        const formattedDate = now.toISOString().slice(0, 16).replace("T", " "); 
        dispatch(Done_task(done_task.id, done_task.tasks, formattedDate, true));
    }
    function move_task_up(id){
        dispatch(Move_up(id))
    }

    function edit_task(selectedtask) {
        setTask(selectedtask.tasks);
        setEditTaskId(selectedtask.id);
    }

    function save_edit() {
        dispatch(Edit_task(editTaskId, task));
        setTask('');
        setEditTaskId(null);
    }

    return (
        <div className="tasks-container">
             <div className="progress-container">
                <Progress_bar/>
            </div>

            <div className="task-input-group">
                <input 
                    type="text" 
                    onChange={change_Task} 
                    value={task}
                    placeholder="What needs to be done?"
                    className="task-input"
                />
                {editTaskId === null ? (
                    <button className="task-button add-button" onClick={click_add}>
                        Add Task
                    </button>
                ) : (
                    <button className="task-button save-button" onClick={save_edit}>
                        Save Changes
                    </button>
                )}
            </div>

            {Tasks.map(function(task, index) {
                return (
                    <div className="task-card" key={task.id}>
                        <div className="task-content">
                            <h3 className="task-title">{task.tasks}</h3>
                            <p className="task-date">Created: {task.date_creation}</p>
                        </div>
                        <div className="task-actions">
                            <button 
                                className="task-button edit-button" 
                                onClick={function() { edit_task(task) }}
                            >
                                Edit
                            </button>
                            <button 
                                className="task-button delete-button" 
                                onClick={function() { dispatch(Delete_task(task.id)) }}
                            >
                                Delete
                            </button>
                            <button 
                                className="task-button done-button" 
                                onClick={function() { click_done(task) }}
                            >
                                Mark Done
                            </button>
                            {index > 0 && (
                                <button 
                                    className="task-button move-up-button" 
                                    onClick={function() { move_task_up(task.id) }}
                                >
                                    Move Up
                                </button>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Tasks_List;
