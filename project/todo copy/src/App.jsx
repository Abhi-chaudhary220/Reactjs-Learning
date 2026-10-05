import Heading from "./components/App heading";
import TaskSection from "./components/Task section";
import Previous from "./components/Previous Tasks";
import "./App.css";
import styles from "./App.module.css";
function App() {
  return (
    <div className={`container-fluid py-4 text-center main ${styles.main}`}>
      <Heading />
      <TaskSection />
      <Previous task="Do Exercise" date="01/10/2026" />
      <Previous task="Do Reading" date="01/10/2026" />
      <Previous task="Do Meditation" date="01/10/2026" />
      <Previous task="Take Break" date="01/10/2026" />
      <Previous task="Do Exercise" date="01/10/2026" />
    </div>
  );
}

export default App;
