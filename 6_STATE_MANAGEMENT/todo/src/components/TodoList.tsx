import { useForm } from "react-hook-form";
import { useRecoilState, atom } from "recoil";

interface IForm {
  toDo: string;
}
interface Todo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}
const toDoState = atom<Todo[]>({
  key: "toDo",
  default: [],
});

export default function TodoList() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IForm>();
  const handleInvalid = ({ toDo }: IForm) => {
    console.log("add to do", toDos);
    setToDos(oldToDos => [
      { text: toDo, id: Date.now(), category: "TO_DO" },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleInvalid)}>
        <input
          {...register("toDo", { required: "Please write a to do" })}
          placeholder="write a to do"
        />
        <p>{errors?.toDo?.message}</p>
        <button>Add</button>
      </form>
      <ul>
        {toDos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}
