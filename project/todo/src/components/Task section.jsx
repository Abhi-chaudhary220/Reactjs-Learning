// function TaskSection() {
//   return (
//     <div class="container text-center">
//       <div class="row my-row">
//         <div class="col-4">
//           <input type="text" placeholder="Enter Work Here"></input>
//         </div>
//         <div class="col-4">
//           <input type="date"></input>
//         </div>
//         <div class="col-4">
//           <button type="button" class="btn btn-success">
//             Add New
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default TaskSection;


function TaskSection() {
  return (
    <div className="container text-center">
      <div className="row g-2">
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