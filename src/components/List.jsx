import React from "react";
import Card from "./Card";

const List = ({tasks,deleteTask,updateTask}) => {
    return (
        <div className="mx-auto w-50">
            <div>
                <ol className="list-group">
                    <Card tasks={tasks} deleteTask={deleteTask} updateTask={updateTask}/>
                </ol>
            </div>
        </div>
    );
};

export default List;
