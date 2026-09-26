// import ErrorMsg from "./errormsg";
// import FoodItem from "./fooditem";

// function App() {
//   let healthyItems = [
//     "banana",
//     "guava",
//     "apple",
//     "mango",
//     "papaya",
//     "pineapple",
//     "orange",
//     "strawberry",
//     "blueberry",
//   ];

//   return (
//     <>
//       <h1>Keep Healthy</h1>
//       <ErrorMsg />
//       <FoodItem />

//     </>
//   );
// }

// export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function FruitItems() {
  let fruits = ["Apple", "Banana", "Mango", "Papaya", "Orange"];

  // if (fruits.length === 0) {
  //   return <h3>I m Hungry</h3>;
  // }
  // let msg = fruits.length === 0 ? <h2>I m Hungry</h2> : null;
  // let msg = fruits.length === 0 && <h2>I m Hungry</h2>;
  return (
    <>
      <h1>Fruits List</h1>
      {/* {msg} */}
      {/* {msg} */}
      <ul className="list-group">
        {fruits.map((fruitName) => {
          return <li className="list-group-item">{fruitName}</li>;
        })}
      </ul>
    </>
  );
}
export default FruitItems;
