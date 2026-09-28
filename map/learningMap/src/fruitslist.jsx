// import Item from "./item";
// function FoodItem() {
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
//     <ul className="list-group">
//       {healthyItems.map((item) => {
//         <Item healthyItem="item"></Item>;
//       })}
//     </ul>
//   );
// }
// export default FoodItem;

function FruitsList() {
  let fruits = ["Apple", "Banana", "Mango", "Papaya", "Orange", "Strawberry"];
  return (
    <>
      <ul className="list-group">
        {fruits.map((fruitName) => {
          return <li className="list-group-item">{fruitName}</li>;
        })}
      </ul>
    </>
  );
}
export default FruitsList;
