import { useRecoilValue, useRecoilState } from "recoil";
import { toDoSelector, categoryState, Categories } from "../atoms";
import CreateToDo from "./CrateToDo";
import ToDo from "./ToDo";

export default function TodoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const handleInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as Categories);
  };
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={handleInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>DOING</option>
        <option value={Categories.DONE}>DONE</option>
      </select>
      <CreateToDo />
      <ul>
        {toDos.map(todo => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
}
