import styles from "./Previous Tasks.module.css";


function Previous({task, date}) {
  return (
    <div className={`container text-center ${styles["my-row"]}`}>
      <div className="row my-row">
        <div className="col-4">{task}</div>
        <div className="col-4">{date}</div>
        <div className="col-4">
          <button type="button" className="btn btn-danger">
            Delete Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default Previous;
