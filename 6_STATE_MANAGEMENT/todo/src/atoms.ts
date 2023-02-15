import { atom, selector } from "recoil";

export interface ITodo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}
export const toDoState = atom<ITodo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelctor",
  get: ({ get }) => {
    const toDos = get(toDoState);
    return [
      toDos.filter(toDo => toDo.category === "TO_DO"),
      toDos.filter(toDo => toDo.category === "DOING"),
      toDos.filter(toDo => toDo.category === "DONE"),
    ];
  },
});
