import styles from "./Task Section.module.css";


function TaskSection() {
  return (
    <div className="container text-center">
      <div className={`row g-2 ${styles.inputCenter}`}>
        <div className="col-12 col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Work Here"
          />
        </div>
        <div className="col-12 col-md-4" id="date">
          <input type="date" className="form-control" />
        </div>
        <div className="col-12 col-md-4">
          <button type="button" className="btn btn-success w-100">
            Add New Task
          </button>
        </div>
      </div>
    </div>
  );
}
export default TaskSection;
