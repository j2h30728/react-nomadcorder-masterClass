import { useRecoilValue } from "recoil";
import { toDoSelector, toDoState } from "../atoms";
import CreateToDo from "./CrateToDo";
import ToDo from "./ToDo";

export default function TodoList() {
  // const toDos = useRecoilValue(toDoState);
  const [todo, doing, done] = useRecoilValue(toDoSelector);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <h2>To Dos</h2>
      <ul>
        {todo.map(todo => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </ul>
      <hr />
      <h2>Doing</h2>
      <ul>
        {doing.map(todo => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </ul>
      <hr />
      <h2>Done</h2>
      <ul>
        {done.map(todo => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
}
