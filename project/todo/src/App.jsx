import Heading from "./components/App heading";
import TaskSection from "./components/Task section";
import Previous from "./components/Previous Tasks";
import "./App.css";
function App() {
  return (
    <div className="container-fluid py-4 text-center main">
      <Heading />
      <TaskSection />
      <Previous />
    </div>
  );
}

export default App;
