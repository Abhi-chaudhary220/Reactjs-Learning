function Clock() {
  let time = new Date();

  return (
    <h4 className="fw-semibold lead">
      The Time is Now: {time.toLocaleDateString()} - {time.toLocaleTimeString()}
    </h4>
  );
}
export default Clock;
