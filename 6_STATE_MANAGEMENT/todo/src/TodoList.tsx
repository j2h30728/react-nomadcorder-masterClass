import { useForm } from "react-hook-form";

interface IForm {
  toDo: string;
}
export default function TodoList() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IForm>();
  const handleInvalid = (data: IForm) => {
    console.log("add to do", data.toDo);
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
    </div>
  );
}
