import { Undo_task } from "./actions";
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from "react";
import "./Done_list.css";

function Done_list() {
    const dispatch = useDispatch();
    const allTasks = useSelector(function(state) { return state.Done; });

    
    const Dones = useMemo(function() {
        return allTasks.filter(function(tas) { return tas.done; });
    }, [allTasks]);

    function click_undo(selected) {
        const now = new Date();
        const formattedDate = now.toISOString().slice(0, 16).replace('T', ' ');
        dispatch(Undo_task(selected.id, selected.tasks, formattedDate, false));
    }

    return (
        <div className="done-container">
            {Dones.map(function(done) {
                return (
                    <div className="done-card" key={done.id}>
                        <div className="done-content">
                            <h3 className="done-title">{done.tasks}</h3>
                            <p className="done-date">Completed: {done.date_done}</p>
                        </div>
                        <button 
                            className="undo-button" 
                            onClick={function() { click_undo(done) }}
                        >
                            Undo
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default Done_list;
