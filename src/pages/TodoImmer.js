import React from "react";
import { produce } from "immer";
import Form from "../components/immer/Form";

function useImmerReducer(reducer, initialState) {
  return React.useReducer(produce(reducer), initialState);
}

const todosReducer = (todos, action) => {
  switch (action.type) {
    case "ADD_TODO":
      todos.unshift({ text: action.text, complete: false });
      return;
    case "TOGGLE_COMPLETE":
      todos[action.i].complete = !todos[action.i].complete;
      return;
    case "RESET":
      return [];
    default:
      return todos;
  }
};

const TodoImmer = () => {
  const [todos, dispatch] = useImmerReducer(todosReducer, []);

  return (
    <div className="container">
      <h1>Todo Using Immer</h1>
      <Form dispatch={dispatch} />
      <ul style={{ listStyle: "auto" }}>
        {todos.map(({ text, complete }, i) => (
          <li
            key={text}
            onClick={() => dispatch({ type: "TOGGLE_COMPLETE", i })}
            style={{
              textDecoration: complete ? "line-through" : "",
              margin: "1rem",
            }}
          >
            {text}
          </li>
        ))}
      </ul>
      <button
        style={{ margin: "1rem" }}
        onClick={() => dispatch({ type: "RESET" })}
      >
        Reset List
      </button>
    </div>
  );
};

export default TodoImmer;
