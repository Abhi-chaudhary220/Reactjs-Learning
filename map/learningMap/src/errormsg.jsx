function ErrorMsg() {
  let healthyItems = [
    "banana",
    "guava",
    "apple",
    "mango",
    "papaya",
    "pineapple",
    "orange",
  ];

  if (healthyItems.length === 0) {
    return <h2>i m too hungry</h2>;
  }
}
export default ErrorMsg;
