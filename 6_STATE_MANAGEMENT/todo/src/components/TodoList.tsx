import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { toDoState } from "../atoms";
import CreateToDo from "./CrateToDo";
import ToDo from "./ToDo";

export default function TodoList() {
  const toDos = useRecoilValue(toDoState);

  return (
    <div>
      <CreateToDo />
      <ul>
        {toDos.map(todo => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
}
