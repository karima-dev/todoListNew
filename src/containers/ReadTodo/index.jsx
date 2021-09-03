const ReadTodo = () => {
  const list = ["tache1", "tache2", "tache3"];
  return (
    <div>
      <h2>Tasks</h2>{" "}
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
};
export default ReadTodo;
