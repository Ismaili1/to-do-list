import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import './Progress_bar.css';

function Progress_bar(){
    const dispatch = useDispatch();
    const total_tasks = useSelector(function(state){return state.Task})
    const done_tasks = useSelector(function(state){return state.Done})
    const [all_length, setAll_length] = useState(0)
    const [done_length, setDone_length] = useState(0)
    useEffect(function(){
        setAll_length(total_tasks.length)
        setDone_length(done_tasks.length)
    },[total_tasks, done_tasks])
    const progressPercentage = all_length > 0 ? (done_length / all_length) * 100 : 0; 
    return(
        <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: progressPercentage + "%" }}></div>
                <span className="progress-text">{done_length}/{all_length}</span>
            </div>
    )
}
export default Progress_bar