import { useForm } from "react-hook-form";

interface IFormProps {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  passwordConfirm: string;
  extraError?: string;
}
function ReactHookForm() {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    reset,
    setValue,
    formState: { errors },
  } = useForm<IFormProps>({ defaultValues: { email: "@naver.com" } });
  const onSubmit = (data: IFormProps, e: any) => {
    console.log(data, e);
    if (data.password !== data.passwordConfirm) {
      return setError(
        "passwordConfirm",
        { message: "비밀번호가 동일하지 않습니다." },
        { shouldFocus: true }
      );
    }
    setError("extraError", { message: "server offline" });
    reset();
    setValue("email", "제출완료");
  };
  const onError = (errors: any, e: any) => {};
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        style={{ display: "flex", flexDirection: "column" }}>
        <input
          {...register("email", {
            required: "필수 입력입니다.",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "@naver.com 만 사용할 수 있습니다.",
            },
            minLength: {
              value: 5,
              message: "5자 이상",
            },
          })}
          placeholder="email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("firstName", { required: "필수 입력입니다." })}
          placeholder="firstName"
        />
        <span>{errors?.firstName?.message}</span>
        <input
          {...register("lastName", { required: "필수 입력입니다." })}
          placeholder="lastName"
        />
        <span>{errors?.lastName?.message}</span>
        <input
          {...register("username", {
            required: "필수 입력입니다.",
            maxLength: {
              value: 10,
              message: "10자 이내",
            },
            validate: {
              noTest: value => !value.includes("test") || "no include 'test'",
              noNico: value => !value.includes("nico") || "no include 'nico'",
            },
          })}
          placeholder="username"
        />
        <span>{errors?.username?.message}</span>
        <input
          {...register("password", { required: "필수 입력입니다." })}
          placeholder="password"
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register("passwordConfirm", { required: "필수 입력입니다." })}
          placeholder="passwordConfirm"
        />
        <span>{errors?.passwordConfirm?.message}</span>
        <button>Add</button>
        <button type="button" onClick={() => clearErrors()}>
          Clear All Errors
        </button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}

export default ReactHookForm;
