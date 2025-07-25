/* eslint-disable no-restricted-globals */
import React from "react";

const Card = ({tasks, deleteTask, updateTask}) => {
    const handleDeleteTask = (id) => {
        if (confirm("Are you sure to delete?")) {
            deleteTask(id);
        }
    };

    return (
        <div>
            {tasks.map((task) => (
                <div
                    className={
                        task.complete
                            ? "list-group-item w-75 mt-3 shadow bg-success text-decoration-line-through text-white"
                            : "list-group-item w-75 mt-3 shadow"
                    }
                    key={task.id}
                >
                    <div className="row">
                        <div className="col">
                            <div className="col-9 offset-1">
                                <input
                                    type="checkbox"
                                    className="me-2"
                                    onClick={() => updateTask(task.id, !task.complete)}
                                    checked={task.complete}
                                />
                                {task.task}
                            </div>
                        </div>
                        <div className="col text-end">
                            <button className="btn btn-danger btn-sm" onClick={() => handleDeleteTask(task.id)}>
                                <i className="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Card;
