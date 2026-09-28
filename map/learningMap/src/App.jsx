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
import FruitsList from "./fruitslist";
import ErrorMsg from "./errormsg";



function FruitItems() {
  let fruits = ["Apple", "Banana", "Mango", "Papaya", "Orange", "Strawberry"];
  return (
    <>
      <h1>Fruits List</h1>
      <ErrorMsg />
      <FruitsList />
      
      
    </>
  );
}
export default FruitItems;
