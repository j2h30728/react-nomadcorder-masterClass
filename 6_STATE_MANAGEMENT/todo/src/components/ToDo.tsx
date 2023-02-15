import { ITodo, toDoState } from "../atoms";
import { useSetRecoilState } from "recoil";

export default function ToDo({ text, id, category }: ITodo) {
  const setToDos = useSetRecoilState(toDoState);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos(oldToDos => {
      const targetIndex = oldToDos.findIndex(toDo => toDo.id === id);
      const newTodo = { text, id, category: name as ITodo["category"] };
      return [
        ...oldToDos.slice(0, targetIndex),
        newTodo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={handleClick}>
          TO_DO
        </button>
      )}
      {category !== "DOING" && (
        <button name="DOING" onClick={handleClick}>
          DOING
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={handleClick}>
          DONE
        </button>
      )}
    </li>
  );
}
