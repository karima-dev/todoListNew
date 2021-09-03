import "./index.css";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { textInputProps } from "../../constants";
import { buttonProps, cardProps } from "../../constants";
import React, { useState } from "react";
const TodoApp = () => {
  const [todo, setTodo] = useState({ title: "", heure: "" });
  const [todoList, setTodoList] = useState([]);
  const [counter, setCounter] = useState(0);

  const handleChange = (e) => {
    switch (e.target.name) {
      case textInputProps.timeTodo.name:
        setTodo({ ...todo, heure: e.target.value });
        break;
      case textInputProps.texttodo.name:
        setTodo({ ...todo, title: e.target.value });
        break;

      default:
        break;
    }
  };
  const handleClick = () => {
    if (!todo.title || !todo.heure) {
      alert("Add a task");
      return;
    }

    setTodoList([
      ...todoList,
      { task: { ...todo }, isDone: false, id: `${counter}` }
    ]);
    setCounter(counter + 1);
    setTodo({ title: "", heure: "" });
    //console.log(listTodo);
  };
  const handledo = (e) => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === e.target.name) item.isDone = true;

        return item;
      })
    );
  };
  const handleremove = (e) => {
    setTodoList(todoList.filter((item) => item.id !== e.target.name));
  };
  const showResult = (todo) => (
    <div
      style={{ backgroundColor: todo.isDone ? "#b7ebc6" : "" }}
      key={todo.id}
      className="divtodo"
    >
      <li>{todo.task.title}</li>

      <div>
        <h6>{todo.task.heure}</h6>
        <CustomButton
          style={{ display: todo.isDone ? "none" : "" }}
          name={todo.id}
          id={`validate_btn`}
          color={buttonProps.color.outlineSuccess}
          text={buttonProps.text.todoDone}
          onClick={handledo}
        />
        <CustomButton
          name={todo.id}
          color={buttonProps.color.outlineDanger}
          text={buttonProps.text.todosupp}
          id={`delete_btn`}
          onClick={handleremove}
        />
      </div>
    </div>
  );

  return (
    <div className="container">
      <h1>ToDo Application</h1>
      <CustomInput
        label={textInputProps.texttodo.label}
        type={textInputProps.texttodo.type}
        placeholder={textInputProps.texttodo.placeholder}
        name={textInputProps.texttodo.name}
        className={textInputProps.texttodo.className}
        onChange={handleChange}
        value={todo.title}
      />
      <CustomInput
        label={textInputProps.timeTodo.label}
        type={textInputProps.timeTodo.type}
        placeholder={textInputProps.timeTodo.placeholder}
        className={textInputProps.timeTodo.className}
        name={textInputProps.timeTodo.name}
        onChange={handleChange}
        value={todo.title}
      />

      <CustomButton
        className={buttonProps.className.classpad}
        color={buttonProps.color.warning}
        text={buttonProps.text.ajouter}
        onClick={handleClick}
      />
      <br></br>
      <br></br>
      {todoList.map((todo) => showResult(todo))}
    </div>
  );
};
export default TodoApp;
