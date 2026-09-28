// function ErrorMsg() {
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
    
//       healthyItems.length === 0 && <h3>I m Hungry</h3>
    
//   );
// }
// export default ErrorMsg;


function ErrorMsg() {
  let fruits = ["Apple", "Banana", "Mango", "Papaya", "Orange", "Strawberry"];
  
  return <>{fruits.length === 0 && <h3>I m Hungry</h3>}</>;
}
export default ErrorMsg;