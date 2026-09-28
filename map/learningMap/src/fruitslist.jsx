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

// import Item from "./item";
// function FruitsList({ items }) {
//   return (
//     <>
//       <ul className="list-group">
//         {items.map((fruitName) => {
//           return <Item key={fruitName} fruit={fruitName}></Item>;
//         })}
//       </ul>
//     </>
//   );
// }
// export default FruitsList;


function FruitsList({ items }) {
  return (
    <>
      <ul className="list-group">
        {items.map((fruitName) => {
          return <li key = {fruitName}className="list-group-item">{fruitName}</li>
        })}
      </ul>
    </>
  );
}
export default FruitsList;
