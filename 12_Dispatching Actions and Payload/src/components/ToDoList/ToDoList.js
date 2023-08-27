import { toggleTodo } from "../../redux/actions/todoActions";
import "./ToDoList.css";
// useSelector
// The react-redux library offers the useSelector hook, which accepts a callback function that is automatically passed the current state of the Redux store as a default argument.
import { useSelector, useDispatch } from "react-redux";
function ToDoList() {
  const todos = useSelector((state) => state.todos);

  // The useDispatch hook in Redux returns the dispatch function of the Redux store, which can be used to dispatch actions to the reducer function.
  const disptach = useDispatch();
  return (
    <div className="container">
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            <span className="content">{todo.text}</span>
            <span className={todo.completed ? "completed" : "pending"}>
              {todo.completed ? "Completed" : "Pending"}
            </span>
            <button
              className="btn btn-warning"
              onClick={() => {
                disptach(toggleTodo(index));
              }}
            >
              Toggle
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
