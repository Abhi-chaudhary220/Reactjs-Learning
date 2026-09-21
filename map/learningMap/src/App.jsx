
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
  ];
  return (
    <>
      <h1>Keep Healthy</h1>
      <ul class="list-group">
        {healthyItems.map((item) => {
          return(
          <li class="list-group-item">{item}</li>)
        })}
      </ul>
    </>
  );
}

export default App;
