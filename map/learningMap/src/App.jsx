import ErrorMsg from "./errormsg";

function App() {
  let healthyItems = [
    // "banana",
    // "guava",
    // "apple",
    // "mango",
    // "papaya",
    // "pineapple",
    // "orange",
    // "strawberry",
    // "blueberry",
  ];
  // if (healthyItems.length === 0) {
  //   return <h3>I m Hungry</h3>
  // }
  let Msg = <h3>I m Hungry</h3>
  if (healthyItems.length === 0) {
    
  }
  return (
    <>
      <h1>Keep Healthy</h1>
      <ul className="list-group">
        {Msg}
        {healthyItems.map((item) => {
          return <li key={item}className="list-group-item">{item}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
