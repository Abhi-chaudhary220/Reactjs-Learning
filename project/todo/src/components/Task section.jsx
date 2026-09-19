function TaskSection() {
  return (
    <div class="container">
      <div class="row my-row">
        <div class="col-4">
          <input type="text" placeholder="Enter Work Here"></input>
        </div>
        <div class="col-4">
          <input type="date"></input>
        </div>
        <div class="col-4">
          <button type="button" class="btn btn-success">
            Add New
          </button>
        </div>
      </div>
    </div>
  );
}
export default TaskSection;
