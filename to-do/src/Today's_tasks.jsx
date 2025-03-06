import { useSelector } from "react-redux";
import "./Today's_tasks.css";

function Today_tasks() {
    const all = useSelector(function(state) { return state.Task });
    const date = new Date();
    const today_date = date.toISOString().slice(0, 10); 
    const todayTasks = all.filter(function(today){return today.date_creation.slice(0, 10) === today_date})

    return (
        <div className="today-tasks-container">
            <h2 className="today-tasks-header">Today's Tasks</h2>
            {todayTasks.length > 0 ?
             all.map(function(task, index) {
                if (task.date_creation.slice(0, 10) === today_date) {
                    return (
                        <div className="task-card" key={index}>
                            <h3 className="task-title">{task.tasks}</h3>
                            <p className="task-date">Created: {task.date_creation}</p>
                        </div>
                    );
                }
                
            }):
            (
                <p className="no-tasks-message">No tasks for today!</p>
            )
            }
        </div>
    );
}

export default Today_tasks;

