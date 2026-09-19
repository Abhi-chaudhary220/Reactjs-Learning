import Heading from "./components/App heading.jsx";
import TaskSection from "./components/Task section.jsx";
import Previous from "./components/Previous Tasks.jsx";
import "./App.css";
function App() {
  return (
    <center className="container">
      <Heading />
      <div className="task-container">
        <TaskSection />
        <Previous />
      </div>
    </center>
  );
}

export default App;
