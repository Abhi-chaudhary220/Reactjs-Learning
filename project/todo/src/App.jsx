import Heading from "./components/App heading.jsx";
import TaskSection from "./components/Task section.jsx";
import Previous from "./components/Previous Tasks.jsx";
function App() {
  return (
    <center ClassName="container">
      <Heading />
      <TaskSection />
      <Previous />
    </center>
  );
}

export default App;
