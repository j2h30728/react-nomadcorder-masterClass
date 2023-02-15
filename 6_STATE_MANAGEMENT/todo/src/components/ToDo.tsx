import { ITodo } from "../atoms";

export default function ToDo({ text }: ITodo) {
  return (
    <li>
      <span>{text}</span>
      <button>TO_DO</button>
      <button>DOING</button>
      <button>DONE</button>
    </li>
  );
}
