import ErrorMsg from "./errormsg";

function App() {
  let healthyItems = [
    "banana",
    "guava",
    "apple",
    "mango",
    "papaya",
    "pineapple",
    "orange",
    "strawberry",
    "blueberry",
  ];

  return (
    <>
      <h1>Keep Healthy</h1>
      <ErrorMsg />
      <ul className="list-group">
        {healthyItems.map((item) => {
          return (
            <li key={item} className="list-group-item">
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
