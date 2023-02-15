import { useForm } from "react-hook-form";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoState } from "../atoms";

interface IForm {
  toDo: string;
}

export default function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IForm>();
  const handleInvalid = ({ toDo }: IForm) => {
    setToDos(oldToDos => [
      { text: toDo, id: Date.now(), category },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  return (
    <form onSubmit={handleSubmit(handleInvalid)}>
      <input
        {...register("toDo", { required: "Please write a to do" })}
        placeholder="write a to do"
      />
      <button>Add</button>
      <span>{errors?.toDo?.message}</span>
    </form>
  );
}
