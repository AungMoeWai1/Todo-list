import React, {useState} from "react";

const Form = ({submitTask}) => {
    const [userTask, setUserTask] = useState("");

    const formSubmitHandling = () => {
        submitTask(userTask);
        setUserTask("");
    };

    return (
        <div>
            <div className="row mt-5">
                <div className="col-3 offset-3">
                    <input
                        type="text"
                        onChange={(e) => setUserTask(e.target.value)}
                        value={userTask}
                        className="form-control"
                        placeholder="Enter task"
                    />
                </div>
                <div className="col-4">
                    <button type="button" onClick={() => formSubmitHandling()} className="btn btn-primary">
                        <i className="fa-solid fa-plus"></i> Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Form;
