function App() {
  let healthyItems = [
    "banana",
    "guava",
    "apple",
    "mango",
    "papaya",
    "pineapple",
    "orange",
  ];
  return (
    <>
      <h1>Keep Healthy</h1>
      <ul className="list-group">
        {healthyItems.map((item) => (
          <li class="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
