import React, { useState } from "react";

const Form = ({ addData }) => {
  const [task, setTask] = useState("");
  const [hr, setHr] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    const taskObj = { task, hr };
    addData(taskObj);
  };
  return (
    <>
      <form action="" onSubmit={handlesubmit}>
        <div className="row g-2 mt-5 shadow-lg border p-5 rounded">
          <div className="col-md-7">
            <input
              type="text"
              className="form-control"
              placeholder="Task"
              aria-label="Task"
              id="task"
              name="task"
              required
              onChange={handleChange}
            />
          </div>
          <div className="col-md-2">
            <input
              name="hr"
              type="number"
              className="form-control"
              placeholder="hours"
              aria-label="hours"
              required
              min="1"
              onChange={(e) => setHr(e.target.value)}
            />
          </div>
          <div className="col-md-3 d-grid">
            <button className="btn btn-primary" type="submit">
              Add New Task
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
